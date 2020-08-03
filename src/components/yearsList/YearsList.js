import React from 'react';

import { Link } from 'react-router-dom';

class returnYears extends React.Component {

    // create list of years between 2005 to 2018 to be shown on the homepage 
    renderYears() {
        let arr = [];
        for (let year = 2005; year <= 2018; year++) {
            arr.push(year)
        };

        return arr.map(year => {
            return (
                    <div className="yearList" key={year}>
                        <Link to={`winners/${year}`} className='yearListItem'>
                            {year}
                        </Link >
                    </div>
            )
        })
    };

    render() {
        return (
            <div>
                <h3 className="titleYearsList">Select season winners</h3>
                <div className="allYearsList">{this.renderYears()}</div>
            </div>
        )
    }
}


export default returnYears;