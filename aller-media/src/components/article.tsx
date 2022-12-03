import { Link } from 'react-router-dom';
import '../styles/components/article.component.css'
export interface ArticleProps {
  imageUrl?: string,
  title: string,
  url: string
}

export const Article = (props: ArticleProps) => {
  const { imageUrl, title, url } = props;
  return (
    <article className="article_container">
      <a target="_blank" rel="noreferrer" href={url}>
        <h1>{title}</h1>
      </a>
    </article>

  )
}