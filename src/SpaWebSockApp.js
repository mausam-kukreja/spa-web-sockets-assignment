import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import s from './theme';

class SpaWebSockApp extends React.PureComponent {
  render() {
    return (
      <s.SpaWebSockApp>
        <s.Content>
          <s.Main>
            test Text
            {this.props.children}
          </s.Main>
        </s.Content>
      </s.SpaWebSockApp>
    );
  }
}

SpaWebSockApp.propTypes = {
  children: PropTypes.node.isRequired,
};
export default withRouter(SpaWebSockApp);
