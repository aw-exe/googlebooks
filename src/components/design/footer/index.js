import React from 'react';

const Footer = () => {
    return(
        <div className="footer" style={styles.footer}> 
            <div className="container">
                <div className="text-center" style={styles.text}>Copyright</div>
            </div>
        </div>
    )
};

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: '0 -8px 6px -6px black'
    },
    text : {
        fontSize: '15px',
        fontFamily:'Noto Sans HK'
    }
};

export default Footer;