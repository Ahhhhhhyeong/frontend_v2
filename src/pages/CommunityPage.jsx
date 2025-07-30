import React, { useState } from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import StatusBar from "../assets/icons/StatusBar.svg?react";

// 커뮤니티 게시물 데이터
const communityPosts = [
  {
    id: 1,
    user: {
      name: "딸기하는 준식이",
      avatar: "/src/assets/images/user-avatar-1.jpg",
      isFollowing: false,
    },
    content: `논산에서 15년째 딸기농사를 짓고 있어요.
화학비료 대신 천연 미생물 발효액을 사용해서
매일 아침, 내가 직접 맛보며 수확하는 설향 딸기입니다.
당일 수확한 딸기만 판매하며,
하나하나 제가 손으로 골라 담습니다.
농약을 줄이고, 자연의 시간에 맞춰 키운 달콤한 맛,
이제 소비자 분들도 직접 느껴보셨으면 좋겠어요.`,
    images: [
      "/src/assets/images/strawberry-farm.jpg",
    ],
    currentImageIndex: 0,
    totalImages: 9,
    product: {
      brand: "새벽들딸기농원",
      name: "[당일 수확] 논산 유기농 설향 딸기 1kg",
      discount: "12%",
      price: "14,960원",
      image: "/src/assets/images/strawberry-product.jpg",
    },
    tags: [
      { x: 74, y: 196 }
    ],
    stats: {
      likes: "999+",
      comments: "999+",
      isLiked: false,
    },
    timeAgo: "2시간 전",
  },
  {
    id: 2,
    user: {
      name: "감자농부김씨",
      avatar: "/src/assets/images/user-avatar-2.jpg",
      isFollowing: false,
    },
    content: `올해는 장마가 일찍 와서 감자 수확이 어려웠어요.
흙이 질어도 포기하지 않고 하루하루 수확했어요.
물컹한 감자 골라내고, 단단한 것만 남겼습니다.
이번 감자는 볶음이나 찜용으로 딱이에요.`,
    images: [
      "/src/assets/images/potato-farm.jpg",
    ],
    currentImageIndex: 0,
    totalImages: 5,
    product: {
      brand: "농부 브랜드",
      name: "강원도 찐 감자 3kg",
      discount: "15%",
      price: "12,000원",
      image: "/src/assets/images/potato-product.jpg",
    },
    tags: [
      { x: 299, y: 82 },
      { x: 74, y: 104 },
      { x: 291, y: 297 }
    ],
    stats: {
      likes: "456",
      comments: "23",
      isLiked: false,
    },
    timeAgo: "5시간 전",
  },
];

// 필터 카테고리 데이터
const filterCategories = [
  { id: "all", label: "전체", isActive: true },
  { id: "crafts", label: "공예품", isActive: false },
  { id: "agriculture", label: "농산물", isActive: false },
  { id: "seafood", label: "수산물", isActive: false },
  { id: "livestock", label: "축산업", isActive: false },
];

