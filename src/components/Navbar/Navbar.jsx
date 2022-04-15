
import './Navbar.css';
import logo from '../../assets/images/logo.png'
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import * as IoIcons from 'react-icons/io'
import { useState } from 'react';



const NavIcon = styled(Link)`
margin-left:0.5rem;
margin-right:0.5rem;
font-size: 1.5rem;
height: 60px;
display: flex;
justify-content: flex-start;
align-items: center;
color:dark;
background:transparent;
`;
const Nav = styled.div`
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
background:teal;
`;


function Navbar({ showSidebar,setCategory,category }) {

  const listOfCategories= ["tornado","earthquake","tsunami","cyclone","hurricane","flood","rain","rainstorm","storm"];
  const [dropMenu, setDropMenu] = useState(false);
  const toggleDropMenu = () => {
    setDropMenu(dropMenu ? false : true);
}

const SetFilter = (c) => {
  setCategory(c);
}
 

  return(
    <IconContext.Provider value={{ color: '#fff' }}>
      <Nav>
        <div className='vertical-navbar'>
          <NavIcon to='#'>
            <FaIcons.FaBars className='hamburger' onClick={showSidebar} />
          </NavIcon>
          <img src={logo} alt="logo" className='dims-logo' />

        </div>
        <div className='search-bar'>
          <BiIcons.BiSearchAlt className='notification' />
          <input type="text" placeholder="Search" className="search-input" />
        </div>

        <div onClick={toggleDropMenu} className='drop-menu-wrapper '>
                        <div className='categorical-view'>
                          <span className='drop-title'>{category.toUpperCase()}</span>
                        </div>
                        <IoIcons.IoIosArrowDown className='down-arrow' />

                        {dropMenu ?
                            <div className='dropdown-choices'>
                                {listOfCategories.map((count) => {
                                    return <div key={count} onClick={() => SetFilter(count)} className='drop-title drop-title-expanded'>
                                        {count.toUpperCase()}
                                    </div>
                                })}


                            </div> : <div className='transparency' />
                        }

                    </div>

      </Nav>

    </IconContext.Provider>
  );
}

export default Navbar
