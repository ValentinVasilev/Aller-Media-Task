import { useEffect, useState } from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { FETCH_URL } from '../global/constants';
import { ArticleProps } from '../components/Article';
import Articles from '../components/Articles';

const Home = () => {

  const [collectData, setCollectData] = useState<ArticleProps[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesPerPage] = useState<number>(10);

  useEffect(() => {
    axios(FETCH_URL)
      .then(resolve => resolve)
      .then(data => setCollectData(data.data))
      .catch(err => {
        alert(err)
      })
  }, [])

  // Get current Articles
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = collectData.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div >
      <Articles
        articles={currentArticles}
      />
    </div>
  )
}

export default Home