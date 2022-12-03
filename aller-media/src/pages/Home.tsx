import { useEffect, useState } from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { FETCH_URL } from '../global/constants';
import { ArticleProps } from '../components/Article';
import Articles from '../components/Articles';
import Pagination from '../components/Pagination';

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
  const indexOfLastArticle: number = currentPage * articlesPerPage;
  const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
  const currentArticles: ArticleProps[] = collectData.slice(indexOfFirstArticle, indexOfLastArticle);


  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  };


  return (
    <div>
      <Articles
        articles={currentArticles}
      />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={collectData.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Home