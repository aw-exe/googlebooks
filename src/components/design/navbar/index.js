import React from 'react';

const Navbar = () => {
    return(
        <div className="row"> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Google Books</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Saved</a>
                        </li>
                    </ul>
                </div>
            </nav> 
        </div> 
    )
};

//Style Later
// const styles = {
//     navigation: {
    
//     }
// };

export default Navbar;