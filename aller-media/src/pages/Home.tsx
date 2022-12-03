import { useEffect, useState } from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { FETCH_URL } from '../global/constants';
import { ArticleProps, Article } from '../components/article';

const Home = () => {

  const [collectData, setCollectData] = useState<ArticleProps[]>([])

  useEffect(() => {
    axios(FETCH_URL)
      .then(resolve => resolve)
      .then(data => setCollectData(data.data))
      .catch(err => {
        alert(err)
      })
  }, [])

  return (
    <div className='home_container'>
      {
        collectData.map((artcl: ArticleProps) => {
          return <Article
            key={artcl.title}
            title={artcl.title}
            url={artcl.url}
            imageUrl={artcl.imageUrl}
          />
        })
      }
    </div>
  )
}

export default Home