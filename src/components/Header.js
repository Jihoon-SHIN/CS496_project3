import React from 'react';
//a tag 대신 ,  react-router의 Link component사용
import { Link } from 'react-router';
import { Search } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends React.Component {

    constructor(props) {
        super(props);

        // IMPLEMENT: CREATE A SEARCH STATUS

        this.state = {
            search: false
        };

        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
        this.setState({
            search: !this.state.search
        });
    }

    render() {

        const loginButton = (
            <li>
                <Link to="/login">LOGIN</Link>
            </li>
        );

        const logoutButton = (
            <li>
                <a onClick={this.props.onLogout}>LOGOUT</a>
            </li>
        );

        return (
            <div>
                <nav>
                    <div className = "nav-wrapper blue-grey darken-3">
                        <Link to="/" className="kahveshot left">Kahve Shot</Link>
                        <ul>
                            <li id="search"><a onClick={this.toggleSearch}><i className="material-icons">search</i></a></li>
                            { this.props.isLoggedIn ? logoutButton : loginButton }
                        </ul>
                        <div className="navigation-link navigation-brand right">
                            <ul>
                                <Link to ="/mypage" id = "mypage">my page</Link>
                                <Link to ="/coffee" ><p>BRICK</p></Link>
                                <Link to ="/menu" ><p>Menu</p></Link>
                                <Link to ="/notification" ><p>Notificate</p></Link>
                                <Link to ="/class"><p>Class</p></Link>
                                <Link to ="/store"><p>Store</p></Link>
                            </ul>
                        </div>
                    </div>
                  </nav>
                  <ReactCSSTransitionGroup transitionName="search" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                      { /* IMPLEMENT: SHOW SEARCH WHEN SEARCH STATUS IS TRUE */}
                      {this.state.search ? <Search onClose={this.toggleSearch}
                      onSearch={this.props.onSearch}
                      usernames={this.props.usernames}/> : undefined }
                  </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    onLogout: React.PropTypes.func,
    usernames: React.PropTypes.array
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");},
    usernames: []
};

export default Header;
