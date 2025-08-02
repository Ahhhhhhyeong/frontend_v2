// src/data.js

// --- Asset Imports ---
import UserProfile1 from './assets/images/user-profile-1.png';
import UserProfile2 from './assets/images/user-profile-2.png';
import PostImage1 from './assets/images/post-image-1.jpg';
import ProductImage1 from './assets/images/product-image-1.png';

// ✨ [수정] export 변수명을 'farmerStories'로 통일합니다.
export const farmerStories = [
  {
    id: 1,
    user: {
      name: '싱그러운 농부',
      avatar: UserProfile1,
      isFollowing: true,
    },
    content: '오늘 수확한 상추 좀 보세요! 너무 예쁘지 않나요? 팜어스 마켓에도 올렸으니 구경오세요~',
    images: [PostImage1],
    category: '농사일기',
    product: {
      id: 101,
      name: '무농약 꿀사과',
      price: '15,000원',
      image: ProductImage1,
    },
    tags: [
        { y: 150, x: 150 }
    ],
    stats: {
      likes: '1.2k',
      comments: '8',
      isLiked: false,
    },
    timeAgo: '1시간 전',
  },
  {
    id: 2,
    user: {
      name: '행복한 농장주',
      avatar: UserProfile2,
      isFollowing: false,
    },
    content: '다들 점심 뭐 드셨나요? 저는 갓 따온 토마토로 파스타 해먹었어요. 역시 직접 키운 게 최고네요 ㅎㅎ',
    images: [],
    category: '일상',
    product: null,
    tags: [],
    stats: {
      likes: '345',
      comments: '12',
      isLiked: true,
    },
    timeAgo: '3시간 전',
  },
];