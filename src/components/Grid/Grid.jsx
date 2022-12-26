import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LabComponent from '../LabComponent';
import styles from './styles.module.css'
import { isContentEditable } from '@testing-library/user-event/dist/utils';

function AutoLayoutVariableExample({components}) {
  const styles = {
    col: {
      "display": "flex",
      "justify-content": "center",
      "align-content": "flex-start",
      
    },
    row: {
      "margin-bottom" : "00px",
      "margin-top" : "0px",
      "padding-top" : "30px",
      "padding-bottom" : "30px",
      "row-gap": "20px",
      
      "border-bottom" : "solid",
      "border-color" :"#808080"
      
    }
  };
  console.log(components)


    return (
      <Container>
        <Row style={styles.row}>

        {components.slashnets.map((item,index)=>{
          console.log(item)
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              className={item.name}
              online={item.online}
              >
              </LabComponent>
         </Col>
     })}
        
          
        </Row >
        <Row style={styles.row}>
            
        {components.slashComponents.map((item,index)=>{
          console.log(item)
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              className={item.name}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>

        <Row style={styles.row}>
            
        {components.slalomComponents.map((item,index)=>{
          console.log(item)
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              className={item.name}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>

        <Row style={styles.row}>
            
        {components.smashComponents.map((item,index)=>{
          console.log(item)
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              className={item.name}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>

        <Row style={styles.row}>
            
        {components.smashAnimals.map((item,index)=>{
          console.log(item)
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              className={item.name}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>
      </Container>
    );
  }
  export default AutoLayoutVariableExample;