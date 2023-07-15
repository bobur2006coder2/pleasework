import React from 'react'
import { oneImgNav, threeImgNav, twoImgNav } from '../../assets'


export default function Header() {
    return (
        <header className=' pb-18 '>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex items-center pt-14 pb-18">
                    <h4 className="">Главная{" > "} <span className='text-[#3257A4]'>Новости</span></h4>
                </div>
                    <h1 className="text-[#3257A4] font-normal text-3xl text-center">Контакты</h1>
                <div className="w-950px ml-28 mt-10">

                    <div className="flex gap-10">
                        <input type="text" placeholder='Адрес: 426011 г. Ижевск, ул. Пушкинская, 290' className='w-500px h-60px p-5 rounded-lg outline-none text-black ' />
                        <input type="email" placeholder='E-mail: 5078096@mail.ru' className='w-200px h-60px rounded-lg p-5 outline-none text-black' />
                        
                    </div>
                    <div className="flex justify-between mt-10">
                    <input type="email" placeholder='+7 982 993 90 05' className='w-180px h-60px rounded-lg p-5 outline-none text-black' />
                    <input type="text" placeholder='Время работы: пн- пт с 10:00 - 19:00' defaultValue={"Время работы: пн- пт с 10:00 - 19:00"} className='w-500px h-60px p-5 rounded-lg outline-none text-white bg-blue-500' />
                    <button  className='w-250px h-60px rounded-lg p-2 gap-3 outline-none text-black bg-white flex items-center'> Социальные сети <img src={oneImgNav} alt="" /> <img src={twoImgNav} alt="" /> <img src={threeImgNav} alt="" /></button>

                    </div>
                </div>
            </div>
        </header>
    )
}
