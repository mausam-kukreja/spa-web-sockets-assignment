import React from 'react';
import PropTypes from 'prop-types';
import StockItem from './StockItem';

class StockList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderStock = this.renderStock.bind(this);
  }

  renderStock(stock, i) { //eslint-disable-line
    return <StockItem key={stock.name} order={i + 1} stock={stock} />;
  }

  render() {
    if (this.props.loading || !this.props.results.stocks || !this.props.results.stocks.length) {
      return <div>Please wait its loading....</div>;
    }
    return (
      <div>
        <StockItem key={'default'} />
        {this.props.results.stocks.map(this.renderStock)}
      </div>
    );
  }
}

StockList.propTypes = {
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
};

export default StockList;
