import React from "react";


function Header() {
    return (
        <div>
    <h2>{process.env.REACT_APP_WEBSITE_NAME}</h2>
    <img src={process.env.PUBLIC_URL + './koding.jpg'} alt="logo" />
    </div>
    );
}

export default Header;