import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';

import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';
import { SavedMeal } from '../components/SavedMeal';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const [mark, setMark] = useState([]);

    const addToSaved = (item) => {
        const itemIndex = mark.findIndex((meal) => meal.idMeal === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };

            setMark([...mark, newItem]);
        } else {
            const newMark = mark.map((meal, index) => {
                if (index === itemIndex) {
                    return {
                        ...meal,
                        quantity: meal.quantity + 1,
                    };
                } else {
                    return item;
                }
            });

            setMark(newMark);
        }
    };

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <SavedMeal quantity={mark.length} />
            {!meals.length ? (
                <Preloader />
            ) : (
                <MealList meals={meals} addToSaved={addToSaved} />
            )}
        </>
    );
}

export { Category };
