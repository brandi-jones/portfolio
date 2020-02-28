import React from 'react';

const AboutMe = (props) => {
    return (
    <div id="AboutMe">
        <h1>Brandi Jones</h1>
        <p>{props.data.aboutme}</p>

    </div>
    );
    
}

export default AboutMe
