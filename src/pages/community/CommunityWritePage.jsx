import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CommunityWritePage.module.css';

// --- 아이콘 ---
const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CameraIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M4 8.25V6.75C4 5.64543 4.89543 4.75 6 4.75H8.5L10.5 2.75H13.5L15.5 4.75H18C19.1046 4.75 20 5.64543 20 6.75V8.25M4 8.25V17.25C4 18.3546 4.89543 19.25 6 19.25H18C19.1046 19.25 20 18.3546 20 17.25V8.25M4 8.25H20M12 16.25C13.6569 16.25 15 14.9069 15 13.25C15 11.5931 13.6569 10.25 12 10.25C10.3431 10.25 9 11.5931 9 13.25C9 14.9069 10.3431 16.25 12 16.25Z" stroke="#6a7685" strokeWidth="1.5"/></svg> );
const TagIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" stroke="#6a7685" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );


export default function CommunityWritePage() {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('일상'); // 기본 카테고리
    const categories = ['일상', '농사일기', '궁금해요', '나눔해요', '꿀팁'];

    // 글자 수에 따라 '다음' 버튼 활성화 여부 결정
    const isNextButtonEnabled = text.length > 0;

    return (
        <div className={styles.wrapper}>
            {/* --- 상단 헤더 --- */}
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.iconButton}><ChevronLeftIcon /></button>
                <h1 className={styles.headerTitle}>글쓰기</h1>
                {/* 글자 입력 시에만 '다음' 버튼 활성화 */}
                <button 
                    onClick={() => console.log("다음 단계로 이동")} 
                    className={isNextButtonEnabled ? styles.nextButtonActive : styles.nextButtonInactive}
                    disabled={!isNextButtonEnabled}
                >
                    다음
                </button>
            </header>

            {/* --- 메인 컨텐츠 (글쓰기 영역) --- */}
            <main className={styles.content}>
                <textarea 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={styles.textarea}
                    placeholder="농부들과 나누고 싶은 이야기를 적어보세요. (예: 오늘 수확한 작물 자랑, 농사 꿀팁 공유)" 
                />
            </main>

            {/* --- 하단 바 (카테고리 선택 및 기능 버튼) --- */}
            <footer className={styles.bottomBar}>
                {/* 튤립.jpg 참조 - 스크롤 가능한 카테고리 바 */}
                <div className={styles.categoryScrollContainer}>
                    {categories.map(category => (
                        <button 
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={selectedCategory === category ? styles.categoryChipActive : styles.categoryChip}
                        >
                            #{category}
                        </button>
                    ))}
                </div>
                <div className={styles.functionButtons}>
                    <button className={styles.iconButton}><CameraIcon /></button>
                    <button className={styles.iconButton}><TagIcon /></button>
                </div>
            </footer>
        </div>
    );
}