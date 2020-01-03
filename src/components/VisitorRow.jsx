import React from 'react';
import {Image, Table, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {Status} from '../utils/Status'

// const options = [
//   { key: 'EXPECTED', text: 'EXPECTED', value: 'EXPECTED' },
//   { key: 'CHECKED-IN', text: 'CHECKED-IN', value: 'CHECKED-IN' },
//   { key: 'CHECKED-OUT', text: 'CHECKED-OUT', value: 'CHECKED-OUT' },
//   { key: 'NDA-MISSING', text: 'NDA-MISSING', value: 'NDA-MISSING' },
// ]

const imageList = [
  "https://starbyface.com/ImgBase/testPhoto/test2.jpg",
  "https://starbyface.com/ImgBase/testPhoto/test3.jpg",
  "https://media.licdn.com/dms/image/C5603AQHpuvS0nZOSHQ/profile-displayphoto-shrink_200_200/0?e=1573689600&v=beta&t=nhRp7pLSSuvm_HtD6BZwskXkRAG2Ni77bQfWCysvfao",
  "https://www.radcliffe.harvard.edu/sites/default/files/styles/large_body/public/imagefield_crop/field_image/person/anthony-abraham-jack-courtesy-of-anthony-abraham-jack_373px.jpg?itok=k1YaT7lR",
  "https://www.insidehighered.com/sites/default/server_files/styles/medium/public/media/Screen%20Shot%202019-03-12%20at%207.01.14%20PM.png?itok=WxSjB__8",
  "https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/b681c60c-37f6-11e8-8b98-2f31af407cc8?source=next&fit=scale-down&quality=highest&width=1067",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Tr-8q5OtMwflWAvmI8Cs-947VXeb31VqpR4tlrSHr4UZqmHT",
]

export const VisitorRow = props => (
  <Table.Row>
    <Table.Cell>
      {props.visitor.id}
    </Table.Cell>
    
    <Table.Cell >
      <div style={{border: '0.7px solid black', padding: '15px'}}>
        <div> Today </div>
        {props.visitor.checkIn}AM
      </div>
    </Table.Cell>
    
    <Table.Cell>
      {props.visitor.visitorName}
    </Table.Cell>
    
    <Table.Cell>
      {props.visitor.timeOfCheckIn}
    </Table.Cell>
    
    <Table.Cell>
      <Image
          style={{ display:'inline-block'}}
          src={imageList[ Math.floor(Math.random() * imageList.length)]}
          alt=""
          size="tiny"
          circular
      />
       &nbsp; &nbsp; {props.visitor.host}
    </Table.Cell>

    <Table.Cell>
      {props.visitor.company}
    </Table.Cell>

    <Table.Cell>
      <Button.Group color='teal'>
          <Status status={props.visitor.status}/>
      </Button.Group>
    </Table.Cell>

    {/* <Table.Cell>{props.visitor.checkOut}</Table.Cell> */}
    {/* <Table.Cell>{props.visitor.visitDate}</Table.Cell> */}
    
    <Table.Cell>
      <a href="mailto:{props.visitor.hostContact}">{props.visitor.hostContact}</a>
    </Table.Cell>
  </Table.Row>
);

VisitorRow.propTypes = {
  visitor: PropTypes.object.isRequired,
};
