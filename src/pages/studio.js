import React from 'react';
const Studio = () =>{
  return (
    <div>
        <h3>Studio</h3>
        <div className="grid">
            <img src="./assets/obrazek-01.png"/>
            <div className="grid">
                <p>
                    Naše grafické studio zajišťuje veškeré grafické práce včetně úpravy dat či zhotovení nových grafických 
                    návrhů podle přání zákazníka. Naši grafici se ve své práci realizují a každou zakázku berou jako výzvu, 
                    jejich cílem je vytvořit fungující, moderní a čistý design. Provádíme sazbu, zlom, korektury a další úpravy.
                </p>
                <p>
                    Naše DTP studio je vybaveno výkonnými počítači s nejnovějšími operačními systémy pro bezproblémovou práci 
                    a komunikaci. Technické vybavení zaručuje kvalitní zpracování zakázky a umožní vyhovět nejnáročnějším požadavkům. 
                    Preferujeme individuální přístup ke každému zákazníkovi a snažíme se vyhovět jeho finančním, technickým i 
                    specifickým požadavkům.
                </p>
                <div className="image-grid">
                    <img src="assets/Ps.png" />
                    <img src="assets/Ai.png" />
                    <img src="assets/Id.png" />
                    <img src="assets/Acrobat.png" />
                </div>
            </div>
        </div>
    </div>
  );
}
export default Studio;