import React from 'react';
import Image from "../../assets/img/logo512.png";
import '../../assets/style/SideBar.css';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <img src={Image} alt='logo naapp' className='logo' />
      <p className='presentationTxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus harum nulla expedita quae aperiam numquam voluptatibus quisquam cum, perferendis magni magnam optio rem voluptatum incidunt quia deserunt perspiciatis aliquam.</p>
      <p className='footer'> made by the best devs of the world in 2022 </p>
      <div className='reseaux'>
        <a href="https://fr.linkedin.com/in/lo%C3%A9lia-galliez-6bb7981b4" target="_blank" >
          <img src={Image} alt="Lien vers linkdeen de la boss" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={Image} alt="Lien vers instagram" />
        </a>
        <a href="https://fr-fr.facebook.com/" target="_blank">
          <img src={Image} alt=" Lien vers " />
        </a>
      </div>

    </div>
  );
}
//media query 