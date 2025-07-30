// src/data.js

// 1. 내용을 알 수 있는 명확한 파일 이름을 사용합니다.
// 비교: '11.jpg'와 같은 의미 없는 이름 대신, 'product-suvack.png'처럼 내용을 알 수 있는 명확한 파일 이름을 사용합니다.
import suvackImg from './assets/images/product-strawberry.jpg';
// 비교: '23.jpg' 대신 'strawberry.png'를 사용하여 어떤 이미지인지 바로 알 수 있습니다.
import strawberryImg from './assets/images/product-watermelon.jpg';

// 임시 이미지들은 그대로 사용합니다.
import tempProductImg1 from './assets/images/card-small.jpg';
import tempProductImg2 from './assets/images/card-large.jpg';
import tempStoryImg from './assets/images/card-large-1.jpg';
import userProfileImg from './assets/images/user-profile.png';

// 2. 모든 데이터의 'image' 속성을 import한 로컬 이미지 변수로 교체합니다.
export const interestProducts = [
  // 비교: '수박hh'와 같은 불필요한 텍스트를 정리하여 데이터의 정확성을 높입니다.
  { id: 1, name: '고당도 하우스 수박', price: '21,000원', discount: '16%', image: suvackImg },
  { id: 2, name: '초당 옥수수 10개입', price: '15,900원', discount: '20%', image: tempProductImg1 },
  { id: 3, name: '유기농 블루베리 500g', price: '18,000원', discount: '10%', image: strawberryImg },
];

export const seasonalProducts = [
  { id: 1, rank: 1, name: 'GAP 인증 자두 (대과)', price: '25,900원', discount: '13%', rating: '5.0', reviews: '999+', image: tempProductImg2 },
  { id: 2, rank: 2, name: '해남 미니 밤호박 3kg', price: '19,900원', discount: '15%', rating: '4.9', reviews: '999+', image: tempProductImg1 },
];

export const farmerStories = [
  { id: 1, title: '산골짜기에서 온 달콤한 선물', user: { name: '복숭아 농부', avatar: userProfileImg }, time: '7시간 전', image: tempStoryImg },
  { id: 2, title: '토마토가 익어가는 계절', user: { name: '토마토 할머니', avatar: userProfileImg }, time: '1일 전', image: tempStoryImg },
];