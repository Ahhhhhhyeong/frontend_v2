import React from 'react';

export default function PostContent({ post }) {
  return (
    <div className='w-full px-4 mb-3'>
      <p className='text-gray-800 text-sm leading-relaxed whitespace-pre-wrap'>{post.content}</p>
    </div>
  );
}
