// src/components/Card.jsx
import styles from './Card.module.css';
import strawberryImg from '../assets/images/strawberry.png'; // assets 폴더에서 이미지 가져오기

function Card() {
  return (
    <div className={styles.card}>
      <img src={strawberryImg} alt="유기농 딸기" className={styles.cardImage} />
      {/* ...생략... */}
    </div>
  );
}
export default Card;