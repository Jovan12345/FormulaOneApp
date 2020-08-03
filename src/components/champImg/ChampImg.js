import React from 'react';
import { connect } from 'react-redux'

import { champImg } from '../../actions'

class ChampImg extends React.Component {

    componentDidMount(){
        this.props.champImg();
    }
    getImg(){
        console.log(this.props)
    }

    render() {
        return <h3> Champ IMG </h3>; 
    }
}

const mapStateToProps = (state) => {
    return { champimgreducer: state.champimgreducer }
}

export default connect(mapStateToProps, { champImg })(ChampImg);