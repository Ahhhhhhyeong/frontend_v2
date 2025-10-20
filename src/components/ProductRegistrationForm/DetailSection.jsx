// components/ProductDetailRegistrationForm/DetailSection.jsx
import React from 'react';
import styles from '@/pages/ProductDetailRegistrationPage.module.css';

const CameraIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24'>
    <path
      d='M4 8.25V6.75C4 5.64543 4.89543 4.75 6 4.75H8.5L10.5 2.75H13.5L15.5 4.75H18C19.1046 4.75 20 5.64543 20 6.75V8.25M4 8.25V17.25C4 18.3546 4.89543 19.25 6 19.25H18C19.1046 19.25 20 18.3546 20 17.25V8.25M4 8.25H20M12 16.25C13.6569 16.25 15 14.9069 15 13.25C15 11.5931 13.6569 10.25 12 10.25C10.3431 10.25 9 11.5931 9 13.25C9 14.9069 10.3431 16.25 12 16.25Z'
      stroke='#6a7685'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const DetailSection = ({
  index,
  title: sectionTitle,
  detail,
  handleDetailImageChange,
  handleUseExample,
  handleDetailFieldChange,
}) => {
  return (
    <div className={styles.detailSection}>
      <label className={styles.sectionLabel}>
        {sectionTitle} <span className={styles.required}>*</span>
      </label>

      <label htmlFor={`detail-image-${index}`} className={styles.imgUpload}>
        {detail?.image ? <img src={detail.image} alt='상세 이미지' className={styles.imagePreview} /> : <CameraIcon />}
      </label>

      <input
        id={`detail-image-${index}`}
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={(e) => handleDetailImageChange(index, e.target.files[0])}
      />

      <div className={styles.inputGroup}>
        <div className={styles.inputHeader}>
          <label className={styles.label}>제목</label>
          <button type='button' onClick={() => handleUseExample(index, 'title')} className={styles.exampleButton}>
            예시 사용
          </button>
        </div>
        <input
          type='text'
          className={styles.textInput}
          value={detail?.title || ''}
          onChange={(e) => handleDetailFieldChange(index, 'title', e.target.value)}
          placeholder={detail?.placeholder?.title || ''}
          maxLength='30'
        />
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputHeader}>
          <label className={styles.label}>내용</label>
          <button type='button' onClick={() => handleUseExample(index, 'content')} className={styles.exampleButton}>
            예시 사용
          </button>
        </div>
        <textarea
          className={styles.textarea}
          value={detail?.content || ''}
          onChange={(e) => handleDetailFieldChange(index, 'content', e.target.value)}
          placeholder={detail?.placeholder?.content || ''}
          maxLength='80'
        />
      </div>
    </div>
  );
};
