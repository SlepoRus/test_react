import React from 'react';
import { bulletin } from '../../api/';
import { Board, Pagination } from '../../components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { boardRead, boardDelete } from '../../redux/actions/board';
class BoardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      limit: 20,

    }
  }

  componentDidMount() {
    const { limit } = this.state;
    const { page } = this.props;
    this.props.dispatch(boardRead({ limit, page }))
  }

  handleDelete = (e) => {
    this.props.dispatch(boardDelete(e));
  }

  handlePage = (page) => {
    const { limit } = this.state;
    this.props.dispatch(boardRead({ limit, page }))
  }
  render() {
    const { limit } = this.state;
    const { data, page, total_count } = this.props;
    return (
      <div>
        <Board data={data} onDelete={this.handleDelete}/>
        <Pagination count={limit} page={page} max={10} total_count={total_count} onClick={this.handlePage} />
      </div>
    )
  }
}

function mapToStateProps(state) {
  const { data, page, total_count } = state.board;

  return { data, page, total_count };
}

BoardList.propTypes = {
  data: PropTypes.array,
  page: PropTypes.number,
  total_count: PropTypes.number,
}
export default connect(mapToStateProps)(BoardList);
