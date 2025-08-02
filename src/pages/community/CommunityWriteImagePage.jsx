import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCommunityWriteStore from '../../store/communityWriteStore';
import styles from './CommunityWriteImagePage.module.css';

// --- 아이콘 ---
const ChevronLeftIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15 18L9 12L15 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const CameraIcon = () => ( <svg width="32" height="32" viewBox="0 0 24 24"><path d="M4 8.25V6.75C4 5.64543 4.89543 4.75 6 4.75H8.5L10.5 2.75H13.5L15.5 4.75H18C19.1046 4.75 20 5.64543 20 6.75V8.25M4 8.25V17.25C4 18.3546 4.89543 19.25 6 19.25H18C19.1046 19.25 20 18.3546 20 17.25V8.25M4 8.25H20M12 16.25C13.6569 16.25 15 14.9069 15 13.25C15 11.5931 13.6569 10.25 12 10.25C10.3431 10.25 9 11.5931 9 13.25C9 14.9069 10.3431 16.25 12 16.25Z" stroke="#6a7685" strokeWidth="1.5"/></svg> );
const CloseIcon = () => ( <svg width="16" height="16" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export default function CommunityWriteImagePage() {
    const navigate = useNavigate();
    // Zustand 스토어에서 이미지 관련 상태와 함수를 가져옵니다.
    const { images, addImages, removeImage } = useCommunityWriteStore();

    return (
        <div className={styles.wrapper}>
            {/* --- 헤더 --- */}
            <header className={styles.header}>
                <button onClick={() => navigate(-1)} className={styles.iconButton}><ChevronLeftIcon /></button>
                <h1 className={styles.headerTitle}>이미지 추가</h1>
                <button onClick={() => navigate('/community/write-tag')} className={styles.nextButton}>다음</button>
            </header>

            {/* --- 이미지 미리보기 및 업로드 --- */}
            <main className={styles.content}>
                <p className={styles.infoText}>사진은 최대 5장까지 추가할 수 있어요.</p>
                <div className={styles.imageGrid}>
                    {/* 업로드된 이미지들을 표시합니다. */}
                    {images.map((image, index) => (
                        <div key={index} className={styles.imagePreviewContainer}>
                            <img src={image} alt={`업로드 이미지 ${index + 1}`} className={styles.imagePreview} />
                            <button onClick={() => removeImage(index)} className={styles.deleteButton}><CloseIcon /></button>
                        </div>
                    ))}

                    {/* 이미지가 5장 미만일 때만 업로드 버튼을 보여줍니다. */}
                    {images.length < 5 && (
                        <label htmlFor="image-upload" className={styles.uploadBox}>
                            <CameraIcon />
                            <span>사진 올리기</span>
                            <span>{images.length}/5</span>
                        </label>
                    )}
                    <input 
                        id="image-upload" 
                        type="file" 
                        multiple 
                        accept="image/*" 
                        style={{ display: 'none' }}
                        onChange={(e) => addImages(e.target.files)}
                    />
                </div>
            </main>
        </div>
    );
}