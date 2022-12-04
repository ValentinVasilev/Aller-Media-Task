import { ArticleComponent, ArticleProps } from "./Article"
import '../styles/Home.css'
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { updateArticles, deleteArticles, selectArticle } from '../app/features/articlesSlice';

interface ArticlesProps {
  articles: ArticleProps[]
}

const Articles = (props: ArticlesProps) => {

  const dispatch = useAppDispatch()
  const select = useAppSelector(selectArticle)

  const { articles } = props;

  const [allData, setAllData] = useState<ArticleProps[]>([])
  const [persistedData, setPersistedData] = useState<ArticleProps[]>([])

  let selectedData = select.articles[0]

  useEffect(() => {
    setAllData(articles)
    setPersistedData(selectedData)
  }, [articles, selectedData])

  // Delete Article
  const deleteArticle = (title: string) => {

    let filteredData = persistedData.filter((article: ArticleProps) => article.title !== title)

    dispatch(deleteArticles(filteredData))
  }


  // Update Article
  const UpdateArticle = (title: string, newTitle: string) => {

    let updatedData = persistedData.map((article: ArticleProps) => {

      if (article.title === title) {
        return { ...article, title: newTitle }
      }

      return article;
    })
    dispatch(updateArticles(updatedData))

  }


  return (
    <div className='home_container'>
      {
        allData?.map((artcl: ArticleProps) => {
          return <ArticleComponent
            key={artcl.title}
            title={artcl.title}
            url={artcl.url}
            imageUrl={artcl.imageUrl}
            deleteArticle={deleteArticle}
            updateArticle={UpdateArticle}
          />
        })
      }
    </div>
  )
}

export default Articles