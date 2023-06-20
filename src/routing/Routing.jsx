import React, { useState, useEffect } from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom';
import TermsAndPolicy from "../pages/TermsAndPolicy";
import Privacy from "../pages/Privacy";
import User from "../pages/User";
import Products from "../pages/Products";
import Error from "../pages/Error"
import Orders from "../pages/Orders";
import Home from '../pages/Home'
import SubUserLogin from "../components/SubUserLogin/SubUserLogin";
const config = require('../helpers/config.json')

const Routing = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {
                       
                            <>
                            <Route path='/' element={<SubUserLogin />} />
                            {/* <Route path='/' element={<TermsAndPolicy/>} /> */}
                                        <Route path='/termsandconditions' element={<TermsAndPolicy />} />
                                        <Route path='/privacy' element={<Privacy />} />
                                       
                                        <Route path='/orders' element={<Orders />} />
                                       
                                        <Route path='/dashboard' element={<Home />} />
                                        <Route path="/*" element={<Error />} />
                                           
                                            <Route path="/*" element={<Error />} />
                                            <Route path='/userform' element={<User />} />
                                            <Route path='/products' element={<Products />} />
                                            <Route path="/*" element={<Error />} />
                                           
                                            <Route path="/*" element={<Error />} />
                       
                            </>
                    }
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;

