import React from 'react';
import { connect } from 'react-redux';
import { fetchChamps } from '../../actions'

class WorldChampionsList extends React.Component{
    componentDidMount(){
        this.props.fetchChamps();
    }
    renderList() {
        return this.props.wcreducer.MRData.StandingsTable.StandingsLists.map(wc => {
            return (
                <div className="item" key={wc.season + wc.round.toString()}>
                    <div className="content">
                        <div className="descrptionChamps">
                            <p className="seasonYear">{wc.season}</p>
                            <p className="champName"><a href={wc.DriverStandings[0].Driver.url} target="_blank" rel='noopener noreferrer'>{wc.DriverStandings[0].Driver.givenName} {wc.DriverStandings[0].Driver.familyName}</a></p>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.props.wcreducer.MRData) {
            return (
                <>
                    <p className="season">Season</p>
                    <p className="winner">Champion</p>
                    <div className="ui relaxed defided list">{this.renderList()}</div>
                </>
            )
        }
        return <div className="ui relaxed defided list">Loading...</div>
    }
}

const mapStateToProps= (state) => {
    return { wcreducer: state.wcreducer }
}


export default connect(mapStateToProps, {fetchChamps})(WorldChampionsList);