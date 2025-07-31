import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../components/Icons.jsx";
import ProductTooltip from "../components/ProductTooltip.jsx";

// 👇 1. 웹에서 사용할 실제 이미지 파일들을 import 합니다.
import userAvatar1 from '../assets/images/user-profile.png';
import strawberryFarmImg from '../assets/images/homecommerce.png';
import strawberryProductImg from '../assets/images/product-strawberry.jpg';
import potatoFarmImg from '../assets/images/product-suvack.png';
import potatoProductImg from '../assets/images/product-watermelon.jpg';

// 👇 2. 커뮤니티 게시물 데이터를 실제 이미지와 상품 태그 위치 정보로 업데이트합니다.
const initialPosts = [
  {
    id: 1,
    user: {
      name: "딸기하는 준식이",
      avatar: userAvatar1,
      isFollowing: false,
    },
    content: `논산에서 15년째 딸기농사를 짓고 있어요.\n화학비료 대신 천연 미생물 발효액을 사용해서\n매일 아침, 내가 직접 맛보며 수확하는 설향 딸기입니다.`,
    images: [strawberryFarmImg],
    product: {
      brand: "새벽들딸기농원",
      name: "[당일 수확] 논산 유기농 설향 딸기 1kg",
      discount: "12%",
      price: "14,960원",
      image: strawberryProductImg,
    },
    // 상품 태그의 좌표 (y, x)
    tags: [{ y: 220, x: 100 }],
    stats: { likes: "999+", comments: "123", isLiked: false },
    timeAgo: "2시간 전",
  },
  {
    id: 2,
    user: {
      name: "감자농부김씨",
      avatar: userAvatar1,
      isFollowing: true,
    },
    content: `올해는 장마가 일찍 와서 감자 수확이 어려웠어요.\n흙이 질어도 포기하지 않고 하루하루 수확했어요.\n이번 감자는 볶음이나 찜용으로 딱이에요.`,
    images: [potatoFarmImg],
    product: {
      brand: "감자농부네",
      name: "강원도 못난이 감자 3kg",
      discount: "15%",
      price: "12,000원",
      image: potatoProductImg,
    },
    tags: [{ y: 150, x: 180 }],
    stats: { likes: "456", comments: "23", isLiked: true },
    timeAgo: "5시간 전",
  },
];

// 필터 카테고리 (기존과 동일)
const filterCategories = ["전체", "공예품", "농산물", "수산물", "축산업"];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [activeFilter, setActiveFilter] = useState("전체");
  // 👇 3. 어떤 게시물의 상품 툴팁을 보여줄지 ID로 관리하는 상태 추가
  const [activeTooltipId, setActiveTooltipId] = useState(null);

  // ... (handleLike, handleFollow 함수는 기존과 동일하게 유지)

  return (
    <div className="relative pb-24"> {/* 버튼에 가려지지 않도록 하단 패딩 추가 */}
      {/* Filter Section */}
      <div className="flex w-full items-center gap-2 px-4 py-2 overflow-x-auto bg-white border-b sticky top-[109px] z-10">
        {filterCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-3 py-1.5 rounded-full border whitespace-nowrap text-sm ${
              activeFilter === category
                ? "bg-green-50 border-green-500 text-green-500 font-medium"
                : "bg-transparent border-gray-200 text-gray-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Posts Section */}
      <div className="flex flex-col w-full items-start bg-white">
        {posts.map((post) => (
          <article key={post.id} className="w-full border-b py-4">
            {/* User Header */}
            <div className="flex items-center justify-between px-4 pb-3">
              <div className="flex items-center gap-3">
                <img src={post.user.avatar} alt={post.user.name} className="w-8 h-8 rounded-full object-cover" />
                <span className="font-medium text-base text-gray-800">{post.user.name}</span>
              </div>
              <button className={`px-4 py-1 text-sm font-semibold ${ post.user.isFollowing ? "text-gray-500" : "text-green-500" }`}>
                {post.user.isFollowing ? "팔로잉" : "팔로우"}
              </button>
            </div>

            {/* Post Content */}
            <div className="w-full px-4 mb-3">
              <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-[375px] bg-gray-200">
              <img src={post.images[0]} alt="게시물 이미지" className="w-full h-full object-cover" />
              
              {/* 👇 4. 상품 태그를 클릭하면 activeTooltipId 상태를 변경하여 툴팁을 토글합니다. */}
              {post.tags.map((tag, index) => (
                <div key={index}>
                  <button
                    onClick={() => setActiveTooltipId(activeTooltipId === post.id ? null : post.id)}
                    className="absolute w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                    style={{ top: `${tag.y}px`, left: `${tag.x}px` }}
                  >
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  </button>

                  {/* 👇 5. activeTooltipId가 현재 게시물 ID와 같을 때만 상품 툴팁을 보여줍니다. */}
                  {activeTooltipId === post.id && (
                    <ProductTooltip product={post.product} position={tag} />
                  )}
                </div>
              ))}
            </div>
            
            {/* ... (Post Actions, Time stamp 부분은 기존과 동일하게 유지) ... */}
          </article>
        ))}
      </div>

      {/* 👇 6. 글쓰기 버튼 (MainPage와 동일한 형태) */}
      <Link to="/register-product" className="fixed bottom-6 right-4 z-20">
        <button className="bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition">
          <EditIcon />
        </button>
      </Link>
    </div>
  );
};