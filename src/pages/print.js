import React from 'react';
const Print = () =>{
  return (
    <div>
      <h3>Tisk</h3>
      <div className="grid">
            <img 
            src="./assets/obrazek-03.png"
            alt="barevné spektrum RGB"/>
            <div className="grid">
                <h5>Archový tisk</h5>
                <p>
                    Materiály ve středním nákladu tiskneme vysoce kvalitní ofsetovou technologií v jedno i více barevném provedením, 
                    přičemž tisková kapacita strojů zaručuje rychlý průběh i u zakázek větších objemů. Naše technologická zařízení 
                    jsou schopna potisknout široké spektrum variant papíru v gramáži od 30g/m2 do 650g/m2. Systémem plošného ofsetu 
                    umíme tisknout až do velikosti B1.
                </p>
                <h5>Rotační tisk</h5>
                <p>
                    Při výrobě vyššího nákladu zejména časopisů, periodik, katalogů, nebo vysokonákladových letáků 
                    používáme rotační ofset, u něhož je tisková sazba umístěna na rotujícím válci. 
                    Součástí výrobního procesu je neustálá kontrola kvality. Během celé produkce si tiskař odbírá kontrolní výtisky, 
                    měří denzitu tisku a spasování barev a provádí nezbytné korekce. Kontrola kvality je tak zajištěna po celou dobu tisku. 
                    Naše rotační stroje jsou také vybaveny přídavnými zařízeními, která zaručují a zvyšují kvalitu, jako jsou 
                    kontrola barevnosti GMI, JDF komunikace a další.
                </p>
                <h5>Digitální tisk</h5>
                <p>
                    Díky této technologii Vám nabízíme rychlé zpracování malonákladových zakázek, jako jsou například vizitky, 
                    letáky, brožurky, pozvánky, oznámení a mnoho dalšího. Digitální tisk realizujeme do formátu papíru 330 x 483 mm. 
                    Rozsah gramáže papíru se pohybuje od 65 - 300 g/m2. Velikou výhodou této technologie je rychlost a flexibilita. 
                    Tiskneme na běžné papíry jako je např. oblíbený křídový papír lesklý i matný, ale i na speciální strukturované papíry. 
                    Samozřejmostí je i výroba personalizovaných tiskovin.
                </p>
            </div>
        </div>
    </div>
  );
}
export default Print;