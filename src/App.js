import React, { useEffect, useState } from 'react';
import Recipe from './model/recipe';
import './App.css';

// * SFC and CC
// This below is a stateless fuctional compoment.
// If can be triggered by "sfc"
// Another common use is "class compoment" or "cc -tab". The render() is just as "return()".

// For sfc, the props must be included in the paratheses; while cc can call "this.props.xxx".
// For sfc, can be "(props) -- {props.aaa}" or "({aaa, bbb})"
// For cc, in the render() before return(), we can save all the props passed down from the 
// upper layer by using "const {aaa, bbb} = this.props" and save the repeat "this.props.xxx"
const App = () => {
    
    const [recipes, setRecipes] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [lastKeyword, setLastKeyword] = useState('chicken');
    const [query, setQuery] = useState('chicken'); // by default "chicken"
    const exampleReq = 
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`;

    useEffect(() => { // take effect every time this mounts.
        getRecipes();
    }, [query]);
    // the [] above contains the "triggers" to take effect.
    // Why "query" not "keyword"? Because "query" is changed when submitting the form,
    // not when inputing the keyword (nightmare).
    const updateKeyword = (e) => {
        setKeyword(e.target.value);
        console.log(keyword);
    }
    const search = (e) => {
        e.preventDefault();
        setQuery(keyword);
        setLastKeyword('Last search: ' + keyword);
        setKeyword('');  // reset the input
    }

    const getRecipes = async () => {
        const response = await fetch(exampleReq);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits[0]);
        /**
         * * This can be written as:
         * fetch(url)
         * .then(resps => {
         *      resps.json()...
         * });
         */
    }
    return (
        <div>
        <div>
            <form onSubmit={search} action="" className="search-form">
                <input type="text" className="search-bar" value={keyword} 
                        onChange={updateKeyword} placeholder={lastKeyword}/>
                <button type="submit" className="search-button">search</button>
                {/* Note: these functions are "const", so no paratheses.~ */}
            </form>
    <p>{recipes.length} recipes are found: </p>
        </div>
        <div className="recipes">
            {recipes.map(recipe => (
                <Recipe key={recipe.recipe.label} 
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredientLines}
                        dietLabels={recipe.recipe.dietLabels}
                        healthLabels={recipe.recipe.healthLabels}/>
            ))}
            {/* "()" contains JSX code */}
        </div>

        </div>
    );
}

export default App;

