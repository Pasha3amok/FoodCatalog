import {Link} from 'react-router-dom';

function CategoryItem(props) {
	const {strCategory, strCategoryThumb, strCategoryDescription } = props;

	return <div className="card">
		<div className="card">
        <div className="card-image">
          <img src={strCategoryThumb} alt={strCategory}/>
        </div>
        <div className="card-content">
		<span className="card-title red-text">{strCategory}</span>
          <p>{strCategoryDescription.slice(0,50)}...</p>
        </div>
		<div className='card-action'>
			<Link to={`/category/${strCategory}`} className='btn btn-success btn-md'>Watch categories</Link>
		</div>
      </div>
	</div>
}

export {CategoryItem};