import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const limitOptions = [
  { key: '0', value: '10', text: '10' },
  { key: '1', value: '25', text: '25' },
  { key: '2', value: '50', text: '50' },
  { key: '3', value: '100', text: '100' },
  { key: '4', value: '1000', text: '1000' },
];

export const VisitorPageSizeSelect = props => (
  <React.Fragment>
    Records per page:{' '}
    <Dropdown
      inline
      options={limitOptions}
      defaultValue={props.limit}
      onChange={props.onChangeLimit}
    />
  </React.Fragment>
);
