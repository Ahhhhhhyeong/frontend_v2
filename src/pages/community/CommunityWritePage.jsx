// src/pages/community/CommunityWritePage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCommunityWriteStore from '../../store/communityWriteStore';
import styles from './CommunityWritePage.module.css';

// --- 아이콘 ---
const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CameraIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 8.25V6.75C4 5.64543 4.89543 4.75 6 4.75H8.5L10.5 2.75H13.5L15.5 4.75H18C19.1046 4.75 20 5.64543 20 6.75V8.25M4 8.25V17.25C4 18.3546 4.89543 19.25 6 19.25H18C19.1046 19.25 20 18.3546 20 17.25V8.25M4 8.25H20M12 16.25C13.6569 16.25 15 14.9069 15 13.25C15 11.5931 13.6569 10.25 12 10.25C10.3431 10.25 9 11.5931 9 13.25C9 14.9069 10.3431 16.25 12 16.25Z" stroke="#6a7685" strokeWidth="1.5"/></svg> );

export default function CommunityWritePage() {
    const navigate = useNavigate();
    // Zustand 스토어에서 상태와 액션을 가져옵니다.
    const { content, category, setData } = useCommunityWriteStore();
    
    const categories = ['일상', '농사일기', '궁금해요', '나눔해요', '꿀팁'];

    // 글자 수에 따라 '다음' 버튼 활성화 여부 결정
    const isNextButtonEnabled = content.length > 0;

    // '다음' 버튼 클릭 시, 데이터를 저장하고 다음 페이지로 이동합니다.
    const handleNext = () => {
        if (isNextButtonEnabled) {
            navigate('/community/write-image');
        }
    };

    return (
        <div className={styles.wrapper}>
            {/* --- 상단 헤더 --- */}
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.iconButton}><ChevronLeftIcon /></button>
                <h1 className={styles.headerTitle}>커뮤니티 글쓰기</h1>
                <button 
                    onClick={handleNext} 
                    className={isNextButtonEnabled ? styles.nextButtonActive : styles.nextButtonInactive}
                    disabled={!isNextButtonEnabled}
                >
                    다음
                </button>
            </header>

            {/* --- 메인 컨텐츠 (글쓰기 영역) --- */}
            <main className={styles.content}>
                <textarea 
                    value={content}
                    onChange={(e) => setData({ content: e.target.value })}
                    className={styles.textarea}
                    placeholder="이런 저런 상품 이야기를 나누어보세요.&#10;어떤 사진인지 짧은 소개로 시작해보세요." 
                />
            </main>

            {/* --- 하단 바 (카테고리 선택 및 기능 버튼) --- */}
            <footer className={styles.bottomBar}>
                <div className={styles.categoryScrollContainer}>
                    {categories.map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setData({ category: cat })}
                            className={category === cat ? styles.categoryChipActive : styles.categoryChip}
                        >
                            #{cat}
                        </button>
                    ))}
                </div>
                <div className={styles.functionButtons}>
                    <button onClick={() => document.getElementById('image-upload-input')?.click()} className={styles.iconButton}>
                        <CameraIcon />
                        <span>사진</span>
                    </button>
                    {/* 이미지 업로드를 위한 숨겨진 input */}
                    <input id="image-upload-input" type="file" multiple accept="image/*" style={{ display: 'none' }} 
                           onChange={(e) => navigate('/community/write-image', { state: { files: e.target.files } })} />
                </div>
            </footer>
        </div>
    );
}