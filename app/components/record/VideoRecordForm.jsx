import React from 'react';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import connectToStores from 'alt-utils/lib/connectToStores';
import TextInput from './TextInput';

class VideoRecordForm extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        return VideoRecordsStore.getState().videoRecord;
    }

    componentDidMount() {
        VideoRecordsStore.getVideoRecord(this.props.id);
    }

    render() {
        return (
            <div>
                <form className="form-horizontal">
                    <TextInput text="Title:" 
                               bindTo="title"
                               videoRecord={this.props.videoRecord}/>
                    <TextInput text="Thumbnail URL:" 
                               bindTo="thumbnailUrl"
                               videoRecord={this.props.videoRecord}/>
                    <TextInput text="Snapshot URL:" 
                               bindTo="snapshotUrl"
                               videoRecord={this.props.videoRecord}/>
                    <TextInput text="Description:" 
                               bindTo="description"
                               multiline="true"
                               videoRecord={this.props.videoRecord}/>
                </form>

                <div className="break">
                    <div className="pull-right">
                        <a className="btn btn-default">Cancel</a>
                        <input type="submit" class="btn btn-primary" value="Save"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default connectToStores(VideoRecordForm);