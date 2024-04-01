import { Link } from 'react-router-dom';
import { AddButton } from './AddButton';

function Meal(props) {
    const { idMeal, strMeal, strMealThumb } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
                <AddButton />
            </div>
            <div className="card-content">
                <span className="card-title red-text">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn red">
                    Watch recipe.
                </Link>
            </div>
        </div>
    );
}

export { Meal };
