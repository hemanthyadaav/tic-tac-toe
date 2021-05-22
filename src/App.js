import React, { useState } from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Icon from './components/Icon';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Row, Col, Button, Container, Card, CardBody} from "reactstrap"

const itemArray = new Array(9).fill("empty");


const App = () => {


  const [winMessage, setWinMessage] = useState("");
  const [isCross, setIsCross] = useState(false);
  
  const reload = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9); 
  }

  const checkIsWinner = () => {
    
    var isEmpty = false; 
    for (let i = 0; i < itemArray.length; i++)
    {
      if (itemArray[i] == "empty")
      {
        isEmpty = true; 
        break; 
      }
    }
    if(!isEmpty)
    {
      // return toast("GAME OVER, NO ONE WINS", {type: error})
      setWinMessage("game over!"); 
    }

    if(itemArray[0] == itemArray[1] && itemArray[0] == itemArray[2] && itemArray[0]!="empty")
    {
      setWinMessage(`${itemArray[0]} WON`);  
    }
    if(itemArray[3] == itemArray[4] && itemArray[3] == itemArray[5] && itemArray[3]!="empty")
    {
      setWinMessage(`${itemArray[3]} WON`);  
    }
    if(itemArray[6] == itemArray[7] && itemArray[6] == itemArray[8] && itemArray[6]!="empty")
    {
      setWinMessage(`${itemArray[6]} WON`);  
    }
    if(itemArray[0] == itemArray[3] && itemArray[0] == itemArray[6] && itemArray[0]!="empty")
    {
      setWinMessage(`${itemArray[0]} WON`);  
    }
    if(itemArray[0] == itemArray[1] && itemArray[0] == itemArray[2] && itemArray[0]!="empty")
    {
      setWinMessage(`${itemArray[0]} WON`);  
    }
    if(itemArray[1] == itemArray[4] && itemArray[1] == itemArray[7] && itemArray[1]!="empty")
    {
      setWinMessage(`${itemArray[1]} WON`);  
    }
    if(itemArray[2] == itemArray[5] && itemArray[2] == itemArray[8] && itemArray[2]!="empty")
    {
      setWinMessage(`${itemArray[2]} WON`);  
    }
    if(itemArray[0] == itemArray[4] && itemArray[0] == itemArray[8] && itemArray[0]!="empty")
    {
      setWinMessage(`${itemArray[0]} WON`);  
    }
    if (itemArray[2] == itemArray[4] && itemArray[2] == itemArray[6] && itemArray[2] != "empty")
    {
      setWinMessage(`${itemArray[2]} WON`);  
    }
  }



  const changeItem = (itemNumber) => {

    if(winMessage)
    {
      return toast(winMessage, {type: "warning"})
    }
    if (itemArray[itemNumber] == "empty")
    {
      itemArray[itemNumber] = isCross ? ("cross") : ("circle");
      setIsCross(!isCross); 
    }
    else
    {
      return toast("Already Filled ", {type : "success"}) 
    }

    checkIsWinner(); 
  }

  return (
    <Container className="p-5">
     <ToastContainer position = "bottom-right" />
      <Row>
        {winMessage ? (
          <div>
              <h1 className="text-uppercase text-success">{winMessage}</h1>
            <Button color="success" block className="mb-3 mt-2" onClick={reload}>RELOAD THE GAME</Button>
          </div>
        )
        :
        (
            <h1 className='text-warning '>{ isCross ? ("CROSS") : ("CIRCLE")} TURN</h1>
        ) }
        <Col md={6} className="offset-md-3">
          <div className="grid">
            {
              itemArray.map((item, index) => (
                <Card color = "warning" onClick={() => changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </Col>
     </Row>
    </Container>
  );
}
export default App;
// offset-md-3 centres the column
// md = 6 implies the width of each cell