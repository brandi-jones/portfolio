import React from 'react'

const Portfolio = (props) => {
    return (
        <div id="Portfolio">
            <h2>Portfolio</h2>
            {props.data.portfolio.map(item => (
                <div className="PortfolioPiece">
                    <a href={item.link}>{item.name}</a>
                    <p>{item.description}</p>
                </div>
            ))}

        </div>
    );
}

export default Portfolio