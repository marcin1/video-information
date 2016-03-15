import React from 'react';

export default () => {
    return (
        <div>
            <ReactCSSTransitionGroup 
                transitionName="example" 
                transitionEnterTimeout={0} 
                transitionLeaveTimeout={0} 
                transitionAppear={true} 
                transitionAppearTimeout={1500}>
                text
            </ReactCSSTransitionGroup>
        </div>
    );
}