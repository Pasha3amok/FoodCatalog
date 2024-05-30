import { Link } from 'react-router-dom';

function Meal(props) {
    const {
        idMeal,
        strMeal,
        strMealThumb,
        addToSaved = Function.prototype,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
                <button
                    class="btn-floating pulse halfway-fab waves-effect waves-light red btn-large"
                    onClick={() =>
                        addToSaved({
                            idMeal,
                            strMeal,
                            strMealThumb,
                        })
                    }
                >
                    <i class="material-icons">add</i>
                </button>
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
