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

export const ChevronRightIcon = () => (
   <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
   </svg>
);

export const HomeIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
   </svg>
);

export const SettingsIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.84 2.37 2.373a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.84 3.31-2.373 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.84-2.37-2.373a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.84-3.31 2.373-2.37a1.724 1.724 0 002.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
   </svg>
);

export const CouponIcon = () => (
   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 5H2.5V17.5C2.5 17.7761 2.72386 18 3 18H17C17.2761 18 17.5 17.7761 17.5 17.5V5Z" stroke="#3B4149" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.5 5H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5H17C17.2761 2.5 17.5 2.72386 17.5 3V5Z" stroke="#3B4149" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 10H12.5" stroke="#3B4149" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
);

export const CheckCircleIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export const StarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

export const ChevronLeftIcon = (props) => (
  <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>
);

export const ArrowLeftIcon = (props) => (
   <svg {...props} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
   </svg>
);

export const ChevronBottomIcon = (props) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 9L12 16.5L4.5 9" stroke="#BAC0C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CameraIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2"></path>
    <path d="M12 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  </svg>
);

export const TrashIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 7l16 0"></path>
    <path d="M10 11l0 6"></path>
    <path d="M14 11l0 6"></path>
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
  </svg>
);