import React from "react";

import Photo from './Photo';
import Content from './Content';


// import img from '../images/img.jpg'
// import img02 from '../images/img02.jpg'
import img from '../images/img.jpg'


const Card = () => {
    return (
        <section className="profile-card">
            <Photo 
                photo = {img}
            />
            <Content 
                name = "Arquitecta Yotona"
                position = {["Chofer de maquinaria de construcción"]}
                company = "En el puente chiapas"
                aboutText = {["A veces cuida a la helenita, le gusta comer palomitas y ver películas."]}
                email = "yotona@gmail.com"
                phone = "961 667 6381"
                whatsapp = "961 667 6381"
                whatsappmssg ="Estoy%20interesado%20en%20tu%20servicio"
                facebook = "@AnaRodriguezMK"
                facebookURL = "https://www.facebook.com/abraham.gomezjose" 
                twitter = "@anarodriguez.marketing"  
                address = "Los niños, mun de la concordia"
            />
        </section>
    );
}

export default Card;