import React from 'react';
import '../w3.css';
import '../App.css';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, dietLabels, healthLabels}) => {

    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>calories: {calories}</p>
            <div className={style.list}>
                <ol>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}    {/* Amazing: just add "index" as a parameter! Gosh.. */}
                </ol>
            </div>
            
            <img className={style.image} src={image} alt=""/>
            <ul>
                {dietLabels.map(label => (
                    <li key={label} className="tag w3-col s2">{label}</li>
                ))}
                {healthLabels.map(label => (
                    <li key={label} className="tag w3-col s2">{label}</li>
                ))}
            </ul>
            <br/>
        </div>
    );
}

export default Recipe;