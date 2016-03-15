import React from 'react';
let maxDescLength = 300;


export default class VideoRecordListItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let videoRecord = this.props.videoRecord;
        return (
            <div className="thumbnail">
                <div className="row">
                    <div className="col-sm-4 col-md-4">
                        <img className="img-responsive" src={videoRecord.thumbnailUrl} alt={videoRecord.title} />
                    </div>
                    <div className="col-sm-8 col-md-8">
                        <div className="caption">
                            <h3>{videoRecord.title}</h3>
                            <p>{videoRecord.description ? videoRecord.description.slice(0,200) + "..." : ''}</p>
                        </div>    
                    <div className="pull-right">
                            <a href="#" className="btn btn-default" role="button">
                                View
                            </a>
                            <a href="#" className="btn btn-default" role="button">
                                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
                            </a>
                            <a href="#" className="btn btn-default" role="button">
                                <span className="glyphicon glyphicon glyphicon-remove-sign" aria-hidden="true"></span> Delete
                            </a>
                        </div>                    
                    </div>
                </div>
            </div>
        );
    }
}