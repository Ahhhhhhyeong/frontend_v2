// 2. 메인 배너
function MainBanner({ mainBannerImg, userAvatarImg }) {
  return (
    // 👇 배너 높이를 h-48 (192px) -> h-96 (384px)으로 수정하여 이미지가 잘리지 않게 함
    <section className='relative text-white rounded-lg overflow-hidden h-96'>
      <img src={mainBannerImg} alt='메인 배너' className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black bg-opacity-40 p-5 flex flex-col justify-end'>
        <h2 className='text-xl font-bold'>
          농부 이야기, 체험 후기 등<br />
          다양한 소식을 만나보세요
        </h2>
        <div className='flex items-center mt-3'>
          <img
            src={userAvatarImg}
            alt='사용자 아바타'
            className='w-8 h-8 rounded-full border-2 border-white object-cover'
          />
          <span className='ml-2 font-semibold'>닉네임</span>
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
