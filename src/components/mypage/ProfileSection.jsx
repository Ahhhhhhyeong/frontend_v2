import React from 'react';
import { Link } from 'react-router-dom';
import DefaultImage from '@/assets/images/UserProfile.jpg';
import clsx from 'clsx';

export default function ProfileSection({ type = 'customer' }) {
  const isSeller = type === 'seller';

  return (
    <div className={clsx('w-full flex items-center justify-between', isSeller ? 'pt-4 px-5 pb-6' : 'h-[48px] p-4')}>
      {/* 프로필 왼쪽 영역 */}
      <div className={clsx('flex items-center', isSeller ? 'space-x-3' : 'space-x-4')}>
        <img className={clsx('rounded-full bg-gray-300 w-[48px] h-[48px]')} alt='프로필 이미지' src={DefaultImage} />

        <div className={clsx(isSeller && 'flex-grow')}>
          {isSeller ? (
            <>
              <div className='flex items-baseline gap-1'>
                <span className='text-lg font-semibold text-gray-800'>새벽들딸기농원</span>
                <span className='text-sm font-semibold text-gray-600'>농부님</span>
              </div>
            </>
          ) : (
            <>
              <div className='text-lg font-semibold text-gray-900'>김준식</div>
            </>
          )}
          <div className='text-sm text-gray-900'>jun0909</div>
        </div>
      </div>

      {/* 전환 버튼 */}
      <Link
        to={isSeller ? '/mypage' : '/seller-mypage'}
        className={clsx(
          'px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap flex-shrink-0',
          isSeller ? 'bg-green-100 text-green-500 ' : 'bg-green-500 text-white'
        )}>
        {isSeller ? '고객으로 전환' : '농부로 전환'}
      </Link>
    </div>
  );
}
