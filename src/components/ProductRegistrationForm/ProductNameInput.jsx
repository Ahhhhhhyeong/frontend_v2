// components/ProductRegistrationForm/ProductNameInput.jsx
import React from 'react';
import styles from '@/pages/ProductRegistrationPage.module.css';

export const ProductNameInput = ({ control, Controller, validationRules, errors, watch }) => (
  <div className={styles.inputGroup}>
    <label className={styles.label}>
      상품명 <span className={styles.required}>*</span>
    </label>
    <Controller
      name='productName'
      control={control}
      rules={validationRules.productName}
      render={({ field }) => (
        <input
          {...field}
          className={`${styles.textInput} ${errors.productName ? styles.error : ''}`}
          type='text'
          placeholder='상품명을 입력해주세요'
          maxLength='30'
        />
      )}
    />
    <div className={styles.charCount}>{watch('productName')?.length || 0}/30자</div>
    {errors.productName && <span className={styles.errorMessage}>{errors.productName.message}</span>}
  </div>
);
