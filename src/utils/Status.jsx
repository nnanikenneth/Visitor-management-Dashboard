import React from 'react';
import {Label} from 'semantic-ui-react';

export function Status(props) {
    let status;

    if (props.status === 'EXPECTED') {
        status = <Label color="blue" size="tiny">{props.status}</Label>
    }
    if (props.status === 'CHECKED-IN') {
        status = <Label color="green" size="tiny">{props.status}</Label>
    }
    if (props.status === 'CHECKED-OUT') {
        status = <Label color="grey" size="tiny">{props.status}</Label>
    }
    if (props.status === 'NDA-MISSING') {
        status = <Label color="red" size="tiny">{props.status}</Label>
    }

    return (
      <div>
          {status}
      </div>
    );
}
