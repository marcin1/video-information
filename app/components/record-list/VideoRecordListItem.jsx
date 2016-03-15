import React from 'react';
import { Link } from 'react-router'

let maxDescLength = 300;


export default class VideoRecordListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let videoRecord = this.props.videoRecord;
        if (videoRecord) {
            return this.renderItem(videoRecord);
        }
        return (<div/>);
    }

    onDelete(id, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.props.onDelete) {
            this.props.onDelete(id);
        }
    }

    renderItem(videoRecord) {
        return (
            <div className="thumbnail">
                <div className="row">
                    <div className="col-sm-4 col-md-4">
                        <Link to={'/view/' + videoRecord.id}>
                            <img className="img-responsive" src={videoRecord.thumbnailUrl} alt={videoRecord.title} />
                        </Link>
                    </div>
                    <div className="col-sm-8 col-md-8">                        
                        <div className="caption">
                            <h3>{videoRecord.title}</h3>
                            <p>{videoRecord.description ? videoRecord.description.slice(0, 200) + "..." : ''}</p>
                        </div>
                        <div>
                            <div className="pull-right">
                                <Link to={'/view/' + videoRecord.id} className="btn btn-default" role="button">
                                    View
                                </Link>
                                <Link to={'/edit/' + videoRecord.id} className="btn btn-default" role="button">
                                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
                                </Link>
                                <a onClick={this.onDelete.bind(this, videoRecord.id) } className="btn btn-default" role="button">
                                    <span className="glyphicon glyphicon glyphicon-remove-sign" aria-hidden="true"></span> Delete
                                </a>
                            </div>
                            <div className="clear-both"></div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


VideoRecordListItem.propTypes = {
    videoRecord: React.PropTypes.object,
    onDelete: React.PropTypes.func
};
VideoRecordListItem.defaultProps = { videoRecord: null };