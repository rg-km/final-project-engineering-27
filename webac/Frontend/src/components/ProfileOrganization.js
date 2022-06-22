import React from "react";
import NavigationOrganization from "./NavigationOrganization";
import Footer from "./Footer";
import './ProfileOrganization.css';

const ProfileOrganization = () => {
    return(
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationOrganization />
        </div>
        {/* End Navigation */}

        {/* Start Content */}
                
        {/* End Content */}

        {/* Start Footer */}
        <div className="footer">
            <Footer />
        </div>
        {/* End Footer */}
        </>        
    )
}
export default ProfileOrganization;