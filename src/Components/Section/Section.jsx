import React from 'react'

export default function Section() {
  return (
    <section className='my-18'>
        <div className="w-[800px] mx-auto border border-blue-500 rounded-lg ">
        <div className="w-[800px] mx-auto border-2 border-blue-500 rounded-lg p-10">
        <h1 className="text-blue-400 font-bold text-xl">Задать вопрос</h1>
        </div>
        <div className="flex m-5">
            <div className="w-[50%] flex flex-wrap gap-5 ml-5">
                <input type="text" placeholder='Как вас зовут?' className='w-[100%] h-10 p-2 mt-5 rounded-md outline-none'/>
                <input type="email" placeholder='E-mail' className='w-[100%] h-10 p-2 rounded-md outline-none'/>
                <input type="number" placeholder='+ 7 (___)-___-__-__' className='w-[100%] h-10 outline-none p-2 rounded-md'/>
                <button className='bg-blue-600 w-180px h-38px rounded-lg text-white my-1'>отправить</button>
                <p className="text-[10px]">Нажимая на кнопку «отправить», я соглашаюсь с условиями.</p>
            </div>
            <div className="w-[40%] mx-auto">
                <input type="text" className='bg-white w-[100%] rounded-lg pb-36 pl-2 pt-3 outline-none mt-5' placeholder='Сообщение'/>
                </div>
        </div>
        </div>
    </section>
  )
}
