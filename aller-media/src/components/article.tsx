import '../styles/components/article.component.css'
export interface ArticleProps {
  imageUrl: string,
  title: string,
  url: string
}

export const Article = (props: ArticleProps) => {
  return (
    <article className="article_container">
      <p>Article</p>
    </article>
  )
}