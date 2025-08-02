import { create } from 'zustand';

// 이미지 파일을 Base64로 변환하는 헬퍼 함수
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

// 커뮤니티 글쓰기용 Zustand 스토어
const useCommunityWriteStore = create((set) => ({
    // --- 글쓰기 데이터 ---
    content: '',        // 글 내용
    images: [],         // 첨부 이미지 (Base64 형식)
    taggedProducts: [], // 태그된 상품 정보
    category: '일상',   // 선택된 카테고리

    // --- 액션 함수들 ---

    // 여러 데이터를 한번에 업데이트
    setData: (data) => set((state) => ({ ...state, ...data })),

    // 이미지 추가 (최대 5장)
    addImages: async (files) => {
        const imageFiles = Array.from(files);
        set(async (state) => {
            if (state.images.length + imageFiles.length > 5) {
                alert('이미지는 최대 5장까지 첨부할 수 있습니다.');
                return state;
            }
            const base64Images = await Promise.all(imageFiles.map(file => toBase64(file)));
            return { images: [...state.images, ...base64Images] };
        });
    },

    // 이미지 삭제
    removeImage: (index) => set(state => ({
        images: state.images.filter((_, i) => i !== index),
    })),

    // 상품 태그 추가/삭제
    toggleProductTag: (product) => set(state => {
        const isAlreadyTagged = state.taggedProducts.some(p => p.id === product.id);
        if (isAlreadyTagged) {
            // 이미 태그된 상품이면 제거
            return { taggedProducts: state.taggedProducts.filter(p => p.id !== product.id) };
        } else {
            // 새로 태그하는 상품이면 추가
            return { taggedProducts: [...state.taggedProducts, product] };
        }
    }),

    // 스토어 초기화 (글 등록 완료 후 호출)
    reset: () => set({
        content: '',
        images: [],
        taggedProducts: [],
        category: '일상',
    }),
}));

export default useCommunityWriteStore;