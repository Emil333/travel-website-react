import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Image9 from '../images/img-9.jpg'
import Image2 from '../images/img-2.jpg'
import Image3 from '../images/img-3.jpg'
import Image4 from '../images/img-4.jpg'
import Image8 from '../images/img-8.jpg'

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
                        <CardItem
                            src={Image2}
                            text="Travel through the islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        ></CardItem>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={Image3}
                            text="Set sail in the Atlantic ocean visiting Unchartered waters"
                            label="Mystery"
                            path="/services"
                        ></CardItem>
                        <CardItem
                            src={Image4}
                            text="Experience football on top of the Himalayan Mountains"
                            label="Adventure"
                            path="/products"
                        ></CardItem>
                        <CardItem
                            src={Image8}
                            text="Ride through the Sahara desert on a guided Camel tour"
                            label="Adrenaline"
                            path="/sign-up"
                        ></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
