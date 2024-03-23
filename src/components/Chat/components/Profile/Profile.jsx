import { useState } from 'react';
import { BsArrowLeft, BsCheck2, BsPencil } from 'react-icons/bs';
export const Profile = ({ handleCloseOpenProfile }) => {
    const [flag, setFlag] = useState(false);
    const [username, setUsername] = useState(null);

    const handleFlag = () => {
        setFlag(true);
    }

    return (
        <div className="w-full h-full">
            <div className='flex items-center space-x-10 bg-[#161e46] text-white pt-16 px-10 pb-5'>
                <BsArrowLeft className='cursor-pointer text-2xl font-bold' onClick={handleCloseOpenProfile} />
                <p className='cursor-pointer font-semibold'> Profile</p>
            </div>
            {/* SECCION DE ACTUALIZAR PERFIL */}
            <div className='flex flex col justify-center items-center my-12'>
                <label htmlFor="imgInput">
                    <img src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg" alt="" />
                </label>
                <input type="file" id='imgInput' className='hidden' />
            </div>
            {/* NOMBRE */}
            <div className='bg-white px-3'>
                <p className='py-3'>Mi nombre</p>
                {!flag && <div className='w-fill flex justify-between items-center'>
                    <p className='py-3'>{username || 'username'}</p>
                    <BsPencil onClick={handleFlag} className='cursor-pointer' />
                </div>}

                {
                    flag && <div className='w-full flex justify-between items-center py-2'>
                        <input 
                        className='w-[80%] outline-none border-b-2 border-blue-700 p-2'
                        type="text" 
                        placeholder='Escriba tu nombre, este nombre sera visible en tu chat.'
                        />
                    </div>
                }
            </div>
            <div className='px-3 my-5'>
                <p className='py-10'>Lorem ipsum dolor sit.</p>
            </div>
        </div>


    )
}

