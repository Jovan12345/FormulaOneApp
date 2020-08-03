import React from 'react';
import { connect } from 'react-redux'

import { trackWinners } from '../../actions'

class TrackWinners extends React.Component {
    renderList() {
        const root = this.props.trackreducer.MRData.RaceTable;
        return root.Races[0].Results.map(wc => {
            return (
                <div className="item" key={wc.number}>
                    <p>{wc.position}</p>
                    <p>{wc.Driver.givenName} {wc.Driver.familyName}</p>
                    <p>{wc.Constructor.name}</p>
                </div>
            );
        });
    }

    render() {
        console.log(this.props)
        if (this.props.trackreducer.MRData) {
            console.log(this.props.trackreducer.MRData.RaceTable.Races[0].Results)
            return (
                <>
                    <h3 className="trackWinnersCaption"> {this.props.trackreducer.MRData.RaceTable.Races[0].raceName} winners </h3>
                    <p className="position">Pos</p>
                    <p className="driver">Driver</p>
                    <p className="constructor">Constructor</p>
                    <div> {this.renderList()}</div>
                </>
            );
        }
        return <h3> Track Winners </h3>;
    }
}

const mapStateToProps = (state) => {
    return { trackreducer: state.trackreducer }
}

export default connect(mapStateToProps, { trackWinners })(TrackWinners);