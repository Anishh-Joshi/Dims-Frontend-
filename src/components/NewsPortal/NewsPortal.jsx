import React, { useEffect ,useState} from 'react'
import './News.css'

function NewsPortal({response}) {


  const [date, setDate] = useState([])
  const [country, setCountry] = useState([])
  const [news, setNews] = useState([])


  useEffect(() => {

    response.forEach(e => {

      setDate(e.date)
      setCountry(e.Place)
      setNews(e.news)
      
    });
  }, [response])
  

  // useEffect(() => {
  //   console.log(news)

  // }, [news])
  
  
  return (
    <div className='news-wrapper'>
      <div className="single-news">
        <div className="heading">
          <h4>March 19 </h4><h4>Nepal</h4>
        </div>

        <div className="news">
          <span>Earthquake in Nepal</span>
        </div>

      </div>

    </div>
  )
}

export default NewsPortal