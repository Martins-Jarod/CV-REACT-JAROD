import React from "react";
import './User.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function User() {
  return (
    <div className="user">
      <img src="./images/Avatar.jpeg" className="user__avatar" alt="Jarod Martins" />
      <h1 className="user__name">Jarod Martins</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> Bordeaux
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:+33658932467">0658932467</a>
        </p>
        <p className="user__info">
          <EmailIcon /> <a href="mailto:johndoe@gmail.com">jarod.mrts@gmail.com</a>
        </p>
        <p className="user__info">
          <CalendarMonthIcon /> Né le 21 avril 1999
        </p>
        <p className="user__info">
          <DirectionsCarIcon /> Permis B
        </p>
        <p className="user__info">
          <LinkedInIcon /> <a href="https://www.linkedin.com/in/jarod-martins-2968482a4/"  target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
        </p>
      </div>
    </div>
  )
}

export default User