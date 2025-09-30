export default function PostHeader({ user }) {
  return (
    <div className='flex items-center justify-between px-4 pb-3'>
      <div className='flex items-center gap-3'>
        <img src={post.user.avatar} alt={post.user.name} className='w-8 h-8 rounded-full object-cover' />
        <span className='font-medium text-base text-gray-800'>{post.user.name}</span>
      </div>
      <button
        className={`px-4 py-1 text-sm font-semibold ${post.user.isFollowing ? 'text-gray-500' : 'text-green-500'}`}>
        {post.user.isFollowing ? '팔로잉' : '팔로우'}
      </button>
    </div>
  );
}
