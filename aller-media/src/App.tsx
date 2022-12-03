import { useEffect, useState } from 'react';
import axios from 'axios'
import { FETCH_URL } from './global/constants';
import { ArticleProps, Article } from './components/article';

function App() {

  const [collectData, setCollectData] = useState<ArticleProps[]>([])

  useEffect(() => {
    axios(FETCH_URL)
      .then(resolve => resolve)
      .then(data => setCollectData(data.data))
      .catch(err => {
        alert('There was error while retrieving the data!')
      })
  }, [])


  return (
    <div className="App">
      {
        collectData.map((artcl: ArticleProps) => {
          return <Article
            key={artcl.title}
            title={artcl.title}
            url={artcl.url}
            imageUrl={artcl.imageUrl}
          />
        })
      }
    </div>
  );
}

export default App;
