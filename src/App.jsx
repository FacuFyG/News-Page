
import Header from './components/Header'
import MainComp from './components/MainComp'
import NewsContainer from './components/NewsContainer'
import ArticlesContainer from './components/ArticlesContainer'

function App() {
  return (
    <>
    <div className='px-4 py-8 sm:my-6 sm:mx-20 sm:px-1'>
      <Header></Header>
      
      <div className='sm:flex sm:gap-8'>
      <MainComp></MainComp>
      <NewsContainer></NewsContainer>
      </div>
      
      <ArticlesContainer></ArticlesContainer>

      </div>
      
    </>
  )
}

export default App
