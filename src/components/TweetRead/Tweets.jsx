// import { React, useEffect } from 'react'
// import './Tweets.css'
// import { AiFillTwitterCircle } from 'react-icons/ai'


// const tweetsList = []


// function Tweets(tweets) {

//     const createTweet = (tweetInfo) => {
//         return (
//             tweetInfo.map(data=>{
//                 return <div className="tweet-text-body">
//                 {data}
//             </div>
//             })

//         );
//     }

//     useEffect(() => {
//         Object.entries(tweets).map((element) => {
//             element[1].map(data => {
//                 for (const [key, value] of Object.entries(data)) {
//                     value.map((twt) => {
//                         tweetsList.push(twt)
                       
//                     })

//                 }
//             })

//         })

//         //console.log(tweetsList[100])

//     }, [tweets])

//     return (
//         <div className='tweet-wrapper'>
//             <div className="tweets-header">
//                 <AiFillTwitterCircle style={{ color: 'white', width: "50px", height: '50px' }} />

//                 <strong>LIVE TWEETS</strong>

//                 <AiFillTwitterCircle style={{ color: '00aaee', width: "50px", height: '50px' }} />
//             </div>
//             <div className="tweets-body">{createTweet(tweetsList)}</div>
//         </div>

//     )
// }

// export default Tweets