import React from 'react'

const NewArticle = ({title,text}) => {
  return (
   <>

        <article className='h-[160px] border-b-2 border-Grayishblue last:border-none'>
            <h2 className='text-[22px] font-bold mb-3 mt-8 cursor-pointer hover:text-Softorange'>{title}</h2>
            <p className='text-[18px]'>{text} </p>
        </article>
    
   </>
  )
}

export default NewArticle