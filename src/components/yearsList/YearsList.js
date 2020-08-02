import React from 'react';

class returnYears extends React.Component {
    renderYears() {
        let arr = [];
        for (let year = 2005; year <= 2018; year++) {
            arr.push(year)
        };

        return arr.map(year => {
            return (
                <div className="yearList" key={year}>
                    <p>
                        {year}
                    </p>
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