import { ArticleComponent, ArticleProps } from "./Article"
import '../styles/Home.css'
interface ArticlesProps {
  articles: ArticleProps[]
}

const Articles = (props: ArticlesProps) => {

  const { articles } = props;

  return (
    <div className='home_container'>
      {
        articles.map((artcl: ArticleProps) => {
          return <ArticleComponent
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

export default Articles