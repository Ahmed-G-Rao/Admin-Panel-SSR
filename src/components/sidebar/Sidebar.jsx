import React, { useEffect } from "react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import "./Sidebar.css"
import { Link, NavLink } from "react-router-dom"
import ll from "../../assets/sidebar/Logo.png"
const config = require('../../helpers/config.json')
const SideBar = (props) => {
  //Dropdown
  const [dropdown, setDropdown] = useState(false)

  
  const [dropdownCms, setDropdownCms] = useState(false)



  const [navId, setNavId] = useState(true)
  const [headId, setHeadId] = useState(true)
  const [barsId, setBarsId] = useState(true)
  const [logoId, setLogoId] = useState(true)
  const [timesId, setTimesId] = useState(true)
  const Open = () => {
    setNavId(true)
    setHeadId(true)
    setBarsId(true)
    setLogoId(true)
    setTimesId(true)
  }
  const Close = () => {
    setNavId(false)
    setHeadId(false)
    setBarsId(false)
    setLogoId(false)
    setTimesId(false)
  }
  const signOut = () => {
    localStorage.clear()
    window.location = "/"
  }

  
  useEffect(() => {
    dropdownCms === true ? document.body.className = "overflow-y" : document.body.className = "overflow-scroll"
  }, [dropdownCms])
  useEffect(() => {
    dropdown === true ? document.body.className = "overflow-y" : document.body.className = "overflow-scroll"
  }, [dropdown])
  return (
    <>
      <nav id={navId == false ? "navdeactive" : "navactive"} className=" d-lg-block d-md-none d-none">
        <div id={headId == false ? "headdeactive" : "headactive"} style={{ borderBottom: "1px solid #eaeaea" }} >
          <div id={logoId == false ? "logodeactive" : "logoactive"} className="text-center" />
          <span onClick={() => Open()} id={barsId == false ? "barsdeactive" : "barsactive"}>
            <svg width={24} height={24} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18" />
              <path d="M3 6h18" />
              <path d="M3 18h18" />
            </svg>
          </span>

          {/* <i className="fa fa-bars" onClick={() => Open()} id={barsId == false ? "barsdeactive" : "barsactive"} /> */}
          {/* <div id="va">Code Routing</div> */}
          {/* <i className="fa fa-times" onClick={() => Close()} id={timesId == false ? "timesdeactive" : "timesactive"} /> */}
          <span onClick={() => Close()} id={timesId == false ? "timesdeactive" : "timesactive"}>
            <svg width={24} height={24} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </span>
        </div>
        <ul className="sidebar-ul mt-5 ">
         
            <>
              <li className='nav-item '>
                <NavLink className='nav-link box-shadow' to='/dashboard'>
                  <span className="icon me-2">
                    <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1ZM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5Zm15-1a1 1 0 0 1-2 0v-5h2v5Z" />
                      <path d="M6 7h8v2H6V7Zm0 4h8v2H6v-2Zm5 4h3v2h-3v-2Z" />
                    </svg>
                  </span>
                  Dashboard
                </NavLink>
               
              </li>
              
              
              
             
            </> 
          


          {/* ROLE MANAGEMENT */}
        
            <>
              <li className='nav-item '>
              <NavLink
                  onClick={() => setDropdownCms(true)}
                  style={{ width: '100%' }} className="nav-link box-shadow " to='/termsandconditions' >
                  <span className="icon me-2">
                    <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>
                  Terms And Conditions
                </NavLink>
                <NavLink style={{ width: '100%' }} className="nav-link box-shadow " to='/privacy' >
                  <span className="icon me-2">
                    <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>Manage Privacy Policy


                </NavLink>
              </li>
            </> 

          
        
              <>
                <li className='nav-item '>
                  <NavLink className=" nav-link box-shadow" to='/userform' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                      </svg>
                    </span>
                    Sub admin

                  </NavLink>
                </li>
                <li className='nav-item '>
                  <NavLink className=" nav-link box-shadow" to='/products' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                      </svg>
                    </span>
                    Products

                  </NavLink>
                </li>
                <li>
                <NavLink className='nav-link box-shadow ' to='/orders'>
              <span className="icon me-2">
                <svg width={19} height={19} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
                  <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </span>
              Orders
            </NavLink>
                </li>
              </>
             
         
          {/* Category Manager */}

          


     

          {
          
              <>
                <li className='nav-item' style={{ borderTop: "1px solid #eaeaea" }}>
                  <button style={{ background: "transparent" }} onClick={signOut} className='nav-link box-shadow  text-start logout-nav' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <path d="m16 17 5-5-5-5" />
                        <path d="M21 12H9" />
                      </svg>
                    </span>
                    Log Out
                  </button>
                </li>
              </>
            
          }


        </ul>
      </nav>





      {/* Responsive */}
      <div className="container-fluid bg d-lg-none d-md-block d-block">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <Link to='/dashboard'>
                  <img src={ll} height={"50px"} width={"70px"} alt="" srcset="" />

                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                  <ul className="navbar-nav navul mb-2 mb-lg-0 ml-lg-5 ml-md-0 ml-0 mt-4" style={{ height: "150px", overflowY: "auto" }}>
                    <li className="nav-item dropdown mr-2">
                      <Link style={{ color: "black !important" }} to="/dashboard"><i className="fa fa-tachometer" />Dashboard</Link>
                    </li>
                    <li className="nav-item dropdown mr-2">
                      <Link style={{ color: "black !important" }} to="/termsandconditions"><i class="fas fa-weight"></i>Terms And Conditions</Link>
                    </li>
                    <li className="nav-item dropdown mr-2">
                      <Link style={{ color: "black !important" }} to="/privacy"><i class="fas fa-weight"></i>Manage Privacy Policy</Link>
                    </li>

                    <li className="nav-item dropdown mr-2">
                      <Link style={{ color: "black !important" }} to="/userform"><i class="fas fa-users"></i>Sub admin</Link>
                    </li>
                    <li className="nav-item dropdown mr-2">
                      <Link style={{ color: "black !important" }} to="/products"><i class="fas fa-users"></i>Products</Link>
                    </li>
                    
                    <li className="nav-item dropdown mr-2">
                      <Link style={{ color: "black !important" }} to="/orders"><i class="fas fa-users"></i>Orders</Link>
                    </li>
                    
                    <li className="nav-item dropdown mr-2">
                      <a onClick={() => signOut()}><i class="fas fa-user"></i>Log Out</a>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
export default SideBar;