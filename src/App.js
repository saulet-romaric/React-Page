import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
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
                retour à la liste &nbsp;&nbsp;
              </div>
              <div>
                retour à la liste
                <img className="" src="/images/chevron-right-gray.svg" alt="Logo"/>
              </div>
                
                
                 
        </div>   

    </div>
      </div>

        {/* fin bouton retour */}

      <div>
          Studio
      </div>

      {/* Deuxieme section */}
      <div>
        {/* Bloc 1 */}
        <div>

          {/* Texte intro */}
          <div>
            <p>
            1 pièce • 10m²
            </p>
            <p>
            PARIS 16E (75016)
            </p>
          </div>
          <div>
          <p>
          105 000 €
          </p>
          <p>       
          Estimez votre déménagement
          </p>
          </div>

        </div>

        {/* Carousel */}
        <div>
            
        </div>

        {/* Description */}
        <div>
          <div>
            <h6> Description du bien </h6>
            <hr/>
          </div>
        </div>

        <div>
          <button>Chauffage: électrique</button>
          <button>Nombre d'étages du bâtiment:7</button>
          <button>Etage du bien:7e</button>
          <button>Gardien</button>
          <button>Nombre de salle d'eau:1 Salle d'eau</button>
        </div>

        <div>
          <p>
          Casavo vous propose à la vente ce studio d'une pièce de 9.7 m² Surface habitable: 10,11 m² localisé Rue Mirabeau, Paris. Ce bien se situe dans un immeuble de 1925, situé au 7ème étage sans ascenseur. Il se compose d'une pièce de vie, de 2 WC sur palier. Le studio est libre de toute occupation. Charges de copropriété : 20 euros par mois. Taxe foncière : 186 euros par an Ce bien est commercialisé par Casavo. Intéressé par ce bien ? Plus d'informations sur le site de Casavo. Prix hors frais notariés, d'enregistrement et de publicité foncière.
          </p>
        </div>

        <div>
          <button><img src='/' alt='logo'/> Obtenir l'adresse</button>
          <button><img src='/' alt='logo'/>Etre rappelé</button>
          <button><img src='/' alt='logo'/>Demande une visite</button>
        </div>
        <h6>Diagnostics énergétiques</h6>
        <div>
          <p>
            Diagnostic de performance énergétique (DPE)
          </p>
          <p>
          Indice d'émission de gaz à effet de serre (GES)
          </p>
        </div>
        {/* forme jauge */}
        <div>

        </div>
        <p>Logement à consommation énergétique excessive.</p>
        <h6> Géorisques </h6>
        <p>Les informations sur les risques auxquels ce bien est exposé sont disponibles sur le site Géorisques https://www.georisques.gouv.fr/.
        </p>
        <h6>A propos du prix</h6>
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
        <div>
          <p> Contacter ce professionnel</p>
        </div>
      </div>

      {/* Fin deuxieme section */}

      {/* Troisieme section */}
      <div>

      </div>
      {/* Fin troisieme section */}

      <h5>Autres biens aux alentours</h5>

      {/* Slider end */}
      <div>

      </div>
      {/* Fin Slider End */}
      <h6>Recherche par commodités</h6>
      <div>
        Appartements à Paris 16e : &nbsp;
        <a href='/'><button> Passoire thermique (461)</button></a>
      </div>
      <br/>

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