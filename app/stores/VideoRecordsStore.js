import VideoRecordsSource from '../sources/VideoRecordsSource.js';
import alt from '../alt';
import Actions from '../actions/VideoRecordsActions.js';

class VideoRecordsStore {
  constructor() {
    this.state = { 
        videoRecordsList: null,
        videoRecord: null,
        errorMessage: null,        
    };

    this.registerAsync(VideoRecordsSource);
    
    this.bindListeners({
      fetchSucess: Actions.fetchSucess,
      fetchFailed: Actions.fetchFailed,
      getSucess: Actions.getSucess,
      getFailed: Actions.getFailed
    });
  }
  
  fetchSucess(videoRecords) {
    this.setState({
        videoRecordsList
    });
  }
  
  fetchFailed(errorMessage){
      this.setState({
        errorMessage
    });
  }
  
  getSucess(videoRecords) {
    this.setState({
        videoRecord
    });
  }
  
  getFailed(errorMessage){
      this.setState({
        errorMessage
    });
  }
}

export default alt.createStore(VideoRecordsStore);