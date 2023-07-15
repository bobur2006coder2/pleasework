import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSliders,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import logo from "../../assets/logos/logo.png"
import { icon1, icon2, icon3, oneImgNav, threeImgNav, twoImgNav } from '../../assets'
import { navImgs } from '../../Utils/Utils'
const element = <FontAwesomeIcon icon={faSliders} />
const phone=<FontAwesomeIcon icon={faPhoneVolume} style={{fontSize:"11px"}} />
export default function Navbar() {
    return (
        <>
        <nav className='bg-white shadow-sm shadow-slate-400'>
        <div className='max-w-screen-xl mx-auto '>
            <div className="mx-auto flex items-center justify-between pt-10 pb-10">
         <div className="w-150px"><img src={logo} alt="" className="" /></div>
         <div className="flex items-center justify-around  w-[79%]">
         <h2 className='flex items-center gap-1'>  <i>{element}</i> КАТАЛОГ</h2>
        <input type="search" className='w-300px h-36px p-2 outline-none border border-solid rounded-lg text-black' placeholder="Поиск медицинского оборудования"/>
        <a href="tel:+8 (3412) 65-08-77" className='text-blue-400 decoration-slice underline'> {phone}   Заказать обратный звонок</a>
        <div className="flex items-center gap-5">
            <span>8 (3412) 65-08-77</span>

<img src={oneImgNav} alt="" className='w-[25px] cursor-pointer'/>
<img src={twoImgNav} alt="" className='w-[25px] cursor-pointer'/>
<img src={threeImgNav} alt="" className='w-[25px] cursor-pointer'/>

            </div>

         </div>
        </div>
        <div className="flex items-center justify-between">

<div className="w-[56%]">
         <ul className="flex items-center justify-between ">
            {navImgs.map(({name_text,id})=>{
               return(
                <li key={id}>{name_text}</li>
               )
            })}
         </ul>
</div>
<div className="w-[40%] flex gap-10 justify-end">
    <div className="text-center ">
<center>

    <img src={icon1} alt="" />
</center>
    <h3>Сравнения</h3>
    </div>
    <div className="text-center ">
<center>

    <img src={icon2} alt="" />
</center>
    <h3>Сравнения</h3>
    </div>
    <div className="text-center ">
<center>

    <img src={icon3} alt="" />
</center>
    <h3>Сравнения</h3>
    </div>
</div>
        </div>

            </div>
        </nav>

        </>
    )
}
