import { useState } from 'react';
import { Profile } from '../Profile/Profile';
import { ChatCard } from '../ChatCard/ChatCard';
import { MessageCard } from '../MessageCard/MessageCard';
import { useNavigate } from 'react-router-dom';
import { BiCommentDetail } from 'react-icons/bi';
import { TbCircleDashed } from 'react-icons/tb';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsEmojiSmile, BsFilter, BsMicFill, BsThreeDotsVertical } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import './HomePage.css';

export const HomePage = () => {
  const [querys, setQuerys] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [content, setContent] = useState("");
  const [isProfile, setIsProfile] = useState(false);
  const navigate = useNavigate();

  const handleClickOnChatCard = () => {
    setCurrentChat(true);
  }

  const handleSearch = () => {

  }

  const handleCloseOpenProfile = () => {
    setIsProfile(false);
  }

  const handleNavigate = () => {
    setIsProfile(true);
  }

  return (
    <div className="relative">
      <div className="w-full py-14 bg-[#2c3a8b]"></div>
      <div className="flex bg-[#f0f2f5] h-[90vh] absolute left-[2vw] top-[5vh] w-[96vw]">
        <div className="left w-[30%] bg-[#e8e8ec] h-full">
          {/* PERFIL   */}
          {isProfile && <div className='w-full h-full'> <Profile
            handleCloseOpenProfile={handleCloseOpenProfile} /></div>}

          {!isProfile && <div className='w-full'>

            {/* HOME */}
            {<div className="flex justify-between items-center p-3">
              <div onClick={handleNavigate} className="flex items-center space-x-3">
                <img
                  className="rounded-full w-10 h-10 cursor-pointer"
                  src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg"
                  alt=""
                />
                <p>Luana</p>
              </div>
              <div className="space-x-3 text-2xl flex">
                <TbCircleDashed className='cursor-pointer' onClick={()=> navigate('/status')}/>
                <BiCommentDetail /> 
              </div>
            </div>}

            <div className='relative flex justify-center items-center bg-white py-4 px-3'>
              <input
                className='border-none outline-none bg-slate-200 rounded-md w-[93%] pl-9 py-2'
                type="text"
                placeholder="Buscar un chat"
                onChange={(e) => {
                  setQuerys(e.target.value)
                  handleSearch(e.target.value)
                }}
              />
              <AiOutlineSearch className='left-5 top-7 absolute' />
              <div>
                <BsFilter className='ml-4 text-3xl' />
              </div>
            </div>
            {/* TODOS LOS USUARIOS   */}
            <div className='bg-white overflow-y-scroll h-[72vh] px-3'>
              {querys &&
                [1, 1, 1, 1, 1].map((item) => (
                  <div onClick={handleClickOnChatCard}>
                    {" "}
                    <hr /> <ChatCard /> {" "}
                  </div>
                ))}
            </div>
          </div>}
        </div>
        {/* AREA DE CHAT  */}
        {!currentChat && <div className='w-[70%] flex flex-col items-center justify-center h-full'>
          <div className='max-w-[70%] text-center'>
            <img src="https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg" alt="" />
            <h1 className='text-4x1 text-gray-600'>Hola</h1>
            <p className='my-9'>ASas asas asaasasa</p>
          </div>
        </div>}
        {/* PARTE DE MENSAJES */}
        {currentChat && (
          <div className='w-[70%] relative bg-blue-200'>
            <div className='header absolute top 0 w full bg-[#f0f2f5]'>
              <div className='flex justify-between'>
                <div className='py-3 space-x-4 flex items-center px-3'>
                    <img className='w-10 h-10 rounded-full' src="https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg" alt="" />
                    <p>
                      username
                    </p>
                  </div>
                  <div className='py-3 flex space-x-4 items-center px-3'>
                    <AiOutlineSearch />
                    <BsThreeDotsVertical />
                  </div>
                </div>
              </div>
              {/* SECCION DE MENSAJES */}
              <div className='px-10 h-[85vh] overflow-y-scroll'>
                <div className='space-y-1 flex flex-col justify-center mt-20 py-2'>
                  {[1, 1, 1, 1, 1,].map((item, i) => <MessageCard isReqUserMessage={i % 2 === 0} content={"message"} />)}
                </div>
              </div>
              {/* AREA DEL FOOTER */}
              <div className='footer bg-[#f0f2f5] absolute bottom-0 w-full py-3 text-2xl'>
                <div className='flex justify-between items-center px-5 relative'>
                  <BsEmojiSmile className='cursor-pointer' />
                  <ImAttachment />
                  <input
                    className='py-2 outline-none border-none bg-white pl-4 rounded-md w-[85%]'
                    type="text"
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Escribe un mensaje'
                    value={content}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleCreateNewMessage();
                        setContent("");
                      }
                    }}
                  />
                  <BsMicFill />
                </div>
              </div>
            </div>
        )}


      </div>
    </div>
  )
}












