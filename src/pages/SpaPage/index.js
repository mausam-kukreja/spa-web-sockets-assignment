import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from '../../PropTypes';
import s from './styles';

class SpaPage extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>hello</div>;
  }
}
SpaPage.propTypes = {
  results: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
};
const selector = (state, { location }) => {
  const { SpaWebSock } = state;
  const { meta, results } = SpaWebSock;

  return {
    loading: meta.loading,
    results,
  };
};

export default withRouter(connect(selector, {})(SpaPage));
