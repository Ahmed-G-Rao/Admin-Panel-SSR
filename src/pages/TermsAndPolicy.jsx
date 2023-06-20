import React from "react"
import SideBar from "../components/sidebar/Sidebar"
import AllTermsAndPolicy from "../components/AllTermsAndPolicy/AllTermsAndPolicy"


const TermsAndPolicy = () => {
    return (
        <>
            <div className="d-lg-flex d-md-none d-none">
                <SideBar />
                <AllTermsAndPolicy />
            </div>
            <div className="d-lg-none d-md-block d-block">
                <SideBar />
                <AllTermsAndPolicy />
            </div>
        </>
    )
}
export default TermsAndPolicy