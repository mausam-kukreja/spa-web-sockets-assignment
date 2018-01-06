import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { onAppInit } from './actions';
import s from './theme';

class SpaWebSockApp extends React.PureComponent {
  constructor(props) {
    super(props);
    onAppInit()(props.dispatch, props.getState);
  }
  render() {
    return (
      <s.SpaWebSockApp>
        <s.Content>
          <s.Main>
            {this.props.children}
          </s.Main>
        </s.Content>
      </s.SpaWebSockApp>
    );
  }
}

SpaWebSockApp.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
};
export default withRouter(SpaWebSockApp);
