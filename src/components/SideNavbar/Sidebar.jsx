import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu.jsx';
import { IconContext } from 'react-icons/lib';
import './sidenavbar.css';
import RecentsBubble from './RecentsBubble';


const SidebarNav = styled.nav`
  border-right: 1px ridge #1a1b20;
  padding-left:0.1rem;
  background:teal;
  width: 250px;
  height: 100vh;
  display: flex;
  align-items:flex-start;
  position: fixed;
  top: 60px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index:-1
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

function Sidebar({sidebar}) {

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap className='try2'>
            {SidebarData.map((item, index) => {
              return <SubMenu className='try2' item={item} key={index} />;
            })}
            <hr />
            <h6 className='recent-Messages'>Recents</h6>
            <div className="recent-div">
            <RecentsBubble recentTitle="Civil Hospital"/>
            <RecentsBubble recentTitle="Norvic Hospital"/>
            <RecentsBubble recentTitle="KMC"/>
            <RecentsBubble recentTitle='Grande Hospital'/>
            <RecentsBubble recentTitle="Dhulikhel"/>
            <RecentsBubble recentTitle="Hakuna Matata"/>
            <RecentsBubble recentTitle="Norvic Hospital"/>
            <RecentsBubble recentTitle="KMC"/>
            <RecentsBubble recentTitle='Grande Hospital'/>
            <RecentsBubble recentTitle="Norvic Hospital"/>
            <RecentsBubble recentTitle="KMC"/>
            <RecentsBubble recentTitle='Grande Hospital'/>
            </div>
            <hr />
            
            
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;