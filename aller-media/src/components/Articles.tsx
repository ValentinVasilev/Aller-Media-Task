import { ArticleComponent, ArticleProps } from "./Article"
import '../styles/Home.css'
import { useState, useEffect } from "react";
interface ArticlesProps {
  articles: ArticleProps[]
}

const Articles = (props: ArticlesProps) => {

  const { articles } = props;

  const [allData, setAllData] = useState<any>()

  useEffect(() => {
    setAllData(articles)
  }, [articles])

  const deleteAticle = (title: string) => {
    setAllData(allData.filter((article: any) => article.title !== title))
  }

  const UpdateArticle = (title: string, newTitle: string) => {

    let updatedData = allData.map((article: any) => {

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
            deleteArticle={deleteAticle}
          />
        })
      }
    </div>
  )
}

export default Articles