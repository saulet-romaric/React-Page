import React from "react";
import "./Footer.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {

    return (

        <footer >
            <div className="line-1">
                <div>
                    Logic Immo c’est aussi… &nbsp;
                    <img className="logo-footer" src="/images/logo-neuf.svg" alt="Logo"/>
                    <img className="logo-footer" src="/images/logo-la-cote-immo.svg" alt="Logo"/>
                    <img className="logo-footer" src="/images/logo-lux.svg" alt="Logo"/>
                </div>
                <div>
                    Retrouvez nous sur les réseaux sociaux ... &nbsp;
                    <img className="logo-rs" src="/images/facebook-white.svg" alt="Logo"/>
                    <img className="logo-rs" src="/images/twitter-white.svg" alt="Logo"/>
                </div>
            </div>
            <hr/>
            <div className="line-2">
                <div className="block-1">
                    <div>
                        <h5>
                            &nbsp; A propos
                        </h5>
                        <br/>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Qui sommes-nous ?
                        </a>
                    </div>
                    <div>
                        <a className="link-footer" href="/">
                            Contacter le service client
                        </a>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Nous rejoindre
                        </a>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Presse
                        </a>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Alerte email
                        </a>
                    </div>
                                   
                </div>

                <div className="block-2">
                    <div>
                        <h5>
                           &nbsp; Nos applications
                        </h5>
                        <br/>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Découvrez nos applications
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img className="logo-app-1" src="/images/app-store-logo.png" alt="Logo"/>
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img className="logo-app-1" src="/images/google-play-store.png" alt="Logo"/>
                        </a>
                    </div>

                </div>

                <div className="block-3">
                    <div>
                        <h5>
                            &nbsp; A propos
                        </h5>
                        <br/>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Tous nos services pro
                        </a>
                    </div>
                    
                    <div>
                        <a className="link-footer" href="/">
                            Accès client
                        </a>
                    </div>

                </div>

                <div className="block-4">
                    <div>
                        <h5>
                            &nbsp; A propos
                        </h5>
                        <br/>
                    </div>

                    <div>
                        <a className="link-footer" href="/">
                            Conditions Générales d'Utilisation
                        </a>
                    </div>
                    
                    <div>
                        <a className="link-footer" href="/">
                            Politique Générale de Protection des Données
                        </a>
                    </div>
                    <div>
                        <a className="link-footer" href="/">
                            Charte éditeur
                        </a>
                    </div>
                    <div>
                        <a className="link-footer" href="/">
                            Paramétrer mes cookies
                        </a>
                    </div>

                </div>

            </div>
            <hr/>
            <div className="line-3">
                <div>
                Copyright © 2003-2023 Concept Multimédia &nbsp; 
                <a className="link-footer" href="/">Fonds de commerce à vendre</a>
                </div>

            </div>
                
        </footer>
    );
};

export default Footer;