import React from 'react';  
import { FaSearch } from 'react-icons/fa';  
import './Searchbar.css'; 

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {  
    return (  
        <form onSubmit={handleSearch}>  
            <div className="wrapper c-height">  
                <div className="search-area c-height">  
                    <div className="single-search">  
                        <input  
                            className="custom-input"  
                            type="text"  
                            placeholder="Buscar comida..."  
                            value={searchTerm}  
                            onChange={(e) => setSearchTerm(e.target.value)}  
                        />  
                        <button type="submit" className="icon-area">  
                            <FaSearch />  
                        </button>  
                    </div>  
                </div>  
            </div>  
        </form>  
    );  
};  

export default SearchBar;