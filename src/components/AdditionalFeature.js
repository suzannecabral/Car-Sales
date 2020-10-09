import React from 'react';

import { connect } from "react-redux";
import { clickAdd } from "./actions";

// const clickAdd = (msg) => {
//   console.log("Feature added: ", msg )
// }

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={()=>{clickAdd(props.feature)}}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



export default connect(null,{clickAdd})(AdditionalFeature);
