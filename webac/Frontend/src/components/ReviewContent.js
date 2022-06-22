import React from "react";
import NavigationPeserta from "./NavigationPeserta";
import Footer from "./Footer";
import './ReviewContent.css';

const ReviewContent = () => {
    return(
        <>
        {/* Start Navigation */}
        <div className="navigation">
            <NavigationPeserta />
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
export default ReviewContent;