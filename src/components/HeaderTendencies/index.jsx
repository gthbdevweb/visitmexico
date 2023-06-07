import React from 'react';
import './style.css';

const HeaderTendencies = () => {
  return (
    <section className="tendencies-header-ctn">
      <h1 className="tendencies-header-text-title">Headline</h1>
      <h3 className="tendecies-header-text-subtitle">Subhead</h3>
      <p className="tendencies-header-text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form className="tendencies-header-form-ctn">
        <div className="form-group tendencies-header-form">
          <label for="tendenciesHeaderSearch">tendencies search</label>
          <input type="email" className="form-control" id="tendenciesHeaderSearch" aria-describedby="tendenciesHelp" placeholder="Some text..." />
        </div>
        <button type="submit" className="btn btn-primary tendencies-header-btn">Submit</button>
      </form>
      <div className="tendencies-header-back">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/EjNe5EJ1cAQ?rel=0;&autoplay=1" title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  )
};

export default HeaderTendencies;
