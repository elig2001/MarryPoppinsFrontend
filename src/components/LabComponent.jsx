import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// function LabComponent({username, password, ip, name, online}) {

//   let card_color = online ?   "#00FF7F" : "#FF0000"

//   return (
//     <Card style={{ width: '14rem'}}>
//       <Card.Body>

//         <Card.Title>{name}</Card.Title>

//         <Accordion defaultActiveKey="0">
//         <Accordion.Item eventKey="0">
//             <Accordion.Header>Credentials</Accordion.Header>
//             <Accordion.Body>
//                 <ListGroup variant="flush">
//                 <ListGroup.Item>IP Address: {ip}</ListGroup.Item>
//                 <ListGroup.Item>Username: {username}</ListGroup.Item>
//                 <ListGroup.Item>Password: {password}</ListGroup.Item>
//                 </ListGroup>
//             </Accordion.Body>
//       </Accordion.Item>

//       <Accordion.Item eventKey="1">
//             <Accordion.Header>Run Commands</Accordion.Header>
//             <Accordion.Body>
//             <Form>
//                 <Form.Group className="mb-3" styles={{gap: "5px"}}>
//                     <Form.Control placeholder="Enter Command" />
//                     <Button>Execute</Button>
//                 </Form.Group>
//             </Form>
//             </Accordion.Body>
//       </Accordion.Item>

//       </Accordion>
        

    
//       </Card.Body>
//       <Card.Footer style={{ background: card_color}}></Card.Footer>
//     </Card>
//   );
// }




function LabComponent({username, password, ip, name, online,className}) {

  let card_color = online ?   "#00FF7F" : "#FF0000"

  return (
    <Card style={{ width: '7rem', boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10  px 0 rgba(0, 0, 0, 0.19)", textAlign: "center"}} className={className}>
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem"}}>{name}</Card.Title>
      </Card.Body>
      <Card.Footer style={{ background: card_color}}></Card.Footer>
    </Card>
  );
}

export default LabComponent;