import React from 'react';
import { Home } from 'containers';
import { Notification } from 'containers';
class Wall extends React.Component {
    render() {
        return(
            <Notification username={this.props.params.username}/>
        );
    }
}

export default Wall;
