import React from 'react';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import VideoRecordForm from './VideoRecordForm.jsx';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, hashHistory } from 'react-router';
import Actions from '../../actions/VideoRecordsActions.js';

class EditRecord extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        let state = VideoRecordsStore.getState();
        if (state.videoRecord){
            return state;
        }
        else{
            state.videoRecord = {};
            return state.videoRecord;
        }
    }

    componentDidMount() {
        if (this.props.params && this.props.params.id) {
            VideoRecordsStore.getVideoRecord(this.props.params.id);
        }
        else {
            Actions.create();
        }
    }

    setVideoRecordState(event) {
        var field = event.target.name;
        var value = event.target.value;
        var state = VideoRecordsStore.getState();
        state.videoRecord[field] = value;
        Actions.update(state.videoRecord);        
    }

    saveVideoRecord(event) {
        event.preventDefault();
        if (this.props.params && this.props.params.id) {
            VideoRecordsStore.updateVideoRecord(VideoRecordsStore.getState().videoRecord);
        }
        else {
            VideoRecordsStore.createVideoRecord(VideoRecordsStore.getState().videoRecord);
        }
    }

    render() {
        return (
            <div>
               <VideoRecordForm 
               videoRecord={this.props.videoRecord} 
               setVideoRecordState={this.setVideoRecordState.bind(this)}
               saveVideoRecord={this.saveVideoRecord.bind(this)} />
            </div>
        );
    }
}

export default connectToStores(EditRecord);

