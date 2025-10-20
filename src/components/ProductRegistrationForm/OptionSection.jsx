// components/ProductDetailRegistrationForm/OptionSection.jsx
import React, { useState } from 'react';
import styles from '@/pages/ProductDetailRegistrationPage.module.css';

const TrashIcon = () => (
  <svg width='20' height='20' viewBox='0 0 24 24'>
    <path
      d='M4 7H20M10 11V17M14 11V17M5 7L6 19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19L19 7M9 7V4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V7'
      stroke='#6a7685'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const PlusIcon = () => (
  <svg width='16' height='16' viewBox='0 0 24 24'>
    <path d='M12 5V19M5 12H19' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

export const OptionSection = ({ control, Controller, optionFields, handleAddOption, handleRemoveOption, errors }) => {
  return (
    <div className={styles.optionSection}>
      <div className={styles.sectionTitle}>옵션 및 가격</div>

      {optionFields.map((field, index) => (
        <div key={field.id} className={styles.optionGroup}>
          <div className={styles.optionHeader}>
            <div>옵션 {index + 1}</div>
            {optionFields.length > 1 && (
              <button type='button' onClick={() => handleRemoveOption(index)}>
                <TrashIcon />
              </button>
            )}
          </div>

          <Controller
            name={`options.${index}.name`}
            control={control}
            rules={{ required: '옵션명을 입력해주세요.' }}
            render={({ field: { onChange, value, ...fieldProps } }) => (
              <input
                {...fieldProps}
                type='text'
                value={value || ''}
                onChange={onChange}
                onInput={onChange} // onInput 이벤트 추가
                className={`${styles.optionInput} ${errors.options?.[index]?.name ? styles.error : ''}`}
                placeholder='옵션명 (예: 무게)'
              />
            )}
          />

          <Controller
            name={`options.${index}.value`}
            control={control}
            rules={{ required: '옵션값을 입력해주세요.' }}
            render={({ field }) => (
              <input
                {...field}
                className={`${styles.optionInput} ${errors.options?.[index]?.value ? styles.error : ''}`}
                type='text'
                placeholder='옵션값 (예: 1kg)'
              />
            )}
          />

          <Controller
            name={`options.${index}.price`}
            control={control}
            rules={{
              required: '옵션 가격을 입력해주세요.',
              min: {
                value: 0,
                message: '가격은 0 이상이어야 합니다.',
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                className={`${styles.optionInput} ${errors.options?.[index]?.price ? styles.error : ''}`}
                type='number'
                placeholder='옵션 가격 (원)'
              />
            )}
          />

          {errors.options?.[index] && (
            <div className={styles.errorContainer}>
              {errors.options[index].name && (
                <span className={styles.errorMessage}>{errors.options[index].name.message}</span>
              )}
              {errors.options[index].value && (
                <span className={styles.errorMessage}>{errors.options[index].value.message}</span>
              )}
              {errors.options[index].price && (
                <span className={styles.errorMessage}>{errors.options[index].price.message}</span>
              )}
            </div>
          )}
        </div>
      ))}

      <button type='button' onClick={handleAddOption} className={styles.addButton}>
        <PlusIcon /> 옵션 추가
      </button>
    </div>
  );
};
