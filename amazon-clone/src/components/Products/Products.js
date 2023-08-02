import React from "react";
import "./Products.css";
import Product from "../Product";

const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product
        id="1"
        title="Seagate Portable 2TB External Hard Drive Portable HDD - USB 3.0 for
          PC, MAC, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)"
        image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320.jpg"
        rating={4}
        price={59.99}     
        />
      <Product
        id="2"
        title="Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB keys = Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned"
        image="https://images-na.ssl-images-amazon.com/images/I/61WgmLgwuQL._AC_SX300_SY300_QL70_FMwebp_.jpg"
        rating={5}
        price={34.99}      
        />
      
    </div>
    <div className="products_row">
    <Product
        id="123"
        title="AMD Ryzen 5 5600x 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
        image="https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL320.jpg"
        rating={5}
        price={288.99}
      />
    <Product
        id="3"
        title="Soundance Laptop Stand, Aluminium Computer Riser, Ergonomic Laptops Elevator for Desk, Metal Holder Compatible with 10 to 15.6 Inches Notebook computer, Silver"
        image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_UL320_.jpg"
        rating={2}
        price={27.99}      
        />
      <Product
        id="4"
        title="H390 Wired Headset, Stereo Headphones with Noise-Cancelling Microphone"
        image="https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_UL320_.jpg"
        rating= {5}
        price={24.99}      
        />
    </div>
    <div className="products_row">
      <Product
        id="6"
        title="Sceptre 24 inch Professional Thin 75Hz 1080p LEd Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E24BW-1920#r Series)"
        image="https://images-na.ssl-images-amazon.com/images/I/71rXSVqET9L._AC_SX300_SY300_QL70_FMwebp_.jpg"
        rating={3}
        price={193.4}
      />
      
    </div>
    </>
    
  );
};
export default Products;
