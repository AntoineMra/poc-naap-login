import React from 'react';
import Image from "../../assets/img/main-logo-dark.png";

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <input type="checkbox" id="show-menu" />
      <label for="show-menu" className="sidebar-menu-icon"><i className="fa fa-bars"></i></label>
      <div className="content">
        <div className='sidebar-container'>
          <img src={Image} alt='logo naapp' className='sidebar-logo' />
        </div>
        <p className='sidebar-content'>Premier réseau social français dédié à l’accès à l’information sur la neuroatypie.
          Directement concerné, curieux, ou encore professionnel de santé, partagez vos expériences, demandez des avis et conseils, trouvez des ressources et bien plus encore.</p>
        <div className='sidebar-reseaux'>
          <a href="https://fr.linkedin.com/in/lo%C3%A9lia-galliez-6bb7981b4" target="_blank" rel='noreferrer'>
            <i className="sidebar-socials fa fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
            <i className="sidebar-socials fa fa-brands fa-instagram"></i>
          </a>
          <a href="https://fr.linkedin.com/in/lo%C3%A9lia-galliez-6bb7981b4" target="_blank" rel='noreferrer'>
            <i className="sidebar-socials fa fa-brands fa-linkedin"></i>
          </a>
        </div>
        <footer className='sidebar-footer'>
          <nav className='sidebar-footer-nav'>
            <a className='side-footer-link'>Mentions légales</a>
            <a className='side-footer-link'>Paramètrer les cookies</a>
            <a className='side-footer-link'>Politique de confidentialité</a>
            <a className='side-footer-link'>Nous contacter</a>
            <a className='side-footer-link'>Aide</a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
