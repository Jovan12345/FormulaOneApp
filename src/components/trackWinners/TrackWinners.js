import React from 'react';
import { connect } from 'react-redux'

import { trackWinners } from '../../actions'

class TrackWinners extends React.Component {
    
    renderList() {
        const root = this.props.trackreducer.MRData.RaceTable;
        console.log(root.Races[0].Results[0])
        return root.Races[0].Results.map(wc => {
            return (
                <div className="item trackWinnerDetails" key={wc.number}>
                    <p>{wc.position}</p>
                    <p><a href={wc.Driver.url} target="_blank" rel='noopener noreferrer'>{wc.Driver.givenName} {wc.Driver.familyName}</a></p>
                    <p><a href={wc.Constructor.url} target="_blank" rel='noopener noreferrer'>{wc.Constructor.name}</a></p>
                </div>
            );
        });
    }

    render() {
        if (this.props.trackreducer.MRData) {
            return (
                <div>
                    <h3 className="trackWinnersCaption"> {this.props.trackreducer.MRData.RaceTable.Races[0].raceName} winners </h3>
                    <p className="position">Position</p>
                    <p className="driver">Driver</p>
                    <p className="constructor">Constructor</p>
                    <div className="ui relaxed defided list trackWinnersListDetails"> {this.renderList()}</div>
                </div>
            );
        }
        return <h3> Track Winners </h3>; 
    }
}

const mapStateToProps = (state) => {
    return { trackreducer: state.trackreducer }
}

export default connect(mapStateToProps, { trackWinners })(TrackWinners);