import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import './Carousel1.scss'; // Créez ce fichier pour ajouter des styles personnalisés si nécessaire


function App() {

  const images = [
        
    'images/1.jpg',
    'images/11.jpg',
    'images/2.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',     
    'images/9.jpg',
    // ... ajoutez autant d'URL d'images que nécessaire
  ];

    const settings = {
      className: "center",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

  return (
    <div className="App">
      <Navbar />
      <br/>
      <div className="container">

        {/* bouton retour */}

          <div className='jump-back'>
        <div className='jb'>
            <img className="jb-1" src="/images/long-arrow.svg" alt="Logo"/>
            &nbsp;
            Retour à la liste
        </div>
        <div>
            <div className='jump-back-1'>
              <div>
                <img className="" src="/images/chevron-left-gray.svg" alt="Logo"/>
                Retour à la liste &nbsp;&nbsp;
              </div>
              <div>
                Retour à la liste
                <img className="" src="/images/chevron-right-gray.svg" alt="Logo"/>
              </div>    
        </div>   

    </div>
          </div>

        {/* fin bouton retour */}


      <div className='container'>
          

      {/* Deuxieme section */}
      <div className='first-section'>
        <div className='items-section'>
        {/* Bloc 1 */}
        <div className='items-section-1'>
          <div className='littleTexte'>
              Studio
          </div>
          {/* Texte intro */}
          <div className='first-blox-section'>
            <div className='textBold'>
            1 pièce • 10m²
            </div>
            <div className='textBold'>
            105 000 €
            </div>
          </div>
          <div className='first-blox-section'>
          <div>
          PARIS 16E (75016)
          </div>
            <a href='/' className='red-link'>Vous demenagez?</a>
          </div>

        </div>

        {/* Carousel */}
        <div>
          <br/>
            <Carousel images={images} />
            <br/>
        </div>

        {/* Description */}
        <div>
          <div>
            <h4> Description du bien </h4>
            <hr className='barre'/>
          </div>
        </div>

        <div>
          <button className='buttonPrst'>Chauffage: <span>électrique</span></button>
          <button className='buttonPrst'>Nombre d'étages du bâtiment:<span>7</span></button>
          <button className='buttonPrst'>Etage du bien:<span>7e</span></button>
          <button className='buttonPrst'>Gardien</button>
          <button className='buttonPrst'>Nombre de salle d'eau: <span>1 Salle d'eau</span></button>
        </div>

        <div>
          <p>
          <br/>
          Casavo vous propose à la vente ce studio d'une pièce de 9.7 m² Surface habitable: 10,11 m² localisé Rue Mirabeau, Paris. Ce bien se situe dans un immeuble de 1925, situé au 7ème étage sans ascenseur. Il se compose d'une pièce de vie, de 2 WC sur palier. Le studio est libre de toute occupation. Charges de copropriété : 20 euros par mois. Taxe foncière : 186 euros par an Ce bien est commercialisé par Casavo. Intéressé par ce bien ? Plus d'informations sur le site de Casavo. Prix hors frais notariés, d'enregistrement et de publicité foncière.
          </p>
        </div>

        <div>
          <button className='buttonCall'><img src='images/pin-map.svg' alt='logo'/> Obtenir l'adresse</button>
          <button className='buttonCall'><img src='images/phone.svg' alt='logo'/>Etre rappelé</button>
          <button className='buttonCall'><img src='images/users.svg' alt='logo'/>Demande une visite</button>
        </div>
        <br/>
        <h4>Diagnostics énergétiques</h4>
        <div className='first-blox-section'>
          <p className='textMedium'>
            Diagnostic de performance<br/> énergétique (DPE)
          </p>
          <p className='textMedium'>
          Indice d'émission de gaz à effet de<br/> serre (GES)
          </p>
        </div>
        {/* forme jauge */}
        <div className='jauge'>
          <div className='jauge-item'>
          <div className='carré-1'></div>
          <div className='carré-2'></div>
          <div className='carré-3'></div>
          <div className='carré-4'></div>
          <div className='carré-5'></div>
          <div className='carré-6'></div>
          <div className='carré-7'><p className='ptx'>G</p></div>
          </div>
          <div className='jauge-item-1' >
          <div className='carré-8'></div>
          <div className='carré-9'></div>
          <div className='carré-10'><p className='ptx'>C</p></div>
          <div className='carré-11'></div>
          <div className='carré-12'></div>
          <div className='carré-13'></div>
          <div className='carré-14'></div>
          </div>
        </div>
        <p><br/>Logement à consommation énergétique excessive.</p>
        <h3> Géorisques </h3>
        <p>Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques https://www.georisques.gouv.fr/.
        </p>
        <h3>A propos du prix</h3>
        <ul>
          <li> Prix du bien : 105 000 € hors frais notariés, d'enregistrement et de publicité foncière</li>
        </ul>
        <h6>Informations sur la copropriété</h6>
        <ul>
          <li>  
          N° du lot : NC
          </li>
          <li>
          Nombre de lots : 15
          </li>
          <li>
          Charges prévisionnelles : 360 € / an
          </li>
          <li>
          Procédure en cours : Non
          </li>
          <li>
          Mesure(s) en cours : NC
          </li>
        </ul>
        <br/>
        <br/>
        <div>
          <p>Mis en ligne: 11/04/2023   |   Mis à jour: 01/11/2023</p>
          <p>Référence : 20544</p>
        </div>

        {/* Formulaire pour calcul */}
        <div>
          <h6>Combien me coûtera ce bien chaque mois ?</h6>
          <hr/>
        </div>
        {/* Fin Formulaire */}

        {/* Bloc 2 */}
        </div>

        <div className='items-section'>
          <p> Contacter ce professionnel</p>
        </div>
      </div>

      {/* Fin deuxieme section */}

      {/* Troisieme section */}
      <div>
         <div className='textBlue'>
          Contacter ce professionnel
         </div>
         <div className='cardContainer'>
          <div>
            <div className='item-cardContainer'>
              <img className="imgCard" src='images/CASAVO.jpg' alt='logo'/>
              <div> CASAVO </div>
            </div>
            

          </div>
         </div>
      </div>
      {/* Fin troisieme section */}

      <br/>
      <br/>
      <div className='avantFooter'>
          <h5>Autres biens aux alentours</h5>
      </div>

      {/* Slider end */}
      <div>
      <div >
        <br/>
        <Slider {...settings}>
          <div className='sliderClass'>
            <img src='images/9.jpg' alt='logo'/>
            <div className='textSlider'>
              Appartements
              <br/>
              15 000 €
              <br/>
              1 pièce• 10m²
              <br/>
              PARIS 16E (75016)
            </div>
          </div>
          <div className='sliderClass'>
            <img src='images/10.jpg' alt='logo'/>
            <div className='textSlider'>
              Appartements
              <br/>
              95 000 €
              <br/>
              1 pièce• 10m²
              <br/>
              PARIS 16E (75016)
            </div>
          </div>
          <div className='sliderClass'>
            <img src='images/11.jpg' alt='logo'/>
            <div className='textSlider'>
              Appartements
              <br/>
              85 000 €
              <br/>
              1 pièce• 10m²
              <br/>
              PARIS 16E (75016)
            </div>
          </div>
          <div className='sliderClass'>
            <img src='images/11.jpg' alt='logo'/>
            <div className='textSlider'>
              Appartements
              <br/>
              10 000 €
              <br/>
              1 pièce• 10m²
              <br/>
              PARIS 16E (75016)
            </div>
          </div>
          <div className='sliderClass'>
            <img src='images/10.jpg' alt='logo'/>
            <div className='textSlider'>
              Appartements
              <br/>
              58 000 €
              <br/>
              1 pièce• 10m²
              <br/>
              PARIS 16E (75016)
            </div>
          </div>
          <div className='sliderClass'>
            <img src='images/9.jpg' alt='logo'/>
            <div className='textSlider'>
              Appartements
              <br/>
              105 000 €
              <br/>
              1 pièce• 10m²
              <br/>
              PARIS 16E (75016)
            </div>
          </div>
        </Slider>
        <br/>
      </div>
      </div>
      {/* Fin Slider End */}
      



      <div className='avantFooter'>
        <h5>Recherche par commodités</h5>
        <p>Appartements à Paris 16e : &nbsp;
        <a href='/'><button className='buttonEnd'> Passoire thermique (461)</button></a>
        </p>
      </div>

      </div>

      {/* Retour */}
      <div className='jump-back'>
        <div className='jb'>
            <img className="jb-1" src="/images/long-arrow.svg" alt="Logo"/>
            &nbsp;
            Retour à la liste
        </div>
        <div>
            <div className='jump-back-1'>
              <div>
                <img className="" src="/images/chevron-left-gray.svg" alt="Logo"/>
                retour à la liste &nbsp;&nbsp;
              </div>
              <div>
                retour à la liste
                <img className="" src="/images/chevron-right-gray.svg" alt="Logo"/>
              </div>
                
                
                 
        </div>   

    </div>
      </div>
      {/* fin retour */}

      {/* Footer */}
      </div>
      <div className="before-footer">
                <p className="">
                    Immobilier
                    <img src="/images/chevron-right-gray.svg" alt="Logo"/>
                    <a className="link-before" href="/">Ile de France</a>
                    <img src="/images/chevron-right-gray.svg" alt="Logo"/>
                    <a className="link-before" href="/">Paris (75) </a>
                    <img src="/images/chevron-right-gray.svg" alt="Logo"/>
                    <a className="link-before" href="/">Paris 16e </a>
                    <img src="/images/chevron-right-gray.svg" alt="Logo"/>
                    <a className="link-before" href="/">Studio à vendre 10m² 105 000€</a>
                </p>
      </div>
      <Footer/>
      {/* Footer */}
    </div>
  );
}

export default App;