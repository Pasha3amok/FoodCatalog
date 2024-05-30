import { Meal } from './Meal';

function MealList(props) {
    const { meals = [], addToSaved = Function.prototype } = props;

    return (
        <div className="list">
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} addToSaved={addToSaved} />
            ))}
        </div>
    );
}

export { MealList };
