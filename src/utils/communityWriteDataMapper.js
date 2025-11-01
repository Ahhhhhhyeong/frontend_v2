// 저장/불러오기 모두 처리하는 맵핑 로직
export const communityWriteMapper = (data) => {
  return {
    postCreateRequest: { title: data?.title, content: data?.content, itemIds: [] }, // 아이템 id만 가져와야함
    images: data?.images,
  };
};
