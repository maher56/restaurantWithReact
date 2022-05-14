import React , { useState , useEffect } from 'react'
import axios from 'axios'
import Recipe from './Recipe';
const App=()=>{
    //https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_0123456789abcdef0123456789abcdef&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY
    const APP_ID = "fbbe85e0";
    const APP_KEY = "622edf32d28d78f330879ed446cf9650"
    
    const [recipes , setRecipes] = useState([]);
    const [search , setSearch]  = useState("");
    const [query , setQuery] = useState("chicken") 


    useEffect(()=> {
        axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res => {setRecipes(res.data.hits);})
        .catch(error => {console.log(error)}) 
        console.log()
    } , [query])
    const getSearch=e=> {
        e.preventDefault();
        setQuery(search);
        setSearch("")
    } 
    const updateSearch = e => {setSearch(e.target.value);}
    return (
    <div className="App">
        <h1>Search what you wish</h1>
        <form className='search-form' onSubmit={getSearch}>
            <input onChange={updateSearch} className='search-bar' type="text" value={search}/>
            <button type='submit' className='search-button'>Search</button>
        </form>
        {recipes.map((recipe , index) => (
            <div key={recipe.recipe.label}><Recipe title={recipe.recipe.label} img={recipe.recipe.image} calories={recipe.recipe.calories}/></div>
        ))}
    </div>
);
}

export default App;
