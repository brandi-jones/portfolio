import React from 'react'

const Skills = (props) => {
    return (
        <div id="Skills">
            <h2>Skills</h2>
            {props.data.skills.map(skill => (
                <p>{skill}</p>
            ))}

        </div>
    );
}

export default Skills