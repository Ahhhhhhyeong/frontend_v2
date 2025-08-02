import React from 'react';
import styles from './ChatBottomSheet.module.css';

// --- 아이콘 ---
const CloseIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );
const SendIcon = () => ( <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> );

// ChatBottomSheet 컴포넌트
//  - isVisible: 부모 컴포넌트에서 이 시트의 표시 여부를 제어하는 상태
//  - onClose: 닫기 버튼을 눌렀을 때 실행될 함수
export default function ChatBottomSheet({ isVisible, onClose }) {
    // isVisible이 false이면 아무것도 렌더링하지 않음
    if (!isVisible) return null;

    return (
        // 전체 화면을 덮는 반투명 배경
        <div className={styles.overlay} onClick={onClose}>
            {/* 실제 컨텐츠 영역 (클릭해도 닫히지 않음) */}
            <div className={styles.sheetContainer} onClick={(e) => e.stopPropagation()}>
                {/* --- 헤더 --- */}
                <header className={styles.header}>
                    <div className={styles.profile}>
                        <img src="https://placehold.co/40x40" alt="프로필" className={styles.profileImage} />
                        <div>
                            <div className={styles.name}>새벽들딸기농원</div>
                            <div className={styles.status}>온라인</div>
                        </div>
                    </div>
                    <button onClick={onClose} className={styles.closeButton}><CloseIcon /></button>
                </header>

                {/* --- 채팅 내용 --- */}
                <main className={styles.chatArea}>
                    {/* 상대방 메시지 */}
                    <div className={`${styles.messageBubble} ${styles.receiver}`}>
                        안녕하세요! 새벽들딸기농원입니다. 무엇을 도와드릴까요?
                    </div>
                    {/* 내 메시지 */}
                    <div className={`${styles.messageBubble} ${styles.sender}`}>
                        네, 안녕하세요. 혹시 딸기 체험도 가능한가요?
                    </div>
                </main>

                {/* --- 입력 창 --- */}
                <footer className={styles.inputArea}>
                    <input type="text" placeholder="메시지 입력" className={styles.textInput} />
                    <button className={styles.sendButton}><SendIcon /></button>
                </footer>
            </div>
        </div>
    );
}