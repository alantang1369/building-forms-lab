import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
  render() {
   const renderBands = ()=> this.props.bands.map((band, id)=> <li key={id}>{band.name}</li>)
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ol>
          {renderBands()}
        </ol>
      </div>
    )
  }
}

const mapStateToProps =(state) =>{
 return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addBand: (formData) => dispatch({type:"ADD_BAND", pageLoad: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)( BandsContainer)
 