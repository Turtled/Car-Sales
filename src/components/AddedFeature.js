import React from 'react';
import {removeItem} from "../actions/actions.js"
import { connect } from "react-redux";

const AddedFeature = props => {
  console.log("Why do I exist?");//strange problem where AddedFeature components show up randomly in DOM (I checked everywhere and there's no <AddedFeature> components) and throw errors because they were never passed props
  if(!props.feature) return <p>UNDEFINED</p>;//this should fix it
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick= {(e) => {console.log("onclick remove"); e.preventDefault(); props.dispatch(props.feature) }}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (item) => dispatch(removeItem(item))
  }
}

export default connect(
  null, mapDispatchToProps
)(AddedFeature);


