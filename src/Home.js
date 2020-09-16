import React from 'react';
import "./Home.css";
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
            <div className="home__row">
                <Product
                    id="1"
                    title="Macbook Pro (13 inch)"
                    price={1299.99}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-202005?wid=892&hei=820&&qlt=80&.v=1587460552755"
                />

                <Product
                    id="2"
                    title="Headphone"
                    price={99.99}
                    rating={4}
                    image="https://techcrunch.com/wp-content/uploads/2011/03/hd515_hires-620x620.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Bluetooth Speaker"
                    price={159.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81BPiLQ3wML._SL1500_.jpg"
                />

                <Product
                    id="4"
                    title="Sneakers"
                    price={229.99}
                    rating={5}
                    image="https://www.timeeo.com/wp-content/uploads/2020/01/Spring-Men-Shoes-Rubber-Shoes-Sneakers-Men-s-Running-Shoes-Wear-Resistant-Casual-Shoes-Men-s-600x600.jpg"
                />

                <Product
                    id="5"
                    title="IPad Pro"
                    price={799}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61g6Z7viX5L._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="6"
                    title="Samsung Ultra Wide Monitor"
                    price={479}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
                />
            </div>
        </div>
    );
}

export default Home
