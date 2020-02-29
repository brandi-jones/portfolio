import React, {useState} from 'react'

import {Card, CardContent, CardMedia, Dialog, Slide, Grow, Button} from '@material-ui/core'

const Portfolio = (props) => {

    //set up state for "open" property for Dialog. When Open is true, dialog pops up.
    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <>
        <div id="Portfolio">

            <h2>Portfolio</h2>
            
            <div className="PortfolioItemsContainer">
            {props.data.portfolio.map(item => (
                <>
                    <Card className="PortfolioPiece" onClick={handleClickOpen}>
                        <CardMedia 
                            className="cardImage"
                            image={require(`../img/${item.img}`)}
                        />
                        <Button className="PortfolioButton">See More</Button>
                        
                    </Card>

                    
                   

                    {/* setup Dialog piece */}
                    <Dialog
                        open={isOpen}
                        TransitionComponent={Grow}
                        keepMounted
                        onClose={handleClose}
                        maxWidth= 'sm'
                        className="dialog"
                    >
                        <Card className="DialogPiece">
                            <CardMedia 
                                className="cardImage"
                                image={require(`../img/${item.img}`)}
                            />
                            <CardContent>
                                <a href={item.link}>{item.name}</a>
                                <p>{item.description}</p>
                            </CardContent>
                        </Card>

                    </Dialog>
                    
                </>
            ))}

            </div>

        </div>
        </>
    );
}

export default Portfolio