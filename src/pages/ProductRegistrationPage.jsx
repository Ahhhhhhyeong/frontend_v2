// ProductRegistrationPage.jsx
import React from 'react';
import styles from './ProductRegistrationPage.module.css';
import { useProductRegistrationForm } from '@/hooks/useProductRegister';
import { FormHeader } from '@/components/ProductRegistrationForm/FormHeader';
import { CategorySelect } from '@/components/ProductRegistrationForm/CategorySelect';
import { ImageUpload } from '@/components/ProductRegistrationForm/ImageUpload';
import { ProductNameInput } from '@/components/ProductRegistrationForm/ProductNameInput';

export default function ProductRegistrationPage() {
  const {
    control,
    handleSubmit,
    watch,
    errors,
    isValid,
    categories,
    onSubmit,
    handleImageChange,
    validationRules,
    Controller,
    utils,
  } = useProductRegistrationForm();

  return (
    <div className={styles.wrapper}>
      <FormHeader isValid={isValid} handleSubmit={handleSubmit} onSubmit={onSubmit} />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
        <div className={styles.sectionTitle}>기본 정보 등록</div>
        <div className={styles.formGroup}>
          <CategorySelect
            control={control}
            Controller={Controller}
            categories={categories}
            validationRules={validationRules}
            errors={errors}
          />

          <ImageUpload
            control={control}
            Controller={Controller}
            validationRules={validationRules}
            errors={errors}
            handleImageChange={handleImageChange}
          />

          <ProductNameInput
            control={control}
            Controller={Controller}
            validationRules={validationRules}
            errors={errors}
            watch={watch}
          />
        </div>
      </form>
    </div>
  );
}
