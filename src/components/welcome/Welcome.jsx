import React from 'react';  
import './Welcome.css';  

const Welcome = () => {  
  return (  
    <div className="main">  
      <div className="gastro">  
        <img className="gastro-img" src="https://www.themealdb.com/images/media/meals/cybyue1614349443.jpg" alt="plato" />  
        <div className="header-content">  
          <h1>Los mejores platos</h1>  
          <p>  
            No todos tenemos tiempo para poder cocinarnos lo que nos gustaria, para eso estamos nosotros, para ofrecerte comida casera, con ingredientes sanos y frescos, con una amplia gama de variedades para todos los gustos. 
            <a href="/carta" target="_blank" rel="noopener noreferrer" className="btn-1">Más información</a>  
          </p>  
        </div>  
      </div>  

      <div className="gastro-content-container">  
        <h2>Nuestros Ingredientes</h2>  
        <p className="txt-p">  
          Trabajamos con ingredientes de primerisima calidad especialmente seleccionados para cuidar su paladar y su salud.  
        </p>  

        <div className="gastro-group">  
          <div className="gastro-1">  
            <img className="gastro-img" src="https://www.themealdb.com/images/ingredients/Beef.png" alt="carne" />  
            <h3>Carnes</h3>  
            <p>  
              Trabajamos con carne de ternera, pollo y puerco, como asi tambien con pescados y mariscos frescos. Las carnes son provistas por establecimientos agroecologicos de zonas aledañas.  
            </p>  
          </div>  

          <div className="gastro-1">  
            <img className="gastro-img" src="https://www.themealdb.com/images/ingredients/Cabbage.png" alt="verduras" />  
            <h3>Verduras y Frutas</h3>  
            <p>  
              Las verduras y frutas que utilizamos para nuestros platos son provistas por nuestra propia huerta agroecolica asegurandonos de primera mano que los productos estan libre de agroquimicos.  
            </p>  
          </div>  

          <div className="gastro-1">  
            <img src="https://www.themealdb.com/images/ingredients/Olive%20Oil.png" alt="condimentos" />  
            <h3>Aceites y condimentos</h3>  
            <p>  
              Utilizamos condimentos variados y una seleccion de aceites extra virgenes.  
            </p>  
          </div>  
        </div>  
        <a className="btn-1" href="/contacto" target="_blank">  
          Contactanos 
        </a>  
      </div>  

      <main className="services">  
     
        <div className="services-content-container">  
          <h2>Directo a su Mesa</h2>  
          <div className="services-group">  
            <div className="services-1">  
              <img src="https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg" alt="Platos Principales" />  
              <h3>Platos Principales</h3>  
            </div>  
            <div className="services-1">  
              <img src="https://www.themealdb.com/images/media/meals/wsqqsw1515364068.jpg" alt="entradas" />  
              <h3>Entradas</h3>  
            </div>  
            <div className="services-1">  
              <img src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg" alt="postres" />  
              <h3>Postres</h3>  
            </div>  
          </div>  
          <p>  
          Tenemos una amplia gama de opciones tanto para platos principales, pstres o entradas, no dejes de mirar los sugeridos y contactanos para concretar tu pedido y coordinar la entrega
          </p>  
          <a href="/carta" className="btn-1">  
            Menú de Comidas 
          </a>  
        </div>  
      </main>  
    </div>  
  );  
};  

export default Welcome;