import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TermsAndPolicy from "../pages/TermsAndPolicy";
import Privacy from "../pages/Privacy";
import HomePage from "../pages/Home";
import Roles from "../pages/Roles";
import AboutApp from "../pages/AboutApp";
import LoginFrom from "../pages/Loginfrom";
import TermLength from "../pages/TermLength";
import Rental from "../pages/Rental";
import UsagePolicy from "../pages/UsagePolicy";
import Insurance from "../pages/Insurance";
import Transport from "../pages/Transport";
import Maintenance from "../pages/Maintenance";
import Termination from "../pages/Termination";
import User from "../pages/User";
import Products from "../pages/Products";
import Category from "../pages/Category";
import SubCategory from "../pages/SubCategory";
import Featuredcategory from "../pages/Featuredcategory";

function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    {
                        localStorage.getItem("token") === null ?
                            <Route path="/" exact component={LoginFrom} />
                            :
                            <>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/termsandconditions" exact component={TermsAndPolicy} />
                                <Route path="/privacy" exact component={Privacy} />
                                <Route path="/aboutapp" exact component={AboutApp} />
                                <Route path="/termlength" exact component={TermLength} />
                                <Route path="/rentalagreement" exact component={Rental} />
                                <Route path="/usagepolicy" exact component={UsagePolicy} />
                                <Route path="/insurance" exact component={Insurance} />
                                <Route path="/transport" exact component={Transport} />
                                <Route path="/maintenance" exact component={Maintenance} />
                                <Route path="/termination" exact component={Termination} />
                                <Route path="/userform" exact component={User} />
                                <Route path="/products" exact component={Products} />
                                <Route path="/category" exact component={Category} />
                                <Route path="/subcategory" exact component={SubCategory} />
                                <Route path="/featuredcategory" exact component={Featuredcategory} />
                                <Route path="/roles" exact component={Roles} />
                            </>
                    }

                </Switch>
            </Router>
        </div>
    );
}

export default Routing;
