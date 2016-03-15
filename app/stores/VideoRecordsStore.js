import VideoRecordsSource from '../sources/VideoRecordsSource.js';
import alt from '../alt';
import Actions from '../actions/VideoRecordsActions.js';

class VideoRecordsStore {
  constructor() {
    this.state = { 
        videoRecords: null,
        errorMessage: null
    };

    this.registerAsync(VideoRecordsSource);
    
    this.bindListeners({
      fetchSucess: Actions.fetchSucess,
      fetchFailed: Actions.fetchFailed
    });
  }
  
  fetchSucess(videoRecords) {
    this.setState({
        videoRecords
    });
  }
  
  fetchFailed(errorMessage){
      this.setState({
        errorMessage
    });
  }
}

export default alt.createStore(VideoRecordsStore);