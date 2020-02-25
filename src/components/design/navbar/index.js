import React from 'react';

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={styles.navbar}>
            <span className="navbar-brand mb-0 h1" style={styles.text}>Google Books</span>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* ADD PROPER HREF LINKS WHEN SAVED AND SEARCH PAGES ARE BUILT */}
                    <a class="nav-item nav-link" href="/" style={styles.text}>Saved</a>
                    <a class="nav-item nav-link" href="/" style={styles.text}>Search</a>
                </div>
        </nav> 
    )
};

const styles = {
    navbar: {
        boxShadow: '0 -8px 6px -6px black'
    },
    text: {
        fontFamily:'Noto Sans HK',
        color: 'Black',
    }
};

export default Navbar;