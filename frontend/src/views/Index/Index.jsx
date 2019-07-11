import React from 'react';
import './Index.css';


const Index = () => {
    return (
        <div>
            <div className="seccion1">
                <div className="box1">

                    <div className="textoViaja">
                        <h1>Viaja!</h1>
                        <h2>Descubre lugares maravillosos</h2>
                        <button> Ver destinos</button>
                    </div>
                </div>
            </div>

            <div id="promociones">
                <div id="mykonos">
                    <div id="save">Save 90$ pay only</div>
                    <div id="price">
                        <div> 359$</div>
                    </div>
                    <div id="name">Madrid</div>
                </div>
                <div id="london">
                    <div id="save">Save 75$ pay only</div>
                    <div id="price">
                        <div> 729$</div>
                    </div>
                    <div id="name">Nueva York</div>
                </div>
                <div id="dublin">
                    <div id="save">Save 35$ pay only</div>
                    <div id="price">
                        <div>519$</div>
                    </div>
                    <div id="name">Tokyo</div>
                </div>
                <div id="paris">
                    <div id="save">Save 65$ pay only</div>
                    <div id="price">
                        <div>329$</div>
                    </div>
                    <div id="name">Buenos Aires</div>
                </div>
                <div id="amsterdam">
                    <div id="save">Save 95$ pay only</div>
                    <div id="price">
                        <div> 199$</div>
                    </div>
                    <div id="name">Ciudad de México</div>
                </div>
                <div id="rome">
                    <div id="save">Save 50$ pay only</div>
                    <div id="price">
                        <div> 659$</div>
                    </div>
                    <div id="name">Beijing</div>
                </div>
            </div>
            <div id="quienesSomos">
                <div className="boxSomos">
                    <h1>QUIENES SOMOS</h1>
                    <div className="barra"></div>
                    <p>GeeksHubs Travels es una agencia de viajes online creada en 2009 por un equipo de viajeros entusiastas
                        que deciden haver de su pasión por conocer el mundo un modo de vida. Desde nuestros inicios hemos
                        diseñado más de 500 viajes organizados a diferentes destinos de Europa, Norteamérica y Asia. Nuestro
                objetivo ahora es ir ampliando horizontes poco a poco.</p>
                    <button> Descubrir</button>
                </div>
            </div>

            <div id="contactar">
                <div id="plano">
                    <iframe width="100%" height="500px"
                        src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Moll%20de%20Ponent%20-%20Base%202%20(Edificio%20Innsomnia%2C%2046024%20Valencia+(GeeksHubs%20Travels)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"><a
                            href="https://www.mapsdirections.info/calcular-ruta.html">mapas y direcciones</a></iframe>
                </div>
                <div id="formulario">
                    <div id="email">
                        <p> E: Enquiry@artiotravel.com</p>
                    </div>
                    <div id="phone">
                        <p>P: 0264 123 4567 </p>
                    </div>
                    <div id="respuesta">
                        <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days</p>
                    </div>
                    <div id="horario">
                        <p>We are open from 8.30 AM - 4.00 PM week day</p>
                    </div>
                    <div className="barrAzul">
                    </div>
                    <div className="inputs">
                        <input placeholder="Name*" type="text" className="name" required />
                        <input placeholder="Email*" type="text" className="email" required />
                        <input placeholder="Phone" type="text" className="telf" />
                        <input placeholder="Country" type="text" className="country" />
                        <input placeholder="Message" type="text" className="message" />
                    </div>
                    <a href="#icono"> <button id="scroll">Inicio</button></a>
                </div>
            </div>
        </div>)
}

export default Index;