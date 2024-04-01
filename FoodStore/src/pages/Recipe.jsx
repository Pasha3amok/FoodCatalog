import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';

import { Preloader } from '../components/Preloader';
import { AddButton } from '../components/AddButton';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { idMeal } = useParams();

    useEffect(() => {
        getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
    }, [idMeal]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <div className="recipe-image row">
                        <div className="add-button">
                            <AddButton />
                        </div>
                        <div className="responsive-img">
                            <img
                                src={recipe.strMealThumb}
                                alt={recipe.strMeal}
                            />
                        </div>
                    </div>
                    <h1>{recipe.strMeal}</h1>
                    <h5>Category: {recipe.strCategory}</h5>
                    {recipe.strArea ? <h5>Area: {recipe.strArea}</h5> : null}
                    <p>
                        <h5>{recipe.strInstructions}</h5>
                    </p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13,
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return ' ';
                            })}
                        </tbody>
                    </table>

                    {!recipe.strYouTube ? (
                        <div className="row">
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>
                                Watch video instruction.
                            </h5>
                            <div className="video-container">
                                <iframe
                                    title={idMeal}
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                        -11,
                                    )}`}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ) : (
                        'Video not found'
                    )}
                </div>
            )}
        </>
    );
}

export { Recipe };
