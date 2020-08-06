import React from 'react';
import {Link} from 'react-router-dom';

const PortfolioList = (props) => (
    <div>
        <Link to="/portfolio/1">Portfolio1</Link>
        <Link to="/portfolio/2">Portfolio2</Link>
    </div>
)

export default PortfolioList;