import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import useCommunityWriteStore from '@/store/communityWriteStore';
import { useEffect } from 'react';
import { use } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postApi } from '../services/postApi';
import toast from 'react-hot-toast';
import { createFormData } from '../utils/formData';
import { communityWriteMapper } from '../utils/communityWriteDataMapper';

/**
 * react-hook-form + zustand 연동을 위한 커스텀 훅
 */
export default function useCommunityWriteForm() {
  // zustand store 에서 이전에 입력했던 값(초기값)을 가져옵니다.
  // selector 에서 object 가 아니라 primitive 와 함수만 꺼내면 무한루프가 없습니다.
  const { title, content, images, setTitle, setContent, taggedProducts, reset } = useCommunityWriteStore();
  const { savePostMutation } = useCreateCommunityPost(1);
  const initTitle = useCommunityWriteStore((state) => state.title);
  const initContent = useCommunityWriteStore((state) => state.content);
  const setData = useCommunityWriteStore((state) => state.setData);
  const navigate = useNavigate();

  // react-hook-form 세팅 (onChange 모드로 유효성 검사가 바로바로 일어나게)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: title,
      content: content,
    },
  });

  // ✅ watch로 입력 상태가 바뀔 때마다 zustand에 반영
  const watchedTitle = watch('title');
  const watchedContent = watch('content');

  useEffect(() => {
    setTitle(watchedTitle);
  }, [watchedTitle, setTitle]);

  useEffect(() => {
    setContent(watchedContent);
  }, [watchedContent, setContent]);

  // form submit 시 호출될 함수
  const onSubmit = async (data) => {
    // zustand 에 데이터 저장
    // TODO: 실제 API 연동 시 이부분에서 API 호출 + toast 추가
    const params = {
      ...data,
      itemIds: taggedProducts,
      images: images,
    };
    console.log('파라미터: ', params);
    const mapper = communityWriteMapper(params);
    console.log('Mapper: ', mapper);
    const saveItem = savePostMutation.mutateAsync(mapper);

    await toast.promise(saveItem, {
      loading: '저장하는 중...',
      success: (resp) => {
        reset();
        navigate('/community', { replace: true });
        return resp?.message || '글이 성공적으로 저장되었습니다.';
      },
      error: (error) => {
        console.error('저장 실패: ', error);
        return '저장에 실패했습니다.';
      },
    });
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isValid,
    watch,
  };
}

const useCreateCommunityPost = (producerId) => {
  const queryClient = useQueryClient();
  const savePostMutation = useMutation({
    mutationFn: (item) => postApi.createPost(producerId, item),
    onSuccess: (resp) => {
      console.log('커뮤니티 글 작성 완료: ', resp);
      queryClient.setQueryData(['community'], (oldData) => {
        if (oldData) {
          return [...oldData, item];
        }
        return [item];
      });
    },
    onError: (error) => {
      console.error('커뮤니티 글 작성 에러: ', error);
    },
  });

  return {
    savePostMutation,
  };
};
