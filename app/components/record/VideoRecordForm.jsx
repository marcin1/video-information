import React from 'react';
import { Link } from 'react-router';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';

export default class VideoRecordForm extends React.Component {
    constructor(props) {
        super(props);

    }
    
    render() {        
        return (
            <div>
                <form className="form-horizontal">
                    <div className="form-group">
                <label htmlFor="title" className="col-sm-5 control-label">
                    Title:
                </label>
                <div className="col-sm-7">
                    <input id="title" name="title" value={this.props.videoRecord.title} onChange={this.props.setVideoRecordState} type="text" className="form-control" required maxLength={500} />
                    <span>
                        <span className="text-danger">
                        </span>
                    </span>
                </div>
            </div>
            
             <div className="form-group">
                <label htmlFor="thumbnailUrl" className="col-sm-5 control-label">
                    Thumbnail Url:
                </label>
                <div className="col-sm-7">
                    <input id="thumbnailUrl" name="thumbnailUrl" value={this.props.videoRecord.thumbnailUrl} onChange={this.props.setVideoRecordState} type="text" className="form-control" required maxLength={500} />
                    <span>
                        <span className="text-danger">
                        </span>
                    </span>
                </div>
            </div>
            
             <div className="form-group">
                <label htmlFor="snapshotUrl" className="col-sm-5 control-label">
                    Snapshot Url:
                </label>
                <div className="col-sm-7">
                    <input id="snapshotUrl" name="snapshotUrl" value={this.props.videoRecord.snapshotUrl} onChange={this.props.setVideoRecordState} type="text" className="form-control" required maxLength={500} />
                    <span>
                        <span className="text-danger">
                        </span>
                    </span>
                </div>
            </div>
            
             <div className="form-group">
                <label htmlFor="description" className="col-sm-5 control-label">
                    Text:
                </label>
                <div className="col-sm-7">
                    <textarea id="description" name="description" value={this.props.videoRecord.description} onChange={this.props.setVideoRecordState} rows="5" cols="100" className="form-control" required></textarea>
                    <span>
                        <span className="text-danger">
                        </span>
                    </span>
                </div>
            </div>
            
                </form>

                <div className="break">
                    <div className="pull-right">
                        <Link to="/" className="btn btn-default">Cancel</Link>
                        <button onClick={this.props.saveVideoRecord} type="submit" className="btn btn-default">Save</button>
                    </div>
                </div>
            </div>
        );
    }
}


VideoRecordForm.propTypes = {
    videoRecord: React.PropTypes.object,
};
VideoRecordForm.defaultProps = { 
    videoRecord : {
                title: null,
                description: null,
                thumbnailUrl: null,
                snapshotUrl: null
    }
        };


