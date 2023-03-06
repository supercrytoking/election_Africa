import React, {useState} from "react";
import PublicNavbar from "../components/PublicNavbar";
import './page.scss';

function PublicView() {
    return(
        <div className="container-style">
            <div className="container-fluid">
                <PublicNavbar/>
            </div>
        </div>
    );
}

export default PublicView;