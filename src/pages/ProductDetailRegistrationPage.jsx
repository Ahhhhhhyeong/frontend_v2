// ProductDetailRegistrationPage.jsx
import React from 'react';
import styles from './ProductDetailRegistrationPage.module.css';
import { useProductRegistrationForm } from '@/hooks/useProductRegister';
import { FormHeader } from '@/components/ProductRegistrationForm/FormHeader';
import { DetailSection } from '@/components/ProductRegistrationForm/DetailSection';
import { OptionSection } from '@/components/ProductRegistrationForm/OptionSection';
import { DiscountSection } from '@/components/ProductRegistrationForm/DiscountSection';

export default function ProductDetailRegistrationPage() {
  const {
    control,
    handleSubmit,
    errors,
    isValid,
    Controller,
    optionFields,
    details,
    onSubmit,
    handleAddOption,
    handleRemoveOption,
    handleDetailImageChange,
    handleUseExample,
    handleDetailFieldChange,
    validationRules,
    isLoading,
    utils,
  } = useProductRegistrationForm();

  const detailSections = [
    { title: '재배 환경 소개', index: 0 },
    { title: '재배 방식/철학', index: 1 },
    { title: '선별 및 관리 방식', index: 2 },
    { title: '포장 및 배송 안내', index: 3 },
  ];

  return (
    <div className={styles.wrapper}>
      <FormHeader pageNo={2} />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
        <div className={styles.sectionTitle}>상세 정보 등록</div>

        {/* 상세 정보 섹션들 */}
        {detailSections.map(({ title, index }) => (
          <DetailSection
            key={index}
            index={index}
            title={title}
            detail={details[index]}
            handleDetailImageChange={handleDetailImageChange}
            handleUseExample={handleUseExample}
            handleDetailFieldChange={handleDetailFieldChange}
          />
        ))}

        {/* 옵션 및 가격 섹션 */}
        <OptionSection
          control={control}
          Controller={Controller}
          optionFields={optionFields}
          handleAddOption={handleAddOption}
          handleRemoveOption={handleRemoveOption}
          errors={errors}
        />

        {/* 할인 설정 섹션 */}
        <DiscountSection control={control} Controller={Controller} errors={errors} validationRules={validationRules} />
      </form>

      <div className={styles.bottomBar}>
        <button
          type='submit'
          onClick={handleSubmit(onSubmit)}
          className={styles.registerButton}
          disabled={isLoading || !isValid}>
          {isLoading ? '등록 중...' : '등록하기'}
        </button>
      </div>
    </div>
  );
}
