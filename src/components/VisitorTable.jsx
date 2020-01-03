import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

import { VisitorPageSizeSelect } from './VisitorPageSizeSelect.jsx';
import { VisitorRow } from './VisitorRow.jsx';
import { DashBoardTableHeader } from './DashBoardTableHeader.jsx';

export const VisitorTable = props => {
  console.log("visitor table props: ", props)
  if (!props.visitors) {
    return <React.Fragment />;
  }
  const visitorRows = props.visitors.map((visitor, index) => (
    <VisitorRow key={index} visitor={visitor} />
  ));
  
  return (
    <React.Fragment>
      <VisitorPageSizeSelect
        limit={props.limit}
        onChangeLimit={props.onChangeLimit}
      />
      <Table celled selectable sortable>
        <DashBoardTableHeader
          column={props.column}
          direction={props.direction}
          handleSort={props.handleSort}
        />

        <Table.Body>{visitorRows}</Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="10">
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentPage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>        
      Total count: {props.totalCount}.
    </React.Fragment>
  );
};

VisitorTable.propTypes = {
  totalCount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeLimit: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
