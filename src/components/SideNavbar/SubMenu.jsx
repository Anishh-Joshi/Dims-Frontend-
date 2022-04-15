import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './sidenavbar.css';

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 50px;
  width:90%;
  left:0px;
  margin:10px;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    background: #186b6d;
    cursor: pointer;
    width:80%;
    border-radius:20px;
    color:white;
    padding:8px;
    transition: 300ms;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  background:transparent;
`;



const SubMenu = ({ item }) => {

  return (

      <SidebarLink className='Side_options' to={item.path} onClick={item.subNav }>
          <div className='Side_options'>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
        </SidebarLink>
        
  );
};

export default SubMenu;