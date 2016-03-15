import React from 'react';


export default class VideoRecordForm extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        editable record <br/>
        <input type="text"/>
      </div>
    );
  }
}