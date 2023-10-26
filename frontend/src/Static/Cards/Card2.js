import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import imgbenef from '../Images/pexels-fauxels-3183197.jpg';
import imgsetores from '../../Images/pexels-jopwell-2422293.jpg';
import '../Cards/Card.css'

export default function Card2 ()  {
    return (
        <div className='card-container-2'>
            <img src={imgsetores} alt='setores' className='card-img' />
            <h1 className='card-title'>Atendendo a Diversos Setores</h1>
            <p className='card-text'>Embora tenhamos começado com um foco na indústria de
							restauração, as nossas soluções são altamente
							adaptáveis e aplicáveis a uma variedade de setores.
							Esteja você gerindo um restaurante, uma fábrica, uma
							instalação de saúde ou qualquer outro tipo de
							negócio, estamos aqui para ajudar a aprimorar a sua
							gestão de segurança e conformidade.</p>
            <a href='/diversos'><Button variant='primary' className='card-btn' >Saiba Mais</Button></a>
            
        </div>
    );
}

