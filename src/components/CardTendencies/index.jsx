import React from 'react';
import Tendencies1 from '../../assets/img/tendencies/slide1.webp';
import Tendencies2 from '../../assets/img/tendencies/slide2.jpg';
import './style.css';

const CardTendencies = () => {
  return (
    <section className="sliceLeft">
      <div className="tendencies-card" style={{ backgroundColor: "#eee" }} >
        <div className="tendencies-card-img-ctn">
          <img className="tendencies-card-img" src={Tendencies1} alt="image" />
        </div>
        <div className="tendencies-card-text-ctn">
          <h2 className="tendencies-card-text-title">Heading</h2>
          <p className="tendencies-card-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed labore atque unde nobis expedita adipisci nostrum quaerat numquam ut aspernatur, commodi doloremque voluptatibus accusamus inventore iusto vel eaque officiis veritatis vero?</p>
          <button className="btn btn-primary tendencies-card-text-btn">Share</button>
        </div>
      </div>
      <div className="tendencies-card" style={{ backgroundColor: "#fff" }} >
        <div className="tendencies-card-img-ctn">
          <img className="tendencies-card-img" src={Tendencies2} alt="image" />
        </div>
        <div className="tendencies-card-text-ctn">
          <h2 className="tendencies-card-text-title">Heading</h2>
          <p className="tendencies-card-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed labore atque unde nobis expedita adipisci nostrum quaerat numquam ut aspernatur, commodi doloremque voluptatibus accusamus inventore iusto vel eaque officiis veritatis vero?</p>
          <button className="btn btn-primary tendencies-card-text-btn">Share</button>
        </div>
      </div>
      <div className="tendencies-card" style={{ backgroundColor: "#eee" }} >
        <div className="tendencies-card-img-ctn">
          <img className="tendencies-card-img" src={Tendencies1} alt="image" />
        </div>
        <div className="tendencies-card-text-ctn">
          <h2 className="tendencies-card-text-title">Heading</h2>
          <p className="tendencies-card-text-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem sed labore atque unde nobis expedita adipisci nostrum quaerat numquam ut aspernatur, commodi doloremque voluptatibus accusamus inventore iusto vel eaque officiis veritatis vero?</p>
          <button className="btn btn-primary tendencies-card-text-btn">Share</button>
        </div>
      </div>
    </section>
  )
};

export default CardTendencies;
