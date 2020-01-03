import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import debounce from 'lodash.debounce';
import { VisitorTable } from './VisitorTable.jsx';
import { VisitorFilter } from './VisitorFilter.jsx';

const queryParams = ['_limit', '_order', '_sort', 'q', '_page'];
export default class VisitorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visitors: [],
      _sort: 'id',
      _page: 1,
      _order: null,
      _limit: 10,
      q: '',
      totalCount: 0,
      loading: false,
    };
    // careful about rate limiters here
    this.onSubmitFilter = debounce(this.onSubmitFilter, 800);
  }

  componentDidMount() {
    this.loadData({});
  }

  static directionConverter(order) {
    if (order === 'asc') {
      return 'ascending';
    } else if (order === 'desc') {
      return 'descending';
    } else {
      return null;
    }
  }

  handleSort = clickedColumn => {
    const { _sort, _order } = this.state;

    let newOrder = _order === 'asc' ? 'desc' : 'asc';
    if (_sort !== clickedColumn) {
      newOrder = 'asc';
    }

    this.loadData({
      _sort: clickedColumn,
      _page: 1,
      _order: newOrder,
    });
  };

  onChangeLimit = (event, data) => {
    if (data.value !== this.state._limit) {
      this.loadData({ _limit: data.value, _page: 1 });
    }
  };

  onSubmitFilter = filter => {
    if (filter !== this.state.q) {
      this.loadData({ q: filter, _page: 1 });
    }
  };

  onChangePage = (event, data) => {
    const { activePage } = data;
    if (activePage !== this.state._page) {
      this.loadData({ _page: activePage });
    }
  };

  // createVisitor = visitor => {
  //   fetch(`/visitors/{visitors.id}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(visitor),
  //   }).then(response => {
  //     if (response.ok) {
  //       response.json().then(data => {
  //         const index = this.state.visitors.findIndex(
  //           visitor => visitor.id === data.id
  //         );
  //         this.setState({
  //           visitors: Object.assign([...this.state.visitors], {
  //             [index]: data,
  //           }),
  //         });
  //       });
  //     } else {
  //       response.json().then(error => {
  //         console.log(`Failed to load data: ${error.message}`);
  //       });
  //     }
  //   });
  // };

  loadData = params => {
    const newState = Object.assign({}, this.state, params, { loading: false });
    this.setState({ loading: true });

    queryParams.forEach(function(element) {
      if (!(element in params)) {
        params[element] = newState[element];
      }
    });

    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');

    // Make a request without limit first to get the total number of data.
    let totalCountQuery = '';
    if (params.q !== '') {
      totalCountQuery = `q=${params.q}`;
    }

    fetch(`/visitors?${totalCountQuery}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ totalCount: data.visitors.length });
        });
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }

      this.setState(newState, () => {
        fetch('/visitors?' + query).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.setState({ visitors: data.visitors });
            });
          } else {
            response.json().then(error => {
              console.log(`Failed to load data: ${error.message}`);
            });
          }
          const newState = Object.assign({}, this.state, params, {
            loading: false,
          });
          this.setState(newState);
        });
      });
    });
  };

  render() {
    return (
      <Segment>
        <VisitorFilter
          filter={this.state.q}
          totalCount={this.state.totalCount}
          onSubmitFilter={this.onSubmitFilter}
          loading={this.state.loading}
        />
        <Divider />
        <VisitorTable
          visitors={this.state.visitors}
          totalCount={this.state.totalCount}
          totalPages={Math.ceil(this.state.totalCount / this.state._limit)}
          currentPage={this.state._page}
          onChangePage={this.onChangePage}
          //createVisitor={this.createVisitor}
          column={this.state._sort}
          direction={VisitorList.directionConverter(this.state._order)}
          handleSort={this.handleSort}
          onChangeLimit={this.onChangeLimit}
          limit={this.state._limit.toString()}
        />
      </Segment>
    );
  }
}