const CommunityPage = () => {
  const [posts, setPosts] = useState(communityPosts);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("community");

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            stats: { 
              ...post.stats, 
              isLiked: !post.stats.isLiked,
              likes: post.stats.isLiked 
                ? (parseInt(post.stats.likes.replace('+', '')) - 1).toString() + (post.stats.likes.includes('+') ? '+' : '')
                : (parseInt(post.stats.likes.replace('+', '')) + 1).toString() + (post.stats.likes.includes('+') ? '+' : '')
            }
          }
        : post
    ));
  };

  const handleFollow = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, user: { ...post.user, isFollowing: !post.user.isFollowing } }
        : post
    ));
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Status Bar */}
        <div className="sticky top-0 z-20 bg-white">
          <StatusBar />
        </div>

        {/* Header */}
        <Header />

        {/* Navigation Tabs */}
        <div className="bg-white border-b-2 border-gray-100">
          <div className="flex w-full px-5">
            <button
              onClick={() => setActiveTab("commerce")}
              className={`flex-1 py-3 text-base font-semibold ${
                activeTab === "commerce"
                  ? "text-gray-800 border-b-3 border-gray-800"
                  : "text-gray-400"
              }`}
            >
              커머스
            </button>
            <button
              onClick={() => setActiveTab("community")}
              className={`flex-1 py-3 text-base font-semibold ${
                activeTab === "community"
                  ? "text-gray-800 border-b-3 border-gray-800"
                  : "text-gray-400"
              }`}
            >
              커뮤니티
            </button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex w-full items-center gap-2 px-5 py-2 overflow-x-auto bg-white">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-3 py-1.5 rounded-full border whitespace-nowrap text-sm ${
                activeFilter === category.id
                  ? "bg-green-50 border-green-500 text-green-500 font-medium"
                  : "bg-transparent border-gray-200 text-gray-500"
              }`}
            >
              {category.label}
            </button>
          ))}
          <button className="px-3 py-1.5 rounded-full border bg-transparent border-gray-200 text-gray-500">
            더보기
          </button>
        </div>

        {/* Posts Section */}
        <div className="flex flex-col w-full items-start gap-12 pb-24 bg-white">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start w-full">
              <div className="flex flex-col items-center gap-4 w-full">
                {/* User Header */}
                <div className="flex items-center justify-between px-5 py-4 w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                      <img
                        src={post.user.avatar}
                        alt={post.user.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23e5e7eb'/%3E%3Cpath d='M16 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM8 24a8 8 0 0 1 16 0' fill='%23fff'/%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <span className="font-medium text-base text-gray-800">
                      {post.user.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleFollow(post.id)}
                    className={`px-4 py-1 text-base font-semibold ${
                      post.user.isFollowing 
                        ? "text-gray-500" 
                        : "text-green-500"
                    }`}
                  >
                    {post.user.isFollowing ? "팔로잉" : "팔로우"}
                  </button>
                </div>

                {/* Post Content */}
                <div className="w-full px-5 mb-4">
                  <p className="text-gray-800 text-[15px] leading-[22px] line-clamp-4">
                    {post.content}
                  </p>
                </div>

                {/* Image Container */}
                <div className="relative w-full h-[400px] bg-gray-200">
                  <img
                    src={post.images[post.currentImageIndex]}
                    alt="Post image"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='375' height='400' viewBox='0 0 375 400'%3E%3Crect width='375' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280'%3E이미지를 불러올 수 없습니다%3C/text%3E%3C/svg%3E";
                    }}
                  />

                  {/* Product Tags */}
                  {post.tags.map((tag, index) => (
                    <div 
                      key={index} 
                      className="absolute w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
                      style={{ top: `${tag.y}px`, left: `${tag.x}px` }}
                    >
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                  ))}

                  {/* Image Controls */}
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-black bg-opacity-70 rounded-full flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <path d="M2 2h7v7H2V2z" stroke="white" strokeWidth="1" fill="none"/>
                      <path d="M4 4h3v3H4V4z" stroke="white" strokeWidth="1" fill="none"/>
                    </svg>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-60 rounded-full px-2 py-1">
                    <span className="text-white text-xs font-medium">
                      {post.currentImageIndex + 1}/{post.totalImages}
                    </span>
                  </div>

                  {/* Product Card */}
                  {post.id === 1 && (
                    <div className="absolute top-[115px] left-[66px] bg-gray-800 bg-opacity-80 rounded-xl p-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-14 h-14 bg-gray-300 rounded-lg overflow-hidden">
                          <img 
                            src={post.product.image} 
                            alt={post.product.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Crect width='56' height='56' fill='%23d1d5db' rx='8'/%3E%3C/svg%3E";
                            }}
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-white text-xs font-medium">
                            {post.product.brand}
                          </span>
                          <span className="w-[120px] text-white text-xs font-medium truncate">
                            {post.product.name}
                          </span>
                          <div className="flex items-center gap-1">
                            <span className="text-orange-400 text-sm font-semibold">
                              {post.product.discount}
                            </span>
                            <span className="text-white text-sm font-semibold">
                              {post.product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start mt-2">
                        <div className="w-0 h-0 border-l-[7.5px] border-r-[7.5px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-800"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between px-5 py-3 w-full">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleLike(post.id)}
                        className="w-6 h-6 flex items-center justify-center"
                      >
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none">
                          <path 
                            d="M20.84 3.61c-.64-.7-1.44-1.25-2.36-1.61-.92-.36-1.9-.42-2.85-.18-.95.24-1.82.73-2.54 1.43-.72.7-1.26 1.58-1.59 2.58-.33-1-.87-1.88-1.59-2.58-.72-.7-1.59-1.19-2.54-1.43-.95-.24-1.93-.18-2.85.18-.92.36-1.72.91-2.36 1.61C1.5 4.31 1 5.23 1 6.23c0 1 .5 1.92 1.16 2.62L11.5 18l9.34-9.15c.66-.7 1.16-1.62 1.16-2.62 0-1-.5-1.92-1.16-2.62z" 
                            stroke={post.stats.isLiked ? "#ef4444" : "#6b7280"} 
                            fill={post.stats.isLiked ? "#ef4444" : "none"}
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                      <span className="text-gray-500 text-sm">
                        {post.stats.likes}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path 
                            d="M18 10c0 4.42-3.58 8-8 8-.83 0-1.64-.13-2.4-.37L2 20l2.37-5.6C4.13 13.64 4 12.83 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8z" 
                            stroke="#6b7280" 
                            fill="none"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                      <span className="text-gray-500 text-sm">
                        {post.stats.comments}
                      </span>
                    </div>
                  </div>
                  <button className="w-6 h-6 flex items-center justify-center">
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
                      <path 
                        d="M1 19l6-6 6 6V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16z" 
                        stroke="#6b7280" 
                        fill="none"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                </div>

                {/* Time stamp */}
                <div className="px-5 pb-2 w-full">
                  <span className="text-gray-400 text-xs">
                    {post.timeAgo}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-10 right-5 w-[52px] h-[52px] bg-black rounded-2xl shadow-lg flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Navigation */}
        <Navigation />
      </div>
    </Layout>
  );
};

export default CommunityPage;
