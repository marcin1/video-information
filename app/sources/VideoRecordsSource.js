import uuid from 'node-uuid';
import SourceApi from './VideoRecordsApi.js';
import Actions from '../actions/VideoRecordsActions.js';

var mockData = [
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg',
        snapshotUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://gallery.thesemite.com/var/resizes/Nepal-2012/IMG_0848.jpg?m=1342483091',
        snapshotUrl: 'http://gallery.thesemite.com/var/resizes/Nepal-2012/IMG_0848.jpg?m=1342483091'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png',
        snapshotUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Typography_Line_Terms.svg/2000px-Typography_Line_Terms.svg.png'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dubai-CN-Sears-towers.svg/2000px-Dubai-CN-Sears-towers.svg.png',
        snapshotUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Dubai-CN-Sears-towers.svg/2000px-Dubai-CN-Sears-towers.svg.png'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg',
        snapshotUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg'
    },
    {
        id: uuid.v4(),
        title: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ante odio. Phasellus ut placerat libero. Aenean dictum ipsum elit, eget sollicitudin orci consequat non. Nullam ut eleifend nisi, et aliquet massa. In imperdiet scelerisque fermentum. Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam in laoreet mi. Aliquam nec eleifend libero, sit amet viverra lorem. Fusce convallis, dui eget pharetra mollis, purus justo commodo tortor, sit amet ultricies nulla est in lectus.',
        thumbnailUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg',
        snapshotUrl: 'http://getuikit.com/docs/images/placeholder_200x100.svg'
    },
];

let VideoRecordsSource = {
    fetchVideoRecords: {
            remote(state, page, pageSize) {
                return new Promise((resolve, reject) => {
                    let videoRecords = SourceApi.fetch();
                    if (videoRecords == null)
                    {
                        SourceApi.set(mockData);
                        videoRecords = mockData;
                    }
                    let result = {
                        totalPages : videoRecords.length,
                        videoRecords : videoRecords.slice(page * pageSize, (page + 1) * pageSize )
                    }
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
        remote(state) {
            return new Promise((resolve, reject) => {
                let videoRecord = state.videoRecord;
                SourceApi.insert(videoRecord);
                resolve(videoRecord);
            });
        },
        success: Actions.createSucess,
        error: Actions.createFailed
    },
    updateVideoRecord: {
        remote(state) {
            return new Promise((resolve, reject) => {
                let videoRecord = state.videoRecord;
                SourceApi.update(videoRecord);
                resolve(videoRecord);
            });
        },
        success: Actions.updateSucess,
        error: Actions.updateFailed
    },
    deleteVideoRecord: {
        remote(state, id) {
            return new Promise((resolve, reject) => {
                SourceApi.delete(id);
                resolve(id);
            });
        },
        success: Actions.deleteSucess,
        error: Actions.deleteFailed
    },
}


export default VideoRecordsSource;