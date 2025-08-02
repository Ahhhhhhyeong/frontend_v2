/**
 * CommunityWriteConfirmPage.jsx
 * 커뮤니티 글쓰기 4~6단계에 해당하는 최종 확인 페이지입니다.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCommunityWriteStore from '../../store/communityWriteStore';
import styles from './CommunityWriteConfirmPage.module.css';

const CheckCircleIcon = () => ( <svg width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#15C47E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

export default function CommunityWriteConfirmPage() {
    const navigate = useNavigate();
    // 글쓰기 스토어의 상태를 초기화하는 reset 함수와 게시글 데이터를 가져옵니다.
    const { reset, ...postData } = useCommunityWriteStore();

    const handleConfirm = () => {
        // [중요] 실제 앱에서는 여기서 서버로 `postData`를 전송합니다.
        console.log("서버로 전송할 최종 데이터:", postData);
        
        reset(); // 데이터 전송 후 스토어 초기화
        navigate('/community'); // 커뮤니티 페이지로 이동
    };

    return (
        <div className={styles.wrapper}>
            <CheckCircleIcon />
            <h1 className={styles.title}>게시글 등록 완료!</h1>
            <p className={styles.message}>작성한 글은 커뮤니티에서 확인할 수 있어요.</p>
            <button onClick={handleConfirm} className={styles.button}>확인</button>
        </div>
    );
}