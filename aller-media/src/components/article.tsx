import { ChangeEvent, useState } from 'react';
import '../styles/components/article.component.css'
export interface ArticleProps {
  imageUrl: string,
  title: string,
  url: string,
  deleteArticle(title: string): any
  updateArticle(title: string, newTitle: string): any
}

export const ArticleComponent = (props: ArticleProps) => {

  const { imageUrl, title, url, deleteArticle, updateArticle } = props;

  const [enableUpdate, setEnableUpdate] = useState<boolean>(false)
  const [updateArticleTitle, setUpdateArticleTitle] = useState<string>('')

  return (
    <article className="article_container">
      <a target="_blank" rel="noreferrer" href={url} className='link'>
        <img src={imageUrl} alt={imageUrl} className='img_container' />
      </a>
      {
        enableUpdate
          ? (
            <div className='update_section'>
              <input placeholder={title} autoFocus onChange={(e: ChangeEvent<HTMLInputElement>) => setUpdateArticleTitle(e.target.value)} />
              <div className='update_actions'>
                <button className='btn cancel' type='button' onClick={() => setEnableUpdate(false)}>Cancel</button>
                <button className='btn save' type='button' onClick={() => updateArticle(title, updateArticleTitle)}>Save</button>
              </div>
            </div>
          )
          : (
            <div className='update_section'>
              <h1 className='title'>{title}</h1>
              <div className='update_actions'>
                <button className='btn delete' type='button' onClick={() => deleteArticle(title)}>Delete</button>
                <button className='btn update' type='button' onClick={() => setEnableUpdate(true)}>Update</button>
              </div>
            </div>
          )
      }
    </article>
  )
}
