import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = (props) => (
    <div>
        This is the portfolio {props.match.params.id}<Link to="/portfolio">Go Back</Link>
    </div>
)

export default Portfolio;