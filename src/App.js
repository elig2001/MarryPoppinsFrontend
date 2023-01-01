
import './App.css';
import NavigationBar from './components/Navbar/Navbar'
import AutoLayoutVariableExample from './components/Grid/Grid'
import { useState } from 'react';



function App() {

  const chains = [
    [
      "0", "8", "13", "20", "27"
    ],
    [
      "1","5","14","22","26"
    ]
  ]

  
  



  const components = {
    "slashnets": [
      {
        "name": "stress",
        "id": 0,
        "online": true
      },
      {
        "name": "nigger1",
        "id": 1,
        "online": false
      }
    ],
    "slashComponents": [
      {
        "name": "yugio1",
        "id": 2,
        "online": false
      },
      {
        "name": "yugio2",
        "id": 3,
        "online": false
      },
      {
        "name": "yugio3",
        "id": 4,
        "online": true
      }, {
        "name": "yugio4",
        "id": 5,
        "online": true
      }, {
        "name": "yugio5",
        "id": 6,
        "online": false

      }, {
        "id": 7,
        "name": "yugio6",
        "online": true
      }, {
        "name": "yugio7",
        "id": 8,
        "online": true
      }
    ],
    "slalomComponents": [
      {
        "name": "phys1",
        "id": 9,
        "online": true
      },
      {
        "name": "phys2",
        "id": 10,
        "online": true
      }, {
        "name": "phys3",
        "id": 11,
        "online": false
      }, {
        "name": "virt1",
        "id": 12,
        "online": true
      }, {
        "name": "virt2",
        "id": 13,
        "online": true
      }, {
        "name": "virt3",
        "id": 14,
        "online": true
      }, {
        "name": "virt4",
        "id": 15,
        "online": true
      }, {
        "name": "virt5",
        "id": 16,
        "online": false
      }
    ],
    "smashComponents": [
      {
        "name": "Tai",
        "id": 17,
        "online": false
      }, {
        "name": "Shabtai",
        "id": 18,
        "online": true
      }, {
        "name": "Tun",
        "id": 19,
        "online": true
      }, {
        "id": 20,
        "name": "Neptun",
        "online": false
      }, {
        "id": 21,
        "name": "s1",
        "online": true
      }, {
        "id": 22,
        "name": "s2",
        "online": true
      }, {
        "id": 23,
        "name": "s3",
        "online": true
      }
      , {
        "id": 24,
        "name": "s4",
        "online": true
      }
    ],
    "smashAnimals": [
      {
        "id": 25,
        "name": "Shark",
        "online": false
      }, {
        "id": 26,
        "name": "Squirrel",
        "online": true
      }, {
        "id": 27,
        "name": "Smickey",
        "online": true
      }, {
        "id": 28,
        "name": "Snake",
        "online": false
      }, {
        "id": 29,
        "name": "Scorpio",
        "online": true
      }, {
        "id": 30,
        "name": "honk",
        "online": true
      }, {
        "id": 31,
        "name": "bonk",
        "online": true
      }, {
        "id": 32,
        "name": "gonk",
        "online": true
      }, {
        "id": 33,
        "name": "donkey",
        "online": true

      }, {
        "name": "Mordechai",
        "id": 34,

        "online": true

      }, {
        "id": 35,
        "name": "Falafel",
        "online": true

      },

    ]
  }


  
  function calculateComponentAmount() {
    let sum = 0;
    for(var key in components) {
      sum += components[key].length
   }
    return sum
  }

  function createFirstShadowState() {
    let array = new Array(calculateComponentAmount())
    array.fill(0);
    return array

  }

  const [shadows,setShadows] = useState(createFirstShadowState());

  function clearShadows() { 
    let newShadows = shadows.slice();
    newShadows.fill(0);
    setShadows(newShadows)
}

  function getChainByID(id) {
    chains.forEach(chain => {
      if(chain.includes(String(id))) {
          console.log("found id : " + id + " inside of: " + chain)
          console.log("sending the following chain to changeCardShadow: "  + chain)
          changeCardShadow(chain)
          
      }
    });
  }

  function changeCardShadow(ids) {
    console.log("changeCardShadow: ids = " + ids)

    if(ids === undefined) { return; }


    let newShadows = shadows.slice();
    ids.forEach(id => {
      newShadows[id] = 1;
    });
    setShadows(newShadows);
  }

  function onMouseEnter(id) {
    let chain = getChainByID(id);
    changeCardShadow(chain);
  }

  function onMouseLeave(id) {
    console.log("entererd hedere")
    if(shadows[id] === 1) {
      clearShadows()
    }
  }

  


  return (
    <div style={{ background: "#FAF9F6" }}>
      <NavigationBar />
      <AutoLayoutVariableExample components={components} onCardMouseEnter={onMouseEnter} onCardMouseLeave={onMouseLeave} shadows={shadows}/>
    </div>
  );
}

export default App;
