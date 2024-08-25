import React, { useEffect, useState } from 'react';  
import './Catalog.css';  
import Modal from '../modal/Modal'; 
import SearchBar from '../searchbar/Searchbar';

const Catalog = () => {  
    const [meals, setMeals] = useState([]);  
    const [filteredMeals, setFilteredMeals] = useState([]);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  
    const [searchTerm, setSearchTerm] = useState('');  
    const [showModal, setShowModal] = useState(false);   

    const fetchAllMeals = async () => {  
        try {  
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);  
            const data = await response.json();  
            if (data.meals) {  
                setMeals(data.meals);  
                setFilteredMeals(data.meals.slice(0, 9));  
            } else {  
                setMeals([]);  
                setFilteredMeals([]);  
            }  
        } catch (err) {  
            console.error(err);  
            setError(err.message);  
            setShowModal(true);  
        } finally {  
            setLoading(false);  
        }  
    };  

    useEffect(() => {  
        fetchAllMeals();  
    }, []);  

    const handleSearch = (e) => {  
        e.preventDefault();  
        const filtered = meals.filter(meal =>   
            meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())  
        );  
         
        if (filtered.length === 0) {  
            setShowModal(true); 
        }   

        setFilteredMeals(filtered.slice(0, 9));  
    };   

    const getIngredients = (meal) => {  
        const ingredients = [];  
        for (let i = 1; i <= 20; i++) {  
            const ingredient = meal[`strIngredient${i}`];  
            if (ingredient) {  
                ingredients.push(ingredient);  
            }  
            if (ingredients.length === 10) {  
                break;  
            }  
        }  
        return ingredients.join(', ');  
    };  

    const closeModal = () => {  
        setShowModal(false);  
        setSearchTerm('');  
        fetchAllMeals();   
    };  

    return (  
        <section>  
            <SearchBar   
                searchTerm={searchTerm}   
                setSearchTerm={setSearchTerm}   
                handleSearch={handleSearch}   
            />  
            
            <h2>Catálogo de Comidas</h2>  
            {loading && <p>Cargando...</p>}  
            {error && <p>Error: {error}</p>}  

            <div className="card-container">  
                {filteredMeals.map((meal) => (  
                    <div className="card" key={meal.idMeal}>  
                        <h3>{meal.strMeal}</h3>  
                        <img src={meal.strMealThumb} alt={meal.strMeal} />  
                        <p className="ingredient">Ingredientes:</p>  
                        <p>{getIngredients(meal)}</p>  
                        <div className="price-card">  
                            <p className="price">Precio: $8500</p>  
                        </div>  
                    </div>  
                ))}  
            </div>  

            {showModal &&   
                <Modal   
                    message="Disculpe, en este momento no podemos ofrecerle ese plato, pero no se pierda nuestras sugerencias."   
                    onClose={closeModal}   
                />  
            }  

            <button   
                className="scroll-to-top"  
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>  
                ↑  
            </button>  
        </section>  
    );  
};  

export default Catalog;