import React from 'react';
import { connect } from 'react-redux';

import { fetchWinners, fetchChamp } from '../../actions/index';

class YearlyWinnersList extends React.Component {
    componentDidMount() {
        const year = this.props.match.params.year;
        this.props.fetchWinners(year);
        this.props.fetchChamp(year);

    }

    renderList() {
        const champCode = this.props.champreducer.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.code;
        return this.props.yearlyreducer.MRData.RaceTable.Races.map(wc => {
            let champion = false;
            if (champCode === wc.Results[0].Driver.code) {
                champion = true;
            }
            return (
                <div className="item" key={wc.season + wc.round.toString()}>
                    <div className="content">
                        <div className="descrption">
                            <p>{wc.raceName}</p>
                            <p data-champion={champion} className="yearlyWinner"><a href={wc.Results[0].Driver.url} target="_blank" rel='noopener noreferrer'>{wc.Results[0].Driver.givenName} {wc.Results[0].Driver.familyName}</a></p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        console.log(this.props)
        if (this.props.yearlyreducer.MRData && this.props.champreducer.MRData) {
            return (
                <>
                    <div> Yearly winners list</div>
                    <div> {this.renderList()}</div>
                </>
            )
        }
        return (
            <div>Loading</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { yearlyreducer: state.yearlyreducer, champreducer: state.champreducer }
}

export default connect(mapStateToProps, { fetchWinners, fetchChamp })(YearlyWinnersList);

