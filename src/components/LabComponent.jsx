import Card from 'react-bootstrap/Card';
import React from 'react';



function LabComponent({name, online,onCardMouseEnter,onCardMouseLeave, specialShadow}) {

  let card_color = online ?   "#00FF7F" : "#FF0000"
  let shadow = specialShadow === 1 ? "0 8px 8px 3px rgba(249, 180 , 45, 112)" : "0 2px 4px 0 rgba(19,0 , 0, 0.2)"
  

  return (
    <Card className=""
    style={{
      width: '7rem',"--bs-card-title-spacer-y":0,
      "--bs-card-cap-padding-y": "0.35rem",
      boxShadow: shadow,
      textAlign: "center"
    }}
    onMouseEnter={onCardMouseEnter}
    onMouseLeave={onCardMouseLeave}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem"}}>{name}</Card.Title>
      </Card.Body>
      <Card.Footer style={{ background: card_color, borderWidth: 0}}></Card.Footer>
    </Card>
  );
}

export default LabComponent;