import React from 'react';
import '../App.css';
function NavbarComponent(){
    const firstName = "Rachitha";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    const styles = {
        fontSize : 36
    }
    if(hours < 12){
        timeOfDay = "Morning";
        styles.color = 'red'
        }
    else if(hours >= 12 && hours < 17){
        timeOfDay = "Afternoon";
        styles.color = 'yellow'
        }
    else{
        timeOfDay = "Night";
        styles.color = 'black';
        }

    return(
        <div>
            <h5 className="header">Navbar component</h5>
            <h1 style={styles}>Hello {firstName}. Good {timeOfDay}!</h1>
        </div>
    );
}

export default NavbarComponent