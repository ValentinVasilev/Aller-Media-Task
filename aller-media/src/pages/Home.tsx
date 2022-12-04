import { useEffect, useState } from 'react';
import '../styles/Home.css'
import axios from 'axios'
import { FETCH_URL } from '../global/constants';
import { ArticleProps } from '../components/Article';
import Articles from '../components/Articles';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectArticle, persistArticles } from '../app/features/articlesSlice';

const Home = () => {

  const dispatch = useAppDispatch();
  const articles = useAppSelector(selectArticle)

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [articlesPerPage] = useState<number>(10);

  useEffect(() => {
    axios(FETCH_URL)
      .then(resolve => resolve)
      .then(data => {
        dispatch(persistArticles(data.data));
      })
      .catch(err => {
        alert(err)
      })
  }, [dispatch])

  // Get current Articles
  const indexOfLastArticle: number = currentPage * articlesPerPage;
  const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
  const currentArticles: ArticleProps[] = articles.articles[0]?.slice(indexOfFirstArticle, indexOfLastArticle);

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
        totalArticles={articles.articles[0]?.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Home