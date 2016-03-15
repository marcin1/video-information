import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import VideoRecordsStore from '../../stores/VideoRecordsStore.js';
import VideoRecordList from './VideoRecordList.jsx';
import Pagination from '../Pagination.jsx';


class VideoInformationRecords extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            page: 0          
        }
        this.pageSize = 5;
    }

    static getStores() {
        return [VideoRecordsStore];
    }

    static getPropsFromStores() {
        return VideoRecordsStore.getState().videoRecordsList;
    }

    componentDidMount() {
        VideoRecordsStore.fetchVideoRecords(this.state.page, this.pageSize);
    }
    
    onPageChange(page) {
       if (page != this.state.page)
       {
           VideoRecordsStore.fetchVideoRecords(page);
       }
    }

    render() {
        return (
            <div>
                <VideoRecordList videoRecordsList={this.props.videoRecordsList}/>
                <Pagination 
                    page={this.state.page} 
                    totalPages={this.props.totalPages} 
                    onPageChange={this.onPageChange.bind(this)}/>
            </div>
        );
    }
}

export default connectToStores(VideoInformationRecords);