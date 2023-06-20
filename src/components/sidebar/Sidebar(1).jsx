import React from "react"
import { useState } from "react"
import "./Sidebar.css"
import { Link, NavLink } from "react-router-dom"
import ll from "../../assets/sidebar/Logo.png"


const SideBar = (props) => {
  const [navId, setNavId] = useState(false)
  const [headId, setHeadId] = useState(false)
  const [barsId, setBarsId] = useState(false)
  const [logoId, setLogoId] = useState(false)
  const [timesId, setTimesId] = useState(false)
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
  return (
    <>
      <nav id={navId == false ? "navdeactive" : "navactive"} className=" d-lg-block d-md-none d-none">
        <div id={headId == false ? "headdeactive" : "headactive"} >
          <div id={logoId == false ? "logodeactive" : "logoactive"} className="text-center" />
          <i className="fa fa-bars" onClick={() => Open()} id={barsId == false ? "barsdeactive" : "barsactive"} />
          {/* <div id="va">Code Routing</div> */}
          <i className="fa fa-times" onClick={() => Close()} id={timesId == false ? "timesdeactive" : "timesactive"} />
        </div>
        <ul className="sidebar-ul mt-5 ">
          <li className='nav-item '>
            <NavLink className='nav-link box-shadow' to='/'>
              <span className="icon me-2">
                <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1ZM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5Zm15-1a1 1 0 0 1-2 0v-5h2v5Z" />
                  <path d="M6 7h8v2H6V7Zm0 4h8v2H6v-2Zm5 4h3v2h-3v-2Z" />
                </svg>
              </span>
              Dashboard
            </NavLink>
          </li>
          <li className='nav-item'>
            <div class="dropdown">
              {/* <Link className="nav-link box-shadow cms-m " to='/termsandconditions' data-bs-toggle="dropdown" aria-expanded="false"> */}
                <span className='icon me-2'>
                  <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.5h-9.75V6H21V4.5Z" />
                    <path d="M21 18h-9.75v1.5H21V18Z" />
                    <path d="M12.75 11.25H3v1.5h9.75v-1.5Z" />
                    <path d="M5.25 8.25a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                    <path d="M5.25 21.75a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                    <path d="M18.75 15a3 3 0 1 1 0-5.999 3 3 0 0 1 0 5.999Zm0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
                  </svg>
                </span>

                CMS
                <span className="float-end chevron">
                  <svg width={25} height={25} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>

              {/* </Link> */}
              <ul className="dropdown-menu" >
                <li>
                  <NavLink
                    style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/termsandconditions' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </span>
                    Terms And Conditions
                  </NavLink></li>

                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/privacy' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </span>Manage Privacy Policy


                  </NavLink>
                </li>


                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/aboutapp' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                        <path d="M12 18h.01" />
                      </svg>
                    </span>
                    About App

                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/termLength' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.4 19.2s1.2 0 1.2-1.2-1.2-4.8-6-4.8-6 3.6-6 4.8c0 1.2 1.2 1.2 1.2 1.2h9.6ZM10.827 18a.298.298 0 0 1-.027-.005c.002-.317.2-1.236.912-2.064.663-.776 1.827-1.531 3.888-1.531 2.06 0 3.225.756 3.888 1.531.712.828.91 1.749.912 2.064l-.01.002a.309.309 0 0 1-.016.003h-9.547Zm4.773-7.2a2.4 2.4 0 1 0 0-4.802 2.4 2.4 0 0 0 0 4.802Zm3.6-2.4a3.599 3.599 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Zm-8.476 5.136a7.048 7.048 0 0 0-1.476-.297 8.843 8.843 0 0 0-.848-.04c-4.8 0-6 3.6-6 4.8 0 .801.4 1.2 1.2 1.2h5.06A2.686 2.686 0 0 1 8.4 18c0-1.211.453-2.45 1.308-3.484a6.35 6.35 0 0 1 1.016-.98Zm-2.42.864A6.592 6.592 0 0 0 7.2 18H3.6c0-.312.197-1.236.912-2.069.654-.763 1.79-1.507 3.792-1.53V14.4ZM4.2 9a3.6 3.6 0 1 1 7.2 0 3.6 3.6 0 0 1-7.2 0Zm3.6-2.4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8Z" />
                      </svg>
                    </span>
                    Term Length

                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/rentalagreement' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14.64a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z" />
                        <path d="M2.4 7.44a1.2 1.2 0 0 1 1.2-1.2h16.8a1.2 1.2 0 0 1 1.2 1.2v9.6a1.2 1.2 0 0 1-1.2 1.2H3.6a1.2 1.2 0 0 1-1.2-1.2v-9.6Zm3.6 0a2.4 2.4 0 0 1-2.4 2.4v4.8a2.4 2.4 0 0 1 2.4 2.4h12a2.4 2.4 0 0 1 2.4-2.4v-4.8a2.4 2.4 0 0 1-2.4-2.4H6Z" />
                      </svg>
                    </span>
                    Rental Agreement

                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/usagepolicy' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.76 20.32a.736.736 0 0 0 .12-.03 2.64 2.64 0 0 0 .353-.142 7.467 7.467 0 0 0 1.072-.64 12.873 12.873 0 0 0 2.744-2.679c1.833-2.396 3.369-6.037 2.704-11.025a.576.576 0 0 0-.394-.468 72.88 72.88 0 0 0-3.404-1.026c-1.332-.362-2.557-.63-3.195-.63v16.64ZM8.247 3.072c1.302-.354 2.685-.672 3.513-.672.828 0 2.212.318 3.514.672 1.332.36 2.675.786 3.464 1.044a1.85 1.85 0 0 1 1.253 1.515c.715 5.372-.944 9.354-2.958 11.988a14.133 14.133 0 0 1-3.02 2.943 8.594 8.594 0 0 1-1.258.75c-.336.159-.697.288-.995.288-.297 0-.657-.13-.994-.288a8.583 8.583 0 0 1-1.258-.75 14.133 14.133 0 0 1-3.02-2.943C4.474 14.985 2.814 11.003 3.53 5.63a1.848 1.848 0 0 1 1.252-1.515 74.944 74.944 0 0 1 3.465-1.044Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Usage Policy & Limitations

                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/insurance' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.477 4.712c-3.573 0-6.685 2.045-7.584 4.95h-.66a1.2 1.2 0 0 0-1.18 1.406l.304 1.752a1.8 1.8 0 0 0 1.773 1.492h.316c.36.616.826 1.174 1.374 1.658l-.875 2.973a.6.6 0 0 0 .576.769h2.4a.6.6 0 0 0 .565-.398l.579-1.622c.762.208 1.572.32 2.413.32.848 0 1.666-.113 2.434-.326l.651 1.647a.599.599 0 0 0 .558.379h2.4a.6.6 0 0 0 .574-.774l-.913-3.007c1.31-1.177 2.138-2.78 2.138-4.569a5.51 5.51 0 0 0-.024-.517c.313-.132.61-.32.846-.533.378.368.978.368.978-.5 0 .268-.6.268-.553-.031.05-.097.087-.2.108-.306a.839.839 0 0 0-.243-.774.696.696 0 0 0-.848-.118.882.882 0 0 0-.45.675c-.029.291.098.576.384.784-.1.069-.203.13-.31.184-.641-3.197-3.941-5.514-7.731-5.514Zm8.607 4.651a.675.675 0 0 1-.117.252.9.9 0 0 1-.053-.03c-.175-.108-.188-.21-.182-.267a.285.285 0 0 1 .14-.208c.059-.032.096-.025.136.014a.242.242 0 0 1 .076.24Zm-10.798-.78a7.936 7.936 0 0 1 2.19-.303c.8 0 1.564.116 2.272.327a.6.6 0 1 0 .344-1.15 9.12 9.12 0 0 0-2.615-.377c-.88 0-1.73.123-2.523.35a.6.6 0 0 0 .332 1.154ZM7.92 10.38a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Insurance & Indemnification

                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/transport' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.4 6.597a1.8 1.8 0 0 1 1.8-1.8H15a1.8 1.8 0 0 1 1.8 1.8v1.8h1.224a1.8 1.8 0 0 1 1.404.675l1.777 2.22a1.8 1.8 0 0 1 .395 1.126v2.579a1.8 1.8 0 0 1-1.8 1.8h-.6a2.4 2.4 0 0 1-4.8 0h-6a2.4 2.4 0 1 1-4.797-.102A1.8 1.8 0 0 1 2.4 14.997v-8.4Zm1.553 8.947a2.399 2.399 0 0 1 4.126.053h6.643c.211-.365.514-.667.878-.878V6.597a.6.6 0 0 0-.6-.6H4.2a.6.6 0 0 0-.6.6v8.4a.6.6 0 0 0 .353.547ZM16.8 14.397a2.4 2.4 0 0 1 2.079 1.2h.921a.6.6 0 0 0 .6-.6v-2.58a.6.6 0 0 0-.132-.374l-1.776-2.22a.6.6 0 0 0-.468-.226H16.8v4.8ZM6 15.597a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm10.8 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
                      </svg>
                    </span>
                    Transport & Installation Policy

                  </NavLink>
                </li>

                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/maintenance' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 16.2a.6.6 0 0 1 .6-.6H6a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6v-2.4Zm4.8-3.6a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v6a.6.6 0 0 1-.6.6H8.4a.6.6 0 0 1-.6-.6v-6ZM12.6 9a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v9.6a.6.6 0 0 1-.6.6h-2.4a.6.6 0 0 1-.6-.6V9Zm4.8-3.6a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v13.2a.6.6 0 0 1-.6.6H18a.6.6 0 0 1-.6-.6V5.4Z" />
                      </svg>
                    </span>
                    Maintenance & Warranties

                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/termination' >
                    <span className="icon me-2">
                      <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.08 17.4a.6.6 0 0 0 .6.6h9.6a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 0-.6-.6h-9.6a.6.6 0 0 0-.6.6V9a.6.6 0 1 1-1.2 0V6.6a1.8 1.8 0 0 1 1.8-1.8h9.6a1.8 1.8 0 0 1 1.8 1.8v10.8a1.8 1.8 0 0 1-1.8 1.8h-9.6a1.8 1.8 0 0 1-1.8-1.8V15a.6.6 0 1 1 1.2 0v2.4Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M3.054 12.424a.6.6 0 0 1 0-.85l3.6-3.6a.6.6 0 1 1 .85.85L4.927 11.4H15.48a.6.6 0 1 1 0 1.2H4.927l2.577 2.575a.6.6 0 1 1-.85.85l-3.6-3.6Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Termination

                  </NavLink>
                </li>

              </ul>
            </div>
          </li>

          {/* ROLE MANAGEMENT */}

          <li className='nav-item '>
            <NavLink className=" nav-link box-shadow" to='/roles' >
              <span className="icon me-2">
                <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                </svg>
              </span>
              Roles

            </NavLink>
          </li>


          <li className='nav-item '>
            <NavLink className=" nav-link box-shadow" to='/userform' >
              <span className="icon me-2">
                <svg width={19} height={19} fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                </svg>
              </span>
              Create User

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

          {/* Category Manager */}


          <li className='nav-item '>
            <div class="dropdown ">
              <NavLink className="nav-link box-shadow" to='/category' data-bs-toggle="dropdown" aria-expanded="false">
                <span className="icon me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="m6.76 6l.45.89L7.76 8H12v5H4V6h2.76m.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55zm15.38 2l.45.89l.55 1.11H28v5h-8V6h2.76m.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4l-.72-1.45a1 1 0 0 0-.9-.55zM6.76 19l.45.89l.55 1.11H12v5H4v-7h2.76m.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55zm15.38 2l.45.89l.55 1.11H28v5h-8v-7h2.76m.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-4l-.72-1.45a1 1 0 0 0-.9-.55z" /></svg>
                </span>
                Categories
                <span className="float-end chevron">
                  <svg width={25} height={25} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </span>

              </NavLink>
              <ul class="dropdown-menu ">
                <li>
                  <NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/category' >
                    <span className="icon me-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4z" /><circle cx="17" cy="17" r="3" /></g></svg>
                    </span>
                    Main Category

                  </NavLink></li>
                <li><NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow mb-3 ms-3" to='/subcategory' >
                  <span className="icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M29 10h-5v2h5v6h-7v2h3v2.142a4 4 0 1 0 2 0V20h2a2.003 2.003 0 0 0 2-2v-6a2.002 2.002 0 0 0-2-2zm-1 16a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2zM19 6h-5v2h5v6h-7v2h3v6.142a4 4 0 1 0 2 0V16h2a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2zm-1 20a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2zM9 2H3a2.002 2.002 0 0 0-2 2v6a2.002 2.002 0 0 0 2 2h2v10.142a4 4 0 1 0 2 0V12h2a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zM8 26a2 2 0 1 1-2-2a2.002 2.002 0 0 1 2 2zM3 10V4h6l.002 6z" /></svg>
                  </span>
                  Sub Category

                </NavLink></li>
                <li><NavLink style={{ width: '90%' }} className="dropdown-item nav-link box-shadow ms-3" to='/featuredcategory' >
                  <span className="icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M29 10h-5v2h5v6h-7v2h3v2.142a4 4 0 1 0 2 0V20h2a2.003 2.003 0 0 0 2-2v-6a2.002 2.002 0 0 0-2-2zm-1 16a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2zM19 6h-5v2h5v6h-7v2h3v6.142a4 4 0 1 0 2 0V16h2a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2zm-1 20a2 2 0 1 1-2-2a2.003 2.003 0 0 1 2 2zM9 2H3a2.002 2.002 0 0 0-2 2v6a2.002 2.002 0 0 0 2 2h2v10.142a4 4 0 1 0 2 0V12h2a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2zM8 26a2 2 0 1 1-2-2a2.002 2.002 0 0 1 2 2zM3 10V4h6l.002 6z" /></svg>
                  </span>
                  Featured Category

                </NavLink></li>

              </ul>
            </div>
          </li>
          {/* <li className='nav-item '>
            <NavLink className='nav-link box-shadow ' to='/vendors'>
              <span className="icon me-2">
                <svg width={19} height={19} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1ZM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5Zm15-1a1 1 0 0 1-2 0v-5h2v5Z" />
                  <path d="M6 7h8v2H6V7Zm0 4h8v2H6v-2Zm5 4h3v2h-3v-2Z" />
                </svg>
              </span>
              Vendors
            </NavLink>
          </li> */}
          <li className='nav-item '>
            <button onClick={signOut} className='nav-link box-shadow  text-start logout-nav' >
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

        </ul>
      </nav>





      {/* Responsive */}
      <div className="container-fluid bg d-lg-none d-md-block d-block">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                {/* <Link to='/dashboard'> */}
                  <img src={ll} height={"50px"} width={"70px"} alt="" srcset="" />

                {/* </Link> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                  <ul className="navbar-nav navul mb-2 mb-lg-0 ml-lg-5 ml-md-0 ml-0 mt-4" style={{ height: "150px", overflowY: "auto" }}>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/dashboard"><i className="fa fa-tachometer" />Dashboard</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/createdailysales"><i class="fas fa-weight"></i>Create Daily Sales</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/dailysales"><i class="fas fa-weight"></i>Daily Sales Report</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/alldailysales"><i class="fas fa-weight"></i>All Sales Report</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/Expense"><i class="far fa-window-maximize"></i>Expense</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/createproduct"><i class="fab fa-product-hunt"></i>Create Product</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/warehouse"><i class="fas fa-warehouse"></i>Warehouse</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/termsandconditions"><i class="fas fa-funnel-dollar"></i>Terms And Conditions</Link> */}
                    </li>
                    {/* <li className="nav-item dropdown mr-2">
                                  <Link style={{color:"black !important"}} to="/distribution"><i className="fa fa-cog" />Distribution</Link>
                                  </li> */}
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/recovery"><i class="fas fa-recycle"></i>Recovery</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/bouncecheck"><i class="fad fa-money-check-edit"></i>Bounce Check Payment</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/roles"><i class="fas fa-genderless"></i>Roles</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link style={{ color: "black !important" }} to="/employees"><i class="fas fa-users"></i>Employees</Link> */}
                    </li>
                    <li className="nav-item dropdown mr-2">
                      {/* <Link onClick={() => signOut()}><i class="fas fa-user"></i>Sign Out</Link> */}
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
export default SideBar