import axios from 'axios';

const headers = {
  'content-type': 'application/json',
  'subscription-key': process.env.REACT_APP_LATERAL_API_CODE
}

export const getArticleExtractor = async (url) => {
  try {
    const response = await axios.get(`https://document-parser-api.lateral.io/?url=${url}`, { headers })
    return response
  } catch (e) {
    if (e.response) {
      // The request was made and the server responded with a status code
      console.log('status', e.response);
      return e.response
    } else if (e.request) {
      // The request was made but no response was received
      console.log('request', e.request);
      return e.request
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', e.message);
      return e.message
    }
  }

}

export const postNewsRecommender = async (url) => {
  const extractedArticle = await getArticleExtractor(url)
  const extractedText = extractedArticle.data.title
  const data = { text: extractedText }
  if (extractedArticle.status === 400) {
    return extractedArticle.status
  }
  const response = await axios.post('https://news-api.lateral.io/documents/similar-to-text', data, { headers })
  return response
}
