import React, { useState } from 'react';
import { postNewsRecommender } from './APi';
import SimilarArticles from './components/feature/similarArticles/SimilarArticles';
import { Error } from './components/shared/error/Error';
import Nav from './components/shared/nav/Nav';

const App = () => {
  const [articlesRecommended, setArticlesRecommended] = useState([])
  const [error, setError] = useState(false)

  const handleSubmit = async (inputValue) => {
    const response = await postNewsRecommender(inputValue)
    if (response === 400) {
      setArticlesRecommended([])
      setError(true)
    } else {
      setError(false)
      setArticlesRecommended(response.data)
    }
  }

  return (
    <div className="App">
      <Nav handleSubmit={handleSubmit} />
      {error && <Error />}
      <SimilarArticles recommendedArticles={articlesRecommended} />
    </div>
  );
}



export default App;
