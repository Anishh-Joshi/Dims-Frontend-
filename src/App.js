import './App.css';

import { useEffect,useState } from 'react';

import Sidebar from './components/SideNavbar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import axios from 'axios';



function App() {
  const [graphData, setGraphData] = useState([])
  const [tweet, setTweet] = useState([])
  const [locationData, setLocationData] = useState([])
  const [totalTweet,setTotalTweet]  =useState(0);
  const [keywordCount,setKeywordCount]  =useState(0);
  const [disasterCount, setDisasterCount] = useState(0)
  const [category,setCategory] = useState('earthquake')


  const getDisasterCount = (dData)=>{
    let createCount=[]
    dData.map((count)=>{
      createCount.push(count.count)
    })


  }

  useEffect(() => {
    getData()
  }, [category])
  

  let getData=async()=>{

     await axios.get('http://localhost:8000/api/tweets/?id='+category)
    .then(res=>{
      getDisasterCount(res.data.data)
      setGraphData(res.data.data)
      setTotalTweet(res.data.count)
      setKeywordCount(res.data.category_count)
      setTweet(res.data.tweets)
      setDisasterCount(res.data.tweets.length)
      setLocationData(res.data.location_data)
    })
    
  }

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);



  
  return (
    <>
    <Router>
      <Navbar showSidebar={showSidebar} setCategory={setCategory} category={category}/>
      <div className={sidebar?'main-wrapper-true':"main-wrapper-false"}>
      <div className='sidebar-wrapper'>
      <Sidebar sidebar={sidebar} />
          
          </div>
          <div className='page-wrapper'>
            <Routes>
              <Route path='/'  exact element={<Home response={locationData}  graphData={graphData} tweet={tweet} totalTweet={totalTweet} keywordCount={keywordCount} disasterCount={disasterCount} />}></Route>
              {/* <Route path='/hospitals' exact component={Hospitals}></Route>
              <Route path='/messages' exact component={Messages}></Route>
              <Route path='/covitest' exact component={CoviTest}></Route>
              <Route path='/help' exact component={Help}></Route> */}
            </Routes>

          </div>

        </div>



    </Router>


    </>

  );
}

export default App;


