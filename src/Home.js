import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home--container">
        <img
          className="home--image"
          src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg"
          alt=""
        />

        <div className="home--row">
          <Product
            id="01"
            title="See U in C by Ali Karim Sayed (Author)"
            price={4450}
            image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
          />
          <Product
            id="02"
            title="Vudy Engineered Wood Wall Shelves"
            price={1350}
            image="https://m.media-amazon.com/images/I/81xH6f+l88L._SL1500_.jpg"
          />
          <Product
            id="03"
            title="OnePlus 9R 5G (Lake Blue, 8GB RAM, 128GB Storage)"
            price={39499}
            image="https://m.media-amazon.com/images/I/61IwksZ-DGL._SL1500_.jpg"
          />
        </div>
        <div className="home--row">
        <Product 
           id="04"
           title="2020 Apple MacBook Pro (13.3-inch"
           price={79999}
           image="https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"
          />
          <Product 
           id="05"
           title="AmazonBasics 80cm (32 inch)"
           price={16599}
           image="https://m.media-amazon.com/images/I/71m0Nn4vqOL._SL1254_.jpg"
          />
        </div>
        <div className="home--row">
        <Product 
           id="06"
           title="
           Bose Noise Cancelling Wireless Bluetooth Headphones 700"
           price={34599}
           image="https://m.media-amazon.com/images/I/61+bXoMHXQL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
