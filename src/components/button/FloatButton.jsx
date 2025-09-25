import React from 'react';
import { Link } from 'react-router-dom';
import { EditIcon } from '@/components/Icons.jsx';

export default function FloatButton({ href }) {
  return (
    <Link to={href} className='fixed bottom-16 right-4 z-20'>
      <button className='bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition'>
        <EditIcon />
      </button>
    </Link>
  );
}
