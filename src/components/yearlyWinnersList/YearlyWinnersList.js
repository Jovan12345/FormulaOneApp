import React from 'react';
import { connect } from 'react-redux';

import { fetchWinners, fetchChamp } from '../../actions/index';
import TrackWinners from '../trackWinners/TrackWinners'

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
                            <p className='yearListItem'>{wc.raceName}</p>
                            <p data-champion={champion} className="yearlyWinner"><a href={wc.Results[0].Driver.url} target="_blank" rel='noopener noreferrer'>{wc.Results[0].Driver.givenName} {wc.Results[0].Driver.familyName}</a></p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.props.yearlyreducer.MRData && this.props.champreducer.MRData) {
            const champDetails = this.props.champreducer.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            const season = this.props.yearlyreducer.MRData.RaceTable.season;
            console.log(champDetails)
            return (
                <div>
                    <div className="yearlyWinnersListComponent">
                        <h3 className="yearlyWinnerCaption">Season {season} winners</h3>
                        <p className="track">Track</p>
                        <p className="driver">Driver</p>
                        <div className="ui relaxed defided list">{this.renderList()}</div>
                        <p className="champNote">{champDetails.Driver.givenName} {champDetails.Driver.familyName} was champion in {season} season with a total of {champDetails.wins} wins</p>
                    </div>
                    <div className="trackWinnersComponent">
                        <TrackWinners />
                    </div>
                </div>
            )
        }
        return (
            <div>Loading yearly winners...</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { yearlyreducer: state.yearlyreducer, champreducer: state.champreducer }
}

export default connect(mapStateToProps, { fetchWinners, fetchChamp })(YearlyWinnersList);

