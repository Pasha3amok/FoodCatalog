import { Link } from "react-router-dom";

function Meal(props) {
	const {idMeal,strMeal, strMealThumb} = props;
	return <div className="card">
	<div className="card">
	<div className="card-image">
	  <img src={strMealThumb} alt={strMeal}/>
	</div>
	<div className="card-content">
	<span className="card-title red-text">{strMeal}</span>
	</div>
	<div className='card-action'>
		<Link to={`/Meal/${idMeal}`} className='btn'>Watch recipe</Link>
	</div>
  </div>
</div>
}

export {Meal};