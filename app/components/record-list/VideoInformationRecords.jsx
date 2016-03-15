import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import VideoRecordList from './VideoRecordList.jsx';
import Pagination from '../Pagination.jsx';


class VideoInformationRecords extends React.Component {
    constructor(props) {
        super(props);
        this.pageSize = 5;
    }

    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        return VideoRecordsStore.getState().videoRecordsInfo;
    }

    componentDidMount() {
        VideoRecordsStore.fetchVideoRecords(
            this.props.page ? this.props.page : 0, 
            this.pageSize);
    }
    
    onPageChange(page) {
       if (page != this.props.page)
       {
           VideoRecordsStore.fetchVideoRecords(page, this.pageSize);
       }
    }
    
    onDelete(id){
        VideoRecordsStore.deleteVideoRecord(id, this.props.page ? this.props.page : 0, this.pageSize);
    }

    render() {
        return (
            <div>
                <VideoRecordList 
                    videoRecordsList={this.props.videoRecordsList}
                    onDelete={this.onDelete.bind(this)}/>
                <Pagination 
                    page={this.props.page} 
                    totalPages={this.props.totalPages} 
                    onPageChange={this.onPageChange.bind(this)}/>
            </div>
        );
    }
}

export default connectToStores(VideoInformationRecords);