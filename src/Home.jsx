import React from 'react'
import './styles/Home.css'

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
            <footer id='footer_home'><a href="https://www.freepik.com/free-photo/person-front-computer-working-html_36189957.htm">Image by freepik</a></footer>
        </section>
    )
}

export default Home