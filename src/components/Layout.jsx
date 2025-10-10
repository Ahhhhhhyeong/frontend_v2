import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import { Toaster } from 'react-hot-toast';

// --- 아이콘 컴포넌트들 ---
// [오류 수정] 아이콘을 함수가 아닌 JSX 컴포넌트로 반환하도록 수정합니다.
const SearchIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
      stroke='#333'
      strokeWidth='2'
    />
    <path d='M21 21L16.65 16.65' stroke='#333' strokeWidth='2' />
  </svg>
);
const HomeIcon = ({ isActive }) => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path
      d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
      stroke={isActive ? '#15C47E' : '#6a7685'}
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const CommunityIcon = ({ isActive }) => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path
      d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm8 10a2 2 0 0 1-2-2v-2m-2-4h6a2 2 0 0 1 2 2v2'
      stroke={isActive ? '#15C47E' : '#6a7685'}
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const MyPageIcon = ({ isActive }) => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path
      d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'
      stroke={isActive ? '#15C47E' : '#6a7685'}
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const WriteIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.4745 5.40801L18.5917 7.52524M17.8358 3.54288C17.6425 3.34956 17.3856 3.2439 17.1202 3.2439C16.8548 3.2439 16.5979 3.34956 16.4046 3.54288L8.27346 11.6741C8.07344 11.8741 7.96232 12.1534 7.96232 12.4439V16.0377H11.5562C11.8466 16.0377 12.126 15.9266 12.3259 15.7266L20.4571 7.59544C20.6504 7.40212 20.7561 7.14522 20.7561 6.87981C20.7561 6.6144 20.6504 6.3575 20.4571 6.16418L17.8358 3.54288Z'
      stroke='white'
      strokeWidth='2'
    />
    <path d='M19 12V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6' stroke='white' strokeWidth='2' />
  </svg>
);

export default function Layout() {
  const location = useLocation();
  // 현재 경로가 커뮤니티 페이지인지 확인합니다.
  const isCommunityPage = location.pathname.startsWith('/community');

  return (
    <div className={styles.container}>
      {/* --- 상단 헤더 --- */}
      <header className={styles.header}>
        <div className={styles.tabContainer}>
          <NavLink to='/' className={({ isActive }) => (isActive ? `${styles.tab} ${styles.active}` : styles.tab)}>
            커머스
          </NavLink>
          <NavLink
            to='/community'
            className={({ isActive }) => (isActive ? `${styles.tab} ${styles.active}` : styles.tab)}>
            커뮤니티
          </NavLink>
        </div>
        <button className={styles.searchButton}>
          <SearchIcon />
        </button>
      </header>

      {/* --- 메인 컨텐츠 (페이지 내용이 여기에 표시됩니다) --- */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>

      {/* --- 하단 네비게이션 바 --- */}
      <nav className={styles.navBar}>
        <NavLink to='/' className={styles.navLink}>
          {({ isActive }) => (
            <>
              <HomeIcon isActive={isActive} />
              <span>홈</span>
            </>
          )}
        </NavLink>
        <NavLink to='/community' className={styles.navLink}>
          {({ isActive }) => (
            <>
              <CommunityIcon isActive={isActive} />
              <span>커뮤니티</span>
            </>
          )}
        </NavLink>
        <NavLink to='/mypage' className={styles.navLink}>
          {({ isActive }) => (
            <>
              <MyPageIcon isActive={isActive} />
              <span>마이페이지</span>
            </>
          )}
        </NavLink>
      </nav>

      {/* [요청사항 수정] 커뮤니티 페이지에서만 '글쓰기' 버튼이 보이도록 합니다. */}
      {isCommunityPage && (
        <NavLink to='/community/write' className={styles.writeButton}>
          <WriteIcon />
        </NavLink>
      )}
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}
