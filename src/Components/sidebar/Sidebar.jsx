import React from 'react'
import './sidebar.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../Assets/logo.png'
import {
  LineStyle,
  TrendingUp,
  Storefront,
  ExitToApp,
  WorkOutline,
  Settings,
  PeopleOutline,
  ArrowUpwardOutlined,
} from '@material-ui/icons'

const Sidebar = () => {
  const [clickedElement, setClickedElement] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: '200px' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '200px' }}
      className="sidebar"
    >
      <div className="sidebarWrapper">
        <div className="">
          <div className="sidebarList">
            <div className="sidebarListItem logo-container">
              <img src={logo} alt="logo" className="logo" />
              <h1 className="sidebarTitle">Backing</h1>
            </div>
          </div>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="sidebarListItem"
              >
                <LineStyle className="sidebarIcon" />
                Home
              </motion.li>
            </Link>
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="sidebarListItem"
              >
                <TrendingUp className="sidebarIcon" />
                Sales
              </motion.li>
            </Link>
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                onClick={() => setClickedElement(!clickedElement)}
                className="sidebarListItem"
              >
                <Storefront className="sidebarIcon" />
                Products
                <ArrowUpwardOutlined
                  className={`sidebarIcon button ${clickedElement ? 'rotate' : ''} `}
                />
              </motion.li>
              <motion.div className={`dropdown ${clickedElement ? '' : 'dropdown-display'}`}>
                <div className="dropdown-menu">
                  <label className="checkbox" htmlFor="myCheckboxId">
                    Show All
                    <input
                      checked
                      className="checkbox__input"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId"
                    />
                  </label>
                  <div className="checkbox__box"></div>
                </div>
                 <div className=" dropdown-menu">
                  <label className="checkbox" htmlFor="myCheckboxId2">
                    T-shirts (108)
                    <input
                      className="checkbox__input"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId2"
                    />
                  </label>
                  <div className="checkbox__box"></div>
                </div>
                <div className=" dropdown-menu">
                  <label className="checkbox" htmlFor="myCheckboxId3">
                    Jackets (42)
                    <input
                      checked
                      className="checkbox__input"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId3"
                    />
                  </label>
                  <div className="checkbox__box"></div>
                </div>
                <div className=" dropdown-menu">
                  <label className="checkbox" htmlFor="myCheckboxId4">
                    Pants (26)
                    <input
                      className="checkbox__input"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId4"
                    />
                  </label>
                  <div className="checkbox__box"></div>
                </div>
                <div className=" dropdown-menu">
                  <label className="checkbox" htmlFor="myCheckboxId5">
                    Shoes (42)
                    <input
                      checked
                      className="checkbox__input"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId5"
                    />
                  </label>
                  <div className="checkbox__box"></div>
                </div> 
              </motion.div>
            </Link>
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="sidebarListItem"
              >
                <WorkOutline className="sidebarIcon" />
                Reports
              </motion.li>
            </Link>
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="sidebarListItem"
              >
                <PeopleOutline className="sidebarIcon" /> Reports
              </motion.li>
            </Link>
          </ul>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="sidebarListItem"
              >
                <Settings className="sidebarIcon" />
                Settings
              </motion.li>
            </Link>
            <Link to="/" className="link">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.6 }}
                className="sidebarListItem"
              >
                <ExitToApp className="sidebarIcon" />
                Logout
              </motion.li>
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
