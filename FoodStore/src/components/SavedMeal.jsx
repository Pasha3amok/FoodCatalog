import React from 'react';
import { Link } from 'react-router-dom';

export default function SavedMeal(props) {
    const { quantity = 0 } = props;

    return (
        <div className="saved-meals red darken-2 white-text">
            {quantity ? (
                <div className="row">
                    <i className="material-icons right">bookmark</i>
                    {quantity}
                </div>
            ) : (
                <i className="material-icons">bookmark_border</i>
            )}
        </div>
    );
}

export { SavedMeal };
