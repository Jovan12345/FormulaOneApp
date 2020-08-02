import React from 'react';

import { Link } from 'react-router-dom';

class returnYears extends React.Component {
    renderYears() {
        let arr = [];
        for (let year = 2005; year <= 2018; year++) {
            arr.push(year)
        };

        return arr.map(year => {
            return (
                <>
                    <Link to={`winners/${year}`} className='yearListItem'>
                        <div className="yearList" key={year}>

                            {year}

                        </div>
                    </Link >
                </>
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