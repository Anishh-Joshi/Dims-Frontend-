import React from 'react'
import{AiFillFilter} from 'react-icons/ai'
import{GiEarthCrack} from 'react-icons/gi'
import{MdNotificationsActive} from 'react-icons/md'
import{FiKey} from 'react-icons/fi'
import{BsTwitter} from 'react-icons/bs'

function Card({color,value,icon,word}) {
    const mystyle = {
        backgroundColor: color,
      };
  return (
    <div className='card-layout'  style={mystyle}>
      {(() => {

switch (icon) {
    case 'twitter':
        return (
            <BsTwitter style={{ color: 'white', width: "8ch", height: '500px' }} />
        )
    case 'keyword':
        return (
            <FiKey className='info-icons' style={{ color: 'white', width: "8ch", height: '500px' }} />
        )
    case 'filtered':
        return (
            <AiFillFilter className='info-icons' style={{ color: 'white', width: "8ch", height: '500px' }} />
        )
    case 'find':
        return (
            <GiEarthCrack className='info-icons'  style={{ color: 'white',width: "8ch", height: '500px' }} />
        )
    
    default:
        return (
            <MdNotificationsActive className='info-icons' style={{ color: 'white', width: "8ch", height: '500px' }} />
        )
}

})()}


      <div className="card-value">
      {value} 
      <div className='card-word' >{word}</div>
      </div>
      </div>
  )
}

export default Card