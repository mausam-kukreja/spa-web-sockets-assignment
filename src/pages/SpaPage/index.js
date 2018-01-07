import React from 'react';
import { connect } from 'react-redux';
import Websocket from 'react-websocket';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import onStockUpdate from '../../actions';
import { StockList } from '../../components';

class SpaPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleUpdateMessage = this.handleUpdateMessage.bind(this);
  }

  handleUpdateMessage(data) {
    this.props.onStockUpdate({ data: JSON.parse(data) });
  }

  render() {
    return (
      <div>
        <Websocket url="wss://stocks.mnet.website:443" onMessage={this.handleUpdateMessage} />
        {this.props.results.stocks &&
          this.props.results.stocks.length &&
          <StockList loading={this.props.loading} results={this.props.results} />}
      </div>
    );
  }
}

SpaPage.propTypes = {
  results: PropTypes.shape({
    stocks: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
        timeAgo: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
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
