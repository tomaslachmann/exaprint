
import {Link} from 'react-router-dom';
import { React } from 'react';
import { Form } from '../components/form';

const Contact = () =>{
    
    return (
        <div>
            <div className="grid margin-bottom-10">
                
                <img 
                src="./assets/obrazek-05.png" 
                alt="mapa České republiky"/>
                <div className="grid-small">
                <div>
                    <ul className="bold">
                        <li>
                            Exa Print - Design s.r.o.
                        </li>
                        <li>
                            Střední Novosadská 4
                        </li>
                        <li>
                            779 00 Olomouc
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="tel:+420 585 751 176">tel.: +420 585 751 176</a>
                        </li>
                        <li>
                            <a href="tel:+420 775 705 170">mobil: +420 775 705 170</a>
                        </li>
                        <li>
                            <a href="mailto:sekretariat@exaprint.cz">sekretariat@exaprint.cz</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/" >www.exaprint.cz</Link>
                        </li>
                        <li>
                            IČ: 278 46 776
                        </li>
                        <li>
                            DIČ: CZ 278 46 776
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className="bold">
                            Obchod
                        </li>
                        <li>
                            <a href="tel:+420 775 705 171">tel.: +420 775 705 171</a>
                        </li>
                        <li>
                            <a href="mailto:obchod@exaprint.cz">obchod@exaprint.cz</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="bold">
                            Grafické studio
                        </li>
                        <li>
                            <a href="tel:+420 775 705 173">tel.: +420 775 705 173</a>
                        </li>
                        <li>
                            <a href="mailto:studio@exaprint.cz">studio@exaprint.cz</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="bold">
                            Výroba
                        </li>
                        <li>
                            <a href="tel:+420 775 705 172">tel.: +420 775 705 172</a>
                        </li>
                        <li>
                            <a href="mailto:vyroba@exaprint.cz">vyroba@exaprint.cz</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="contact-form">
                <h1>Napište nám</h1>
                <Form />
            </div>
        </div>
    );
}
export default Contact;