// utils/formData.js
// utils/formData.js
export const createFormData = (data, options = {}) => {
  const {
    arrayKeyFormat = 'multiple', // 'brackets', 'multiple', 'indexed'
    maxFileSize = 10 * 1024 * 1024,
    maxTotalSize = 50 * 1024 * 1024,
    maxFileCount = 10,
    validateFiles = true,
  } = options;

  const formData = new FormData();
  let totalSize = 0;
  let fileCount = 0;

  console.log('📝 FormData 변환 시작:', data);

  const addFileWithValidation = (key, file) => {
    if (validateFiles) {
      if (file.size > maxFileSize) {
        throw new Error(`파일 "${file.name}"이 최대 크기를 초과했습니다.`);
      }

      totalSize += file.size;
      if (totalSize > maxTotalSize) {
        throw new Error('전체 파일 크기 제한을 초과했습니다.');
      }

      fileCount++;
      if (fileCount > maxFileCount) {
        throw new Error('파일 개수 제한을 초과했습니다.');
      }
    }

    formData.append(key, file);
  };

  try {
    Object.keys(data).forEach((key) => {
      const value = data[key];

      if (value === null || value === undefined) {
        formData.append(key, '');
      } else if (value instanceof File) {
        addFileWithValidation(key, value);
      } else if (isBase64(value)) {
        const filename = `${key}_${Date.now()}.${getExtensionFromBase64(value)}`;
        const file = base64ToBlob(value, filename);
        if (file) {
          addFileWithValidation(key, file);
        } else {
          formData.append(key, value);
        }
      } else if (Array.isArray(value)) {
        handleArrayValue(formData, key, value, arrayKeyFormat, addFileWithValidation);
      } else if (typeof value === 'object') {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    console.log('✅ FormData 변환 완료');
    return formData;
  } catch (error) {
    console.error('❌ FormData 변환 실패:', error);
    throw error;
  }
};

export const createFormDataForMultipart = (mappedData, options = {}) => {
  const formData = new FormData();
  // postCreateRequest를 JSON 문자열로 추가
  if (mappedData.postCreateRequest) {
    const jsonString = JSON.stringify(mappedData.postCreateRequest);
    formData.append('postCreateRequest', jsonString);
    console.log('📄 postCreateRequest 추가:', jsonString);
  }

  // images 파일들 추가
  if (mappedData.images && Array.isArray(mappedData.images)) {
    mappedData.images.forEach((file, index) => {
      if (file instanceof File) {
        formData.append('images', file);
        console.log(`📎 이미지 ${index + 1} 추가:`, file.name, file.type);
      }
    });
  }

  // 기타 파일들이나 추가 필드가 있다면
  Object.keys(mappedData).forEach((key) => {
    if (key !== 'postCreateRequest' && key !== 'images') {
      const value = mappedData[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (item instanceof File) {
            formData.append(key, item);
          }
        });
      } else if (value instanceof File) {
        formData.append(key, value);
      } else if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    }
  });

  // 결과 확인
  console.log('✅ FormData 내용:');
  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(`  ${key}: File(${value.name}, ${value.type})`);
    } else {
      console.log(`  ${key}: ${value}`);
    }
  }

  return formData;
};

// 배열 처리 함수 분리
function handleArrayValue(formData, key, value, keyFormat) {
  if (value.length === 0) {
    // 빈 배열 처리
    formData.append(key, '');
    return;
  }

  if (value.every((item) => item instanceof File)) {
    // 파일 배열 - 서버가 어떤 방식을 원하는지에 따라 조정
    value.forEach((file, index) => {
      const arrayKey = getArrayKey(key, index, keyFormat);
      formData.append(arrayKey, file);
    });
  } else if (value.every((item) => isBase64(item))) {
    // Base64 배열
    console.log(`🔄 Base64 배열 감지됨 - ${key} 필드들을 File로 변환`);
    value.forEach((base64Item, index) => {
      const filename = `${key}_${index}_${Date.now()}.${getExtensionFromBase64(base64Item)}`;
      const file = base64ToBlob(base64Item, filename);
      const arrayKey = getArrayKey(key, index, keyFormat);

      if (file) {
        formData.append(arrayKey, file);
        console.log(`✅ ${key}[${index}]: Base64 → File(${file.name}, ${file.size} bytes)`);
      } else {
        formData.append(arrayKey, base64Item);
      }
    });
  } else {
    // 일반 값 배열
    value.forEach((item, index) => {
      const arrayKey = getArrayKey(key, index, keyFormat);
      if (typeof item === 'object' && item !== null) {
        formData.append(arrayKey, JSON.stringify(item));
      } else {
        formData.append(arrayKey, String(item));
      }
    });
  }
}

// 배열 키 형식 생성
function getArrayKey(key, index, format) {
  switch (format) {
    case 'brackets':
      return `${key}[]`;
    case 'indexed':
      return `${key}[${index}]`;
    case 'multiple':
    default:
      return key;
  }
}

// 디버깅용 FormData 로깅 함수
export const logFormData = (formData, label = 'FormData') => {
  console.log(`📎 ${label}:`);
  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      console.log(`  ${key}: File(${value.name}, ${value.size} bytes)`);
    } else {
      console.log(`  ${key}:`, value);
    }
  }
};

// base64 검증 강화
export function isBase64(str) {
  if (typeof str !== 'string' || str.length === 0) return false;

  try {
    // 기본 형식 검사
    if (!str.startsWith('data:') || !str.includes('base64,')) return false;

    // MIME 타입 검사
    const mimeMatch = str.match(/^data:([^;]+);base64,/);
    if (!mimeMatch) return false;

    const mimeType = mimeMatch[1];
    const supportedTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/svg+xml',
      'application/pdf',
    ];

    if (!supportedTypes.includes(mimeType)) {
      console.warn(`지원하지 않는 MIME 타입: ${mimeType}`);
    }

    // Base64 데이터 유효성 검사
    const base64Data = str.split(',')[1];
    window.atob(base64Data); // 디코딩 테스트

    return true;
  } catch (error) {
    console.warn('Base64 유효성 검사 실패:', error);
    return false;
  }
}

// 이미지 base64를 blob으로 바꿔주는 형
export function base64ToBlob(base64, filename = null) {
  try {
    const parts = base64.split(',');
    if (parts.length !== 2) {
      throw new Error('Invalid base64 format');
    }

    const imageType = parts[0].split(':')[1].split(';')[0];
    const decodedData = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(decodedData.length);

    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    const blob = new Blob([uInt8Array], { type: imageType });

    // filename이 제공되었다면 File 객체로 반환
    if (filename) {
      return new File([blob], filename, { type: imageType });
    }

    return blob;
  } catch (error) {
    console.error('Base64 to Blob conversion failed:', error);
    return null;
  }
}
// base64에서 확장자 추출
function getExtensionFromBase64(base64) {
  try {
    const mimeType = base64.split(',')[0].split(':')[1].split(';')[0];
    const extensions = {
      'image/jpeg': 'jpg',
      'image/jpg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'image/webp': 'webp',
      'image/svg+xml': 'svg',
    };
    return extensions[mimeType] || 'jpg';
  } catch {
    return 'jpg';
  }
}
