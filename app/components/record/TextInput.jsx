import React from 'react';


export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let input = getInput();        

        return (
            <div className="form-group has-error">
                <label for="title" className="col-sm-5 control-label">
                    {this.props.text}
                </label>
                <div className="col-sm-7">
                    {input}
                    <span>
                        <span className="text-danger">
                        </span>
                    </span>
                </div>
            </div>
        );
    }
    
    getInput() {         
        if (this.props.multiline) {
            return <input id={this.props.bindTo} type="text" className="form-control" required maxlength={50} />
        } else {
            return <textarea id={this.props.bindTo} rows="5" cols="100" className="form-control" required/>
        }
    }
}