import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Image9 from '../images/img-9.jpg'

function Cards() {

    return (
        <div className='cards'>
            <h1>Check out these epic destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={Image9}
                            text="Explore the hidden waterfall deep inside the amazon jungle"
                            label="Adventure"
                            path="/services"
                        ></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
