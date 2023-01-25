import React from 'react';
import Image from "../../assets/icons/LOGO_PRINCIPAL_BLANC.svg";

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <input type="checkbox" id="show-menu"/>
      <label for="show-menu" className="sidebar-menu-icon"><i className="fa fa-bars"></i></label>
      <div className="content"> 
        <div className='sidebar-container'>
          <img src={Image} alt='logo naapp' className='sidebar-logo' />
        </div>
        <p className='sidebar-content'>Premier réseau social français dédié à l’accès à l’information sur la neuroatypie.</p>
<p className="sidebar-content">Directement concerné, curieux, ou encore professionnel de santé, partagez vos expériences, demandez des avis et conseils, trouvez des ressources et bien plus encore.
</p>
<p className="sidebar-content-next" >Créez des liens !</p>
<footer>
        <div>
          <a href="https://fr-fr.facebook.com/" target="_blank" rel='noreferrer'>
            <i className="sidebar-socials fa fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
            <i className="sidebar-socials fa fa-brands fa-instagram"></i>
          </a>
          <a href="https://fr.linkedin.com/in/lo%C3%A9lia-galliez-6bb7981b4" target="_blank" rel='noreferrer'>
            <i className="sidebar-socials fa fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p className='sidebar-footer'><a>Mentions légales</a> | <a>Paramètrer les cookies</a> | <a>Politique de confidentialité</a> | <a>Nous contacter</a> | <a>Aide</a></p>
        </footer>
      </div>
    </div>
    );
  }
  