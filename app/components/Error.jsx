import React from 'react';

export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let msg = this.props.message;
        if (this.props.message == null) {
            msg = "Could not load any data due to unexpected error";
        }
        return (
                <div>
                    <div className="alert alert-warning" role="alert">
                        {msg}
                    </div>
                </div>
            );
    }
}

Error.propTypes = {
    message: React.PropTypes.string,
};
Error.defaultProps = { message: null };
