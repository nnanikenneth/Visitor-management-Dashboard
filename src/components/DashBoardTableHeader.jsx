import { Table } from 'semantic-ui-react';
import React from 'react';

export function DashBoardTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>

        <Table.HeaderCell
          width={1}
          sorted={props.column === 'id' ? props.direction : null}
          onClick={() => props.handleSort('id')}
        >
          #
        </Table.HeaderCell>

        <Table.HeaderCell
          width={1}
          sorted={props.column === 'checkIn' ? props.direction : null}
          onClick={() => props.handleSort('checkIn')}
        >
          Scheduled
          {/* /Status */}
        </Table.HeaderCell>

        <Table.HeaderCell
          width={2}
          sorted={props.column === 'visitorName' ? props.direction : null}
          onClick={() => props.handleSort('visitorName')}
        >
          Name
          {/* /Visit Date */}
        </Table.HeaderCell>

        <Table.HeaderCell
          width={2}
          sorted={props.column === 'timeOfCheckIn' ? props.direction : null}
          onClick={() => props.handleSort('timeOfCheckIn')}
        >
          Access
          {/* /Visitor Name */}
        </Table.HeaderCell>

        <Table.HeaderCell
          width={3}
          sorted={props.column === 'host' ? props.direction : null}
          onClick={() => props.handleSort('host')}
        >
          Host
          {/* /Check-in */}
        </Table.HeaderCell>

        <Table.HeaderCell
          width={1}
          sorted={props.column === 'company' ? props.direction : null}
          onClick={() => props.handleSort('company')}
        >
          Host Company
          {/* /Check-out */}
        </Table.HeaderCell>
        
        <Table.HeaderCell
          width={2}
          sorted={props.column === 'status' ? props.direction : null}
          onClick={() => props.handleSort('status')}
        >
          Status
          {/* /Time of Checkin */}
        </Table.HeaderCell>
        
        <Table.HeaderCell
          width={2}
          sorted={props.column === 'hostContact' ? props.direction : null}
          onClick={() => props.handleSort('hostContact')}
        >
          Company
        </Table.HeaderCell>
        
        {/* <Table.HeaderCell
          width={2}
          sorted={props.column === 'host' ? props.direction : null}
          onClick={() => props.handleSort('host')}
        >
          Host
        </Table.HeaderCell>
        <Table.HeaderCell
          width={1}
          sorted={props.column === 'hostContact' ? props.direction : null}
          onClick={() => props.handleSort('hostContact')}
        >
          Host Contact
        </Table.HeaderCell> */}

      </Table.Row>
    </Table.Header>
  );
}