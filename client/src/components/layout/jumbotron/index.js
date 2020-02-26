import React from 'react';
import Books from '../../../assets/images/Books.jpg'

const Jumbotron = () => {
    return(
        <div className="row">
            <div className="col-11" style={styles.position}>
                <div className="jumbotron jumbotron-fluid" style={styles.behind}>
                    <div className="container">
                        <h1 className="display-4 mt-4 p-4" style={styles.text}>Google Books Search</h1>
                        <h3 style={styles.text}>Search for and Save Books of Interest</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

const styles = {
    position: {
        marginLeft: '4.5%',
    },
    behind: {
        backgroundImage: `url(${Books})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: '100%',
        boxShadow: '0 8px 6px -6px black'
    },
    text: {
        fontFamily:'Noto Sans HK',
        color: 'Black',
    }
};

export default Jumbotron;