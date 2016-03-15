import React from 'react';
import EditRecord from './EditRecord.jsx';

export default class CreateRecord extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
              <EditRecord/>
            </div>
        );
    }
}


