import React, { useState } from 'react';
import { postNewsRecommender } from './APi';
import SimilarArticles from './components/feature/similarArticles/SimilarArticles';
import { Error } from './components/shared/error/Error';
import Nav from './components/layout/nav/Nav';

const App = () => {
  const [articlesRecommended, setArticlesRecommended] = useState([])
  const [error, setError] = useState(false)

  const handleSubmit = async (inputValue) => {
    const response = await postNewsRecommender(inputValue)
    if (response === 400) {
      // reset the articles array when there is an error, Done this for when we inserted a good URL click submit and then we change to a bad URL
      setArticlesRecommended([])
      // set the error state to true to show the error msg
      setError(true)
    } else {
       // set the error state to false. Done this for when we insert a bad URL and then we submit a good URL so the error msg disappears
      setError(false)
      setArticlesRecommended(response.data)
    }
  }

  return (
    <div className="App">
      <Nav handleSubmit={handleSubmit} />
      {/* show the error component if there is an error */}
      {error && <Error />}
      <SimilarArticles recommendedArticles={articlesRecommended} />
    </div>
  );
}



export default App;
