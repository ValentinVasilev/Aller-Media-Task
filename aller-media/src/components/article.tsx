import { useState } from 'react';
import '../styles/components/article.component.css'
export interface ArticleProps {
  imageUrl: string,
  title: string,
  url: string
}

export const Article = (props: ArticleProps) => {

  const { imageUrl, title, url } = props;

  const [enableUpdate, setEnableUpdate] = useState<boolean>(false)

  return (
    <article className="article_container">
      <a target="_blank" rel="noreferrer" href={url} className='link'>
        <img src={imageUrl} alt={imageUrl} className='img_container' />
      </a>
      {
        enableUpdate
          ? <input placeholder={title} autoFocus />
          : <h1 className='title'>{title}</h1>
      }
      {
        enableUpdate
          ? (
            <div className='update_section'>
              <button className='btn cancel' type='button' onClick={() => setEnableUpdate(false)}>Cancel</button>
              <button className='btn save' type='button'>Save</button>
            </div>
          )
          : (
            <div className='update_section'>
              <button className='btn delete' type='button'>Delete</button>
              <button className='btn update' type='button' onClick={() => setEnableUpdate(true)}>Update</button>
            </div>
          )
      }

    </article>

  )
}
