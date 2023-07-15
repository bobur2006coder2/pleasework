import React from 'react'
import { oneImgNav, threeImgNav, twoImgNav } from '../../assets'
import logo from "../../assets/logos/logo.png"
import { footerLi, footerLitwo } from '../../Utils/Utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume,faArrowUp } from '@fortawesome/free-solid-svg-icons'
const phone = <FontAwesomeIcon icon={faPhoneVolume} />
const upsight = <FontAwesomeIcon icon={faArrowUp} />

export default function Footer() {
    return (
        <footer className='bg-[#232323]'>
            <div className="max-w-screen-xl mx-auto pt-10">
                <div className="flex">
                    <div className="w-[150px]">
                        <img src={logo} alt="" />
                        <div className="flex mt-5 gap-1">
                            <img src={oneImgNav} alt="" />
                            <img src={twoImgNav} alt="" />
                            <img src={threeImgNav} alt="" />
                        </div>

                    </div>
                    <div className="w-[80%] mx-auto flex mb-10 ml-32 justify-between">
                        <ul className="text-white">
                            {footerLi.map(({ text, id }) => {
                                return (
                                    <li key={id}>{text}</li>
                                )
                            })}
                        </ul>
                        <ul className="text-white">
                            {footerLitwo.map(({ text, id }) => {
                                return (
                                    <li key={id}>{text}</li>
                                )
                            })}
                        </ul>
                        <ul className="text-white w-300px">
                            <li>Политика конфиденциальности</li>
                            <li>ООО «Boksmed» © 2015 - 2022.
                                Сайт носит информационный характер и не является публичной офертой.</li>
                        </ul>
                        <ul className="text-white w-300px">
                            <li><img src={phone} alt="" /> Заказать обратный звонок</li>
                            <li>Россия, Удмуртская Республика
                                426011, г. Ижевск, ул. Пушкинская 290
                                тел. 8 (3412) 65-08-77</li>
                        </ul>
                    </div>
                </div>


            </div>
        </footer>
    )
}
