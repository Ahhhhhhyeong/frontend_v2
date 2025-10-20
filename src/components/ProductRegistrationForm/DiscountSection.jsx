// components/ProductDetailRegistrationForm/DiscountSection.jsx
import React from 'react';
import styles from '@/pages/ProductDetailRegistrationPage.module.css';

export const DiscountSection = ({ control, Controller, errors, validationRules }) => {
  return (
    <div className={styles.optionSection}>
      <div className={styles.sectionTitle}>할인 설정</div>
      <div className={styles.optionGroup}>
        <label className={styles.label}>기본 할인율 (%)</label>
        <Controller
          name='discount'
          control={control}
          rules={validationRules.discount}
          render={({ field }) => (
            <input
              {...field}
              className={`${styles.optionInput} ${errors.discount ? styles.error : ''}`}
              type='number'
              placeholder='할인율을 숫자로 입력 (예: 20)'
              min='0'
              max='100'
            />
          )}
        />
        {errors.discount && <span className={styles.errorMessage}>{errors.discount.message}</span>}
      </div>
    </div>
  );
};
