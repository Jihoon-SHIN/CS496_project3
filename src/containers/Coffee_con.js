import React from 'react';
import { connect } from 'react-redux';
import { Coffee } from 'components';
import { browserHistory } from 'react-router';


class Coffee_con extends React.Component {
    render(){
        return (
          <div>
            <Coffee />
          </div>
        );
    }
}

export default Coffee_con;
