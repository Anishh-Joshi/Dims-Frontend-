import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
  {
    title: 'Home  ',
    path: '/',
    icon: <AiIcons.AiFillHome className='reactIcons' />,
    cName: 'nav-text'
  },
  {
    title: 'Analysis',
    path: '/hospitals',
    icon: <FaIcons.FaHospitalSymbol className='reactIcons' />,
    cName: 'nav-text'
  },
  {
    title: 'Tweets',
    path: '/messages',
    icon: <AiIcons.AiFillMessage className='reactIcons' />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/covitest',
    icon: <RiIcons.RiTestTubeLine className='reactIcons' />,
    cName: 'nav-text'
  },
  {
    title: 'Blogs',
    path: '/help',
    icon: <FaIcons.FaHandHolding className='reactIcons' />,
    cName: 'nav-text'
  },
];