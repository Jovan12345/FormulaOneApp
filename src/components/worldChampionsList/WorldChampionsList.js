import React from 'react';
import { connect } from 'react-redux';
import { fetchChamps } from '../../actions'

class WorldChampionsList extends React.Component{
    componentDidMount(){
        this.props.fetchChamps();
    }

    render (){
        console.log(this.props)
        return <div>World chmpions</div>
    }
}

const mapStateToProps= (state) => {
    return { wcreducer: state.wcreducer }
}


export default connect(mapStateToProps, {fetchChamps})(WorldChampionsList);