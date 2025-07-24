// src/components/Icons.jsx
// 이 파일은 앱 전체에서 사용되는 모든 아이콘 컴포넌트를 모아놓은 곳입니다.

import React from 'react';

export const LogoIcon = () => (
   <svg
      width="86"
      height="24"
      viewBox="0 0 86 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <text
         x="0"
         y="20"
         fontFamily="Arial, sans-serif"
         fontSize="24"
         fill="black"
         fontWeight="bold"
      >
         Farm:Us
      </text>
   </svg>
);

export const ShoppingCartIcon = () => (
   <svg
      className="w-6 h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
   </svg>
);

export const UserIcon = () => (
   <svg
      className="w-6 h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      ></path>
   </svg>
);

export const HeartIcon = () => (
   <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
      ></path>
   </svg>
);

export const MessageCircleIcon = () => (
   <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
      ></path>
   </svg>
);

export const BookmarkIcon = () => (
   <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
      ></path>
   </svg>
);

export const PlusCircleIcon = () => (
   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path
         fillRule="evenodd"
         d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
         clipRule="evenodd"
      ></path>
   </svg>
);

export const EditIcon = () => (
   <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      ></path>
   </svg>
);

export const XIcon = () => (
   <svg
      className="w-6 h-6 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
   >
      <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M6 18L18 6M6 6l12 12"
      ></path>
   </svg>
);
