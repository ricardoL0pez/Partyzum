import { useState } from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { TbCircleDashed } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsEmojiSmile, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import './HomePage.css';
import { Profile } from '../Profile/Profile';

export const HomePage = () => {
  const [isProfile, setIsProfile] = useState(false);

  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  }

  return (
    <div className="relative">
      <div className="w-full py-14 bg-[#444892]"></div>
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]">
        <div className="left w-[30%] bg-[#e8e8ec] h-full">
          {/* perfil */}
          {isProfile && <div className='w-full h-full'> <Profile handleCloseOpenProfile={handleCloseOpenProfile} />
</div>}
          {!isProfile && <div className='w-full'></div>}
          <div className="flex justify-between items-center p-3">
            <div className="flex items-center space-x-3">
              <img
                className="rounded-full w-10 h-10 cursor-pointer"
                src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg"
                alt=""
              />
              <p>Luana</p>
            </div>
            <div className="space-x-3 text-2xl flex">
              <TbCircleDashed />
              <BiCommentDetail />
            </div>
          </div>

          <div className='relative flex justify-center items-center bg-white py-4 px-3'>
            <input
              className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9'
              type="text"
              placeholder="Busqueda"
            />
            <AiOutlineSearch />
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      {/* seccion de mensaje */}
      <div className='px-10 h-[85vh] overflow-y-scroll'>
        <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>

        </div>
      </div>
      {/* footer */}
      <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>
        <div className='flex justify-between items-center px-5 relative'>
          <BsEmojiSmile className='cursor-pointer' />
          <ImAttachment />
          <input
            className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'
            type="text"
            placeholder='Type message'
          />
          <BsMicFill />
        </div>
      </div>
    </div>
  )
}