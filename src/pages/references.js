import React from 'react';
const References = () =>{
  return (
    <div>
        <div className="row-grid">
            <div className="reference-card">
                <div className="reference-card-content">
                    <img 
                    src="assets/obrazek-11.png" 
                    alt="kalendář" />
                    <h3>kalendář</h3>
                </div>
                <img 
                src="assets/kalendar.jpg"
                alt="katalog" />
            </div>
            <div className="reference-card">
                <img 
                src="assets/katalog.jpg" 
                alt="katalog"/>
                <div className="reference-card-content">
                    <img 
                    src="assets/obrazek-08.png"
                    alt="katalog" />
                    <h3>katalog</h3>
                </div>
            </div>
        </div>
    </div>
  );
}
export default References;