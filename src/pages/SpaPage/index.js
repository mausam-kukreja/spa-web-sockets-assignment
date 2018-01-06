import React from 'react';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import onStockUpdate from '../../actions';
import s from './styles';

class SpaPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
  }

  handleUpdateMessage(data) {
    this.props.onStockUpdate({ data: JSON.parse(data) });
  }

  renderStockItem() {}

  render() {
    return (
      <div>
        <Websocket url="ws://stocks.mnet.website/" onMessage={this.handleUpdateMessage} />
      </div>
    );
  }
}

SpaPage.propTypes = {
  results: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  onStockUpdate: PropTypes.func.isRequired,
};

const selector = (state, { location }) => {
  const { SpaWebSock } = state;
  const { meta, results } = SpaWebSock;

  return {
    loading: meta.loading,
    results,
  };
};
export default withRouter(
  connect(selector, {
    onStockUpdate,
  })(SpaPage),
);
