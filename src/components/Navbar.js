import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar-expand-lg fixed-top">
      <div className="contain">
          <img className="logo"src="/images/logo.png" alt="Logo"/>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="link active" href="/">Acheter</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/page1">Louer</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/page2">Vendre</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/">Neuf</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/">Luxe</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/">Annuaire</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/">Actualités</a>
            </li>
          </ul>
        </div>
        <div className='like-container'>
            <a href="/"><img className="like"src="/images/love-corail.svg" alt="Logo"/></a>
            <p>Ma sélection</p>
        </div>
        
        <button className="button1">Estimer mon bien</button>
      </div>
    </nav>
  );
};

export default Navbar;