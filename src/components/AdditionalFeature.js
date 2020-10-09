import React from 'react';

import { connect } from "react-redux";
import { clickAdd } from "./actions";
// import is for connect

// const clickAdd = (msg) => {
//   console.log("Feature added: ", msg )
// }

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={()=>{props.clickAdd(props.feature)}}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   return {

//   }
// }

export default connect(null,{clickAdd})(AdditionalFeature);
//connect dispatches
//connects component and reducer