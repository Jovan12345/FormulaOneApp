import React from 'react';
import { connect } from 'react-redux';

import { fetchWinners, fetchChamp, trackWinners } from '../../actions/index';
import TrackWinners from '../trackWinners/TrackWinners'

class YearlyWinnersList extends React.Component {
    componentDidMount() {
        const year = this.props.match.params.year;
        this.props.fetchWinners(year);
        this.props.fetchChamp(year);

        // On URL change --> clear the state
        this.props.history.listen(() => {
            this.getTrackWinners();
        })
    }
    getTrackWinners(season, round) {
        this.props.trackWinners(season, round);
    }

    // creates list from all the Winner Drivers in the selected Season
    renderList() {
        const champCode = this.props.champreducer.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.code;
        return this.props.yearlyreducer.MRData.RaceTable.Races.map(wc => {
            // this part is used to determine the Champion Driver in the selected Season
            let champion = false;
            if (champCode === wc.Results[0].Driver.code) {
                champion = true;
            }
            return (
                <div className="item" key={wc.season + wc.round.toString()}>
                    <div className="content">
                        <div className="descrption" id="descrption">
                            <p className='yearListItem' onClick={() => this.getTrackWinners(wc.season, wc.round)}>{wc.raceName}</p>
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
            return (
                <div className="yearlyWinnersList">
                    <div className="yearlyWinnersListComponent">
                        <h3 className="yearlyWinnerCaption">Season {season} winners</h3>
                        <p className="track">Track</p>
                        <p className="driver1">Driver</p>
                        <div className="ui relaxed defided list">{this.renderList()}</div>
                        <p className="champNote">{champDetails.Driver.givenName} {champDetails.Driver.familyName} was champion in {season} season with a total of {champDetails.wins} wins</p>
                    </div>
                    <div className="trackWinnersComponent">
                        <TrackWinners className="trackWinner"/>
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
    return ({
        yearlyreducer: state.yearlyreducer,
        champreducer: state.champreducer,
        trackreducer: state.trackreducer
    })
}

export default connect(mapStateToProps, { fetchWinners, fetchChamp, trackWinners })(YearlyWinnersList);

