import uuid from 'node-uuid';
import SourceApi from './VideoRecordsApi.js';
import Actions from '../actions/VideoRecordsActions.js';


let VideoRecordsSource = {
    fetchVideoRecords: {
        remote(state, page, pageSize) {
            return new Promise((resolve, reject) => {
                let result = SourceApi.fetchData(page,pageSize);
                resolve(result);
            })
        },
        success: Actions.fetchSucess,
        error: Actions.fetchFailedd
    },
    getVideoRecord: {
        remote(state, id) {
            return new Promise((resolve, reject) => {
                let videoRecord = SourceApi.get(id);
                resolve(videoRecord);
            });
        },
        success: Actions.getSucess,
        error: Actions.getFailed
    },
    createVideoRecord: {
        remote(state,item) {
            return new Promise((resolve, reject) => {
                SourceApi.insert(item);                
                resolve(item);
            });
        },
        success: Actions.createSucess,
        error: Actions.createFailed
    },
    updateVideoRecord: {
        remote(state, item) {
            return new Promise((resolve, reject) => {
                SourceApi.update(item);
                resolve(item);
            });
        },
        success: Actions.updateSucess,
        error: Actions.updateFailed
    },
    deleteVideoRecord: {
        remote(state, id, page, pageSize) {
            return new Promise((resolve, reject) => {
                SourceApi.delete(id);
                let result = SourceApi.fetchData(page,pageSize);
                resolve(result);
            });
        },
        success: Actions.deleteSucess,
        error: Actions.deleteFailed
    },
}


export default VideoRecordsSource;