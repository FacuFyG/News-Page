

const Article = ({img, title, number, text}) => {
  return (
    <>
        <article className='flex gap-6 mt-5 pb-5 sm:w-[450px] '>
        <div className='w-[160px] sm:w-[160px]'>
            <img src={img} alt="" />
            </div>
            <div className='mt-[-14px]'>
                <p className='text-Grayishblue text-[30px] font-bold'> {number} </p>
                <h2 className='font-bold mb-[8px] hover:text-Softred hover:cursor-pointer text-[20px] sm:mb-[14px]'>{title}</h2>
                <p className='text-Grayishblue text-[17px]'> {text}</p>
            </div>
        </article>
    </>
  )
}

export default Article


