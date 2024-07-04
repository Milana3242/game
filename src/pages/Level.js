import React from 'react';
import { Link } from 'react-router-dom';

function Level(props) {
    return (
        <div>
            <Link to={'/CategoryCards'}><button>1</button></Link>
            <Link><button>2</button></Link>
            <Link><button>3</button></Link>
        </div>
    );
}

export default Level;