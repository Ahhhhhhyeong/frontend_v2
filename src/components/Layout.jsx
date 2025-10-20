import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import { Toaster } from 'react-hot-toast';
import Header from './Header/Header';
// import WriteButton from './button/WriteButton';
import MainTabs from './Tab/MainTabs';
import MyPageHeader from './Header/MyPageHeader';
import { useScrollDirection, useHeaderHeight } from '../hooks/useScrollDirection';

// --- 아이콘 컴포넌트들 ---
// [오류 수정] 아이콘을 함수가 아닌 JSX 컴포넌트로 반환하도록 수정합니다.
export default function Layout() {
  const location = useLocation();
  const scrollDirection = useScrollDirection();
  const { headerHeight, headerRef } = useHeaderHeight(location);

  // 디버깅용 로그 추가
  console.log('scrollDirection:', scrollDirection);
  console.log('window.scrollY:', window.scrollY);

  // 커뮤니티 페이지 체크
  const isCommunityPage = location.pathname.startsWith('/community');
  // Header와 MainTabs를 보여줄 페이지들 정의
  const showHeaderAndTabs = location.pathname === '/' || location.pathname === '/community';
  // 마이페이지 헤더
  const showMypageHeader = location.pathname === '/mypage' || location.pathname === '/seller-mypage';

  return (
    <div className={styles.container}>
      {/* 특정 페이지에서만 헤더와 탭 표시 */}
      {showHeaderAndTabs && (
        <div
          ref={headerRef}
          className={`${styles.headerContainer} ${scrollDirection === 'down' ? styles.hidden : styles.visible}`}>
          <Header />
          <MainTabs showSearch={false} />
        </div>
      )}
      {/* 마이페이지 헤더  */}
      {showMypageHeader && (
        <div
          ref={headerRef}
          className={`${styles.headerContainer} ${scrollDirection === 'down' ? styles.hidden : styles.visible}`}>
          <MyPageHeader />
        </div>
      )}
      <main
        className={styles.mainContent}
        style={{ marginTop: headerHeight }} // 동적으로 margin 설정
      >
        <Outlet />
      </main>

      {/* {isCommunityPage && <WriteButton />} */}

      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
}
