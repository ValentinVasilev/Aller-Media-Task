import { ArticleComponent, ArticleProps } from "./Article"
import '../styles/Home.css'
import { useState, useEffect } from "react";
interface ArticlesProps {
  articles: ArticleProps[]
}

const Articles = (props: ArticlesProps) => {

  const { articles } = props;

  const [allData, setAllData] = useState<ArticleProps[]>([])

  useEffect(() => {
    setAllData(articles)
  }, [articles])


  // Delete Article
  const deleteArticle = (title: string) => {
    setAllData(allData.filter((article: ArticleProps) => article.title !== title))
  }

  // Update Article
  const UpdateArticle = (title: string, newTitle: string) => {

    let updatedData = allData.map((article: ArticleProps) => {

      if (article.title === title) {
        return { ...article, title: newTitle }
      }

      return article;
    })
    setAllData(updatedData)

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