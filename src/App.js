
import './App.css';
import NavigationBar from './components/Navbar/Navbar'
import AutoLayoutVariableExample from './components/Grid/Grid'
import SteppedLineTo  from 'react-lineto';


function App() {

  let components = {
    "slashnets" : [
      {
        "name" : "stress",
        "online" : true
      },
      {
        "name" : "nigger1",
        "online" : false
      }
    ],
    "slashComponents" : [
      {
        "name" : "yugio1",
        "online" : false
      },
      {
        "name" : "yugio2",
        "online" : false
      },
      {
        "name" : "yugio3",
        "online" : true
      },{
        "name" : "yugio4",
        "online" : true
      },{
        "name" : "yugio5",
        "online" : false
      },{
        "name" : "yugio6",
        "online" : true
      },{
        "name" : "yugio7",
        "online" : true
      }
    ],
    "slalomComponents": [
      {
        "name": "phys1",
        "online": true
      },
      {
        "name": "phys2",
        "online": true
      },{
        "name": "phys3",
        "online": false
      },{
        "name": "virt1",
        "online": true
      },{
        "name": "virt2",
        "online": true
      },{
        "name": "virt3",
        "online": true
      },{
        "name": "virt4",
        "online": true
      },{
        "name": "virt5",
        "online": false
      }
    ],
    "smashComponents": [
      {
          "name" : "Tai",
          "online" : false
      },{
        "name" : "Shabtai",
        "online" : true
      },{
      "name" : "Tun",
      "online" : true
      },{
      "name" : "Neptun",
      "online" : false
      },{
      "name" : "s1",
      "online" : true
      },{
        "name" : "s2",
        "online" : true
        },{
          "name" : "s3",
          "online" : true
          }
          ,{
            "name" : "s4",
            "online" : true
            }
    ],
    "smashAnimals": [
      {
          "name" : "Shark",
          "online" : false
      },{
        "name" : "Squirrel",
        "online" : true
      },{
      "name" : "Smickey",
      "online" : true
      },{
      "name" : "Snake",
      "online" : false
      },{
      "name" : "Scorpio",
      "online" : true
      },{
        "name" : "honk",
        "online" : true
        },{
          "name" : "bonk",
          "online" : true
          },{
            "name" : "gonk",
            "online" : true
            },{
              "name" : "donkey",
              "online" : true
              
              },{
                "name" : "Mordechai",
                "online" : true
                
                },{
                  "name" : "Falafel",
                  "online" : true
                  
                  },

    ]
  }

  return (
      <div style={{background: "#FAF9F6"}}>
        <NavigationBar/>
        <AutoLayoutVariableExample components={components}/>
        <SteppedLineTo  from="Squirrel card" to="Tai card" />
      </div>
  );
}

export default App;
