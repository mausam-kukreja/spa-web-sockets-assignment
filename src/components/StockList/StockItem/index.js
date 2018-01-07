import React from 'react';
import PropTypes from 'prop-types';
import s from '../styles';

class StockItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      diff: 0,
    };
  }

  componentWillReceiveProps(props) {
    if (JSON.stringify(this.props.stock) !== JSON.stringify(props.stock)) {
      const diff = props.stock.value - this.props.stock.value > 0 ? 1 : props.stock.value !== this.props.stock.value ? -1 : 0;
      this.setState({ diff });
    }
  }
  render() {
    return (
      <s.ListBox>
        <s.stock diff={0}>
          {this.props.stock.name || 'Ticker'}
        </s.stock>
        <s.stock diff={this.state.diff}>
          {this.props.stock.value || 'Price'}
        </s.stock>
        <s.stock diff={0}>
          {this.props.stock.timeAgo || 'Last Update'}
        </s.stock>
      </s.ListBox>
    );
  }
}
StockItem.defaultProps = {
  stock: {
    name: null,
    value: null,
    time: null,
    timeAgo: null,
  },
};

StockItem.propTypes = {
  stock: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    time: PropTypes.number,
    timeAgo: PropTypes.string,
  }),
};

export default StockItem;
