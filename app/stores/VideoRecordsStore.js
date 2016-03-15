import VideoRecordsSource from '../sources/VideoRecordsSource.js';
import alt from '../alt';
import Actions from '../actions/VideoRecordsActions.js';

import { Router, hashHistory } from 'react-router';

class VideoRecordsStore {
    constructor() {
        this.state = {
            videoRecordsInfo: null,
            videoRecord: null,
            errorMessage: null,            
        };

        this.registerAsync(VideoRecordsSource);

        this.bindListeners({
            fetchSucess: Actions.fetchSucess,
            fetchFailed: Actions.fetchFailed,
            getSucess: Actions.getSucess,
            getFailed: Actions.getFailed,
            deleteSucess: Actions.deleteSucess,
            deleteFailed: Actions.deleteFailed,
            createSucess: Actions.createSucess,
            createFailed: Actions.createFailed,
            updateSucess: Actions.updateSucess,
            updateFailed: Actions.updateFailed
        });
        
        this.bindActions({
            create: Actions.create,
            update: Actions.update
        })
    }

    createSucess(videoRecord) {
            this.setState({
                videoRecord : videoRecord,
            });
            
        hashHistory.push("/view/" + videoRecord.id + "/true");
    }

    createFailed(errorMessage) {
        this.setState({
            errorMessage
        });
    }
    
    updateSucess(videoRecord) {
            this.setState({
                videoRecord : videoRecord,
            });
            
        hashHistory.push("/view/" + videoRecord.id + "/true");
    }

    updateFailed(errorMessage) {
        this.setState({
            errorMessage
        });
    }

    fetchSucess(videoRecordsInfo) {
            this.setState({
                videoRecordsInfo : videoRecordsInfo,
            });
    }

    fetchFailed(errorMessage) {
        this.setState({
            errorMessage
        });
    }

    getSucess(videoRecord) {
            this.setState({
                videoRecord: videoRecord
            });
    }

    getFailed(errorMessage) {
        this.setState({
            errorMessage
        });
    }

    deleteSucess(videoRecordsInfo) {
            this.setState({
                videoRecordsInfo : videoRecordsInfo,
            });
    }

    deleteFailed(errorMessage) {
        this.setState({
            errorMessage
        });
    }
    
    create() {
        let videoRecord = {
            title: null,
            description: null,
            thumbnailUrl: null,
            snapshotUrl: null,
            id: null
        }

        this.setState({
            videoRecord: videoRecord
        });
    }
    
    update(videoRecord) {
        this.setState({
            videoRecord: videoRecord
        });
    }
}

export default alt.createStore(VideoRecordsStore);