import { useState } from "react"
import Spinner from "./spinner";

export const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    return(
        <div className="form-wrap">
            {!loading ? 
            <div className="form">
            <input type="text" placeholder="Vaše jméno" onInput={e => setName(e.target.value)}/>
            <input type="email" placeholder="Váš e-mail" onInput={e => setEmail(e.target.value)}/>
            <input type="text" placeholder="Předmět" onInput={e => setSubject(e.target.value)}/>
            <textarea onInput={e => setMessage(e.target.value)} placeholder={"Zpráva"} />
            <button className="green-bg" onClick={e => setLoading(!loading)}>
                Odeslat
            </button></div> : <Spinner/>
            }
        </div>
    )
}