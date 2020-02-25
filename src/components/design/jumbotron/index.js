
import React from 'react';
import jumbotronImage from ' '


const Jumbotron = () => {
    return(
        <div className ="row">
            <div className="col-12">
                <div className ="jumbotron text-center text-light " style={styles.behind}>
                    <h1 className ="display-4 mt-5 p-5"><strong style={styles.text}>Google Books Search</strong></h1>
                    <p className ="lead">Search for and Save Books of Interest</p>
                </div>
            </div>
        </div>
    )
};

const styles = {
    behind: {
        backgroundImage: `url(${jumbotronImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: '100%',
        boxShadow: '0 8px 6px -6px black'
    },
    text: {
        fontSize: '1.8em'
    }
};

export default Jumbotron;