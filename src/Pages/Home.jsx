import React from 'react'
import Card from '../components/Card'
import Graph from '../components/Graph/Graph'
import NewsPortal from '../components/NewsPortal/NewsPortal'
import Tweets from '../components/TweetRead/Tweets'
import WorldMap from '../components/Worldmap/WorldMap'
import './Home.css'

function Home({graphData,tweet,totalTweet,response,keywordCount,disasterCount}) {
    
  return (
    <div className='right-portion'>
        <div className='right-flex'>
        <div className='headings'>
          <div className='card-holder'>
            <Card color={"#00aaee"} icon={"twitter"} value={totalTweet.toLocaleString('en-US')} word={"Collected Tweets"} />
            <Card color={"#02728c"} icon={"keyword"} value={keywordCount.toLocaleString('en-US')} word={'Tweets'} />
            <Card color={"#02728c"} icon={"filtered"} value={"0000"} word={'Filtered Tweets'} />
            <Card color={"#d9004c"} icon={"find"} value={disasterCount} word={"Disaster"} />
          </div>
          <Graph graphData={graphData} />
        </div>
        {/* <Tweets tweets={tweet}/> */}
        </div>
        <div className='right-lower'>
          <WorldMap response={response}/>
          <NewsPortal response={response} />
        </div>
      </div>
  )
}

export default Home