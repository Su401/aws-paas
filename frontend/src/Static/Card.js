import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgbenef from '../Images/pexels-fauxels-3183197.jpg';
import imgsetores from '../Images/pexels-jopwell-2422293.jpg';
import './Card.css'

export default function Card ()  {
    return (
        <div className='card-container'>
            <img src={imgbenef} alt='beneficios' className='card-img' />
            <h1 className='card-title'>Benefícios da Nossa Abordagem Digital</h1>
            <p className='card-text'>Eliminação da Papelada: Diga adeus à papelada volumosa e à gestão 
            manual de documentos. As nossas soluções digitais permitem que você armazene e acesse facilmente os 
            dados necessários, economizando tempo e recursos preciosos.</p>
            <a href="/beneficios">
            <Button variant='primary' className='card-btn' >Saiba Mais</Button>
            </a>
        </div>
    );
}

