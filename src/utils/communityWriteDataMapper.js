// 저장/불러오기 모두 처리하는 맵핑 로직
// export const communityWriteMapper = (data) => {
//   return {
//     postCreateRequest: { title: data?.title, content: data?.content, itemIds: [] }, // 아이템 id만 가져와야함
//     images: data?.images,
//   };
// };

export const communityWriteMapper = (data) => {
  console.log('🔍 매퍼 입력 데이터:', data);

  const result = {
    postCreateRequest: {
      title: data?.title,
      content: data?.content,
      itemIds: data?.itemIds || [],
    },
    images: data?.images,
  };

  console.log('🔍 매퍼 출력 데이터:', result);
  console.log('🔍 images 확인:', {
    exists: !!result.images,
    isArray: Array.isArray(result.images),
    length: result.images?.length,
    items: result.images?.map((img) => ({
      isFile: img instanceof File,
      name: img?.name,
    })),
  });

  return result;
};
