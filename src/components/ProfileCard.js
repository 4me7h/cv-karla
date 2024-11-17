import React from "react";

import Photo from './Photo';
import Content from './Content';

import './ProfileCard.scss';
// import img from '../images/img.jpg'
// import img02 from '../images/img02.jpg'
import img03 from '../images/img03.png'


const Card = () => {
    return (
        <section className="profile-card">
            <Photo 
                photo = {img03}
            />
            <Content 
                name = "Ing. José Julian Tacias Rodriguez"
                position = {["Director General"]}
                company = "Avaluos y Servicios de Chiapas"
                aboutText = {["Empresa líder en Chiapas en servicios de avalúos profesionales y consultoría especializada en bienes raíces."]}
                email = "jj.taciasr@gmail.com"
                phone = "961 235 2944"
                whatsapp = "961 235 2944"
                whatsappmssg ="Estoy%20interesado%20en%20tu%20servicio"
                facebook = "@AnaRodriguezMK"
                facebookURL = "https://www.facebook.com/abraham.gomezjose" 
                twitter = "@anarodriguez.marketing"  
                address = "3ra. Poniente #624-A"
            />
        </section>
    );
}

export default Card;