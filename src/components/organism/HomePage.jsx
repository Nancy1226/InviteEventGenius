import React from "react";
import Heading from "../atoms/Heading"
import "../styles/HomePage.css"

function HomePage(){

    return (  
        <>
            <section className='hero'>
                <div className='container'>
                    <Heading title='Event Genius' 
                    subtitle='Personaliza tus invitaciones a tu gusto.' 
                    />
                </div>
            </section>

            <div className="categories">
                <p>Todas Las Plantillas</p>
                <p>Categorias:</p>
                <ul>
                    <li>Escuela</li>
                    <li>Oficina</li>
                    <li>Conciertos</li>
                    <li>Cursos</li>
                    <li>Diversión</li>

                </ul>
            </div>


        </>
    );
}

export default HomePage;
