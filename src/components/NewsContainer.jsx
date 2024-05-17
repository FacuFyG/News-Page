import React from 'react'
import NewArticle from './NewArticle'

const NewsContainer = () => {
  return (
    <>
        <aside className='bg-Verydarkblue text-Off-white max-w-[400px] min-w-[360px] items-center p-6 sm:max-h-[650px]'>
          <h2 className='text-Softorange font-bold text-[36px] mb-4'>New</h2>
        <NewArticle title='Hydrogen VS Electric Cars' text='Will hydrogen-fueled cars ever catch up to EVs?'>
        </NewArticle>
        <NewArticle title='The Downsides of AI Artistry' text='What are the possible adverse effects of on-demand AI image generation?'>
        </NewArticle>
        <NewArticle title='Is VC Funding Drying Up?' text='Private funding by VC firms is down 50% YOY. We take a look at what that means. '>
        </NewArticle>
        </aside>
        
    </>
  )
}

export default NewsContainer