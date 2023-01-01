import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LabComponent from '../LabComponent';

function AutoLayoutVariableExample({components,onCardMouseEnter, onCardMouseLeave,shadows}) {
  const styles = {
    col: {
      "display": "flex",
      justifyContent: "center",
      alignContent: "flex-start",
      
    },
    row: {
      marginBottom : "00px",
      marginTop : "0px",
      paddingTop : "30px",
      paddingBottom : "30px",
      rowGap: "20px",
      borderBottom : "solid",
      borderColor :"#808080"
      
    }
  };


    return (
      <Container>
        <Row style={styles.row}>

        {components.slashnets.map((item,index)=>{
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              onCardMouseEnter={()=>onCardMouseEnter(item.id)}
              onCardMouseLeave={()=>onCardMouseLeave(item.id)}
              specialShadow={shadows[item.id]}
              >
              </LabComponent>
         </Col>
     })}
        
          
        </Row >
        <Row style={styles.row}>
            
        {components.slashComponents.map((item,index)=>{
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              onCardMouseEnter={()=>onCardMouseEnter(item.id)}
              onCardMouseLeave={()=>onCardMouseLeave(item.id)}
              specialShadow={shadows[item.id]}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>

        <Row style={styles.row}>
            
        {components.slalomComponents.map((item,index)=>{
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              onCardMouseEnter={()=>onCardMouseEnter(item.id)}
              onCardMouseLeave={()=>onCardMouseLeave(item.id)}
              specialShadow={shadows[item.id]}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>

        <Row style={styles.row}>
            
        {components.smashComponents.map((item,index)=>{
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              onCardMouseEnter={()=>onCardMouseEnter(item.id)}
              onCardMouseLeave={()=>onCardMouseLeave(item.id)}
              specialShadow={shadows[item.id]}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>

        <Row style={styles.row}>
            
        {components.smashAnimals.map((item,index)=>{
         return <Col style={styles.col}>
            <LabComponent 
              name={item.name}
              online={item.online}
              className={item.name}
              onCardMouseEnter={()=>onCardMouseEnter(item.id)}
              onCardMouseLeave={()=>onCardMouseLeave(item.id)}
              specialShadow={shadows[item.id]}
              >
              </LabComponent>
         </Col>
     })}
          
        </Row>
      </Container>
    );
  }
  export default AutoLayoutVariableExample;