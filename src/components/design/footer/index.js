import React from 'react';

const Footer = () => {
    return(
        <footer className="mt-5" style={styles.footer}>
            <div className="footer-copyright text-center text-light py-2">
                <a href="/" style={styles.text}>Google Books</a> 
                    Developed by: 
                <a href="https://github.com/aw-exe" style={styles.text}> 
                    Ashton Wetsel</a>
                </div>
        </footer>
    )
};

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#30485e',
        boxShadow: '0 -8px 6px -6px black'
    },
    text : {
        fontFamily: 'Fredoka One', 
        color: '#2E8B57',
        padding: '10px',
    }
};

export default Footer;