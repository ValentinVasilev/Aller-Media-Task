import { useEffect, useState } from 'react';
import axios from 'axios'
import { FETCH_URL } from './global/constants';
import { ArticleProps, Article } from './components/article';

function App() {

  const [collectData, setCollectData] = useState<ArticleProps>()

  useEffect(() => {
    axios(FETCH_URL)
      .then(resolve => resolve)
      .then(data => setCollectData(data.data))
  }, [])


  console.log(collectData)

  return (
    <div className="App">

    </div>
  );
}

export default App;
