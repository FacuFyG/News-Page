import React from 'react'
import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imageDesktop from '../assets/images/image-web-3-desktop.jpg'

const MainComp = () => {
  return (
    <>
        <section className='mb-14'>
            <picture>
                <source media='(max-width: 640px)' srcSet={imageMobile}/>
                <source media='(min-width: 641px)' srcSet={imageDesktop}/>
                <img src={imageMobile} alt="" />
            </picture>
            
            <div className='sm:flex mt-6'>
            <div className='flex-1 py-1'>
                <h1 className='text-[46px] font-bold sm:text-[56px] leading-none sm:leading-[68px]'>The Bright Future of Web 3.0? </h1>
                
            </div>
            <div className='flex-1 '>
                <p className='text-[18px] mb-10 sm:text-[18px] pt-9 leading-[30px] text-Darkgrayishblue text-justify'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? </p>
                <button className='bg-Softred font-semibold py-3 px-8 tracking-[5px] text-Off-white hover:bg-Verydarkblue'> READ MORE</button>
            </div>
            </div>
            
        </section>
    </>
  )
}

export default MainComp


