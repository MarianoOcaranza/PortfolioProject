import React from 'react'
import '../styles/Home.css'

function Home() {
    return (
        <section id='Home' className='content-home'>
            <div className='welcome'>
                <h1 id='hola'>¡Hola!</h1>
                <div id='text_1'>
                  <p id='soy'>Soy Mariano</p>
                  <p id='dev'>desarrollador React front-end</p>
                </div>
            </div>
        </section>
    )
}

export default Home