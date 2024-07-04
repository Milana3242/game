import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem({id,title,level,avaible,cost}) {
    return (
        <div className='category'>
          <Link to={`/Level/`} class="card">
            <p>{title}</p>
          </Link>
        </div>
    );
}

export default CategoryItem;