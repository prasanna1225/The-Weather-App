import React,{useState} from "react";
import "./index.css"
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Loading from "./components/Loading";
import illustration from './illustration.png';

const App = () => {

//styling Button
  const buttonStyle = {
    backgroundColor: '#4B77BE',
    borderColor: '#4B77BE',
    fontSize:'15px',
    fontFamily: "'Poppins', sans-serif"
  };

//styling heading
const resultStyle = {
  heading: {
    color: "#4B77BE",
    fontFamily: "'Poppins', sans-serif",
    lineHeight:'1.5',
    fontSize:'24px',
    fontWeight:'bold'
    
  },
  city: {
   color: "#4B77BE",
   fontFamily: "'Poppins', sans-serif"
  }
};

//background
const gradientBg = {
  background: "linear-gradient(90deg, #6C9BCF , white )",
  height:'100vh',
 
};
  
// fetching API
  const [city,setCity]=useState("")
  const [result,setResult]=useState("")
  const [loading, setLoading] = useState(false);
   const changeHandler = e => {
  setCity(e.target.value);
}
 const submitHandler = e =>{
    e.preventDefault();
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},India&appid=bfe4955162a7edbb9aab9c08b81f4c96`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celsius=kelvin-273.15
      
      setResult(
        <div>
          <span className="temperature"  style={{fontFamily: "'Poppins', sans-serif"}}>{Math.round(celsius)} ° Celcius</span>
          <br />
          <span className="city" style={resultStyle.city}>{city}</span>
        </div>
      );
      

      setLoading(false);
      setCity("");
    })
 }
 const fetchData = () => {
  
  // make API call here and handle response
  setTimeout(() => {
    
  }, 3000); // simulating delay for API call
};


 return(
  <div style={gradientBg}>
     <Container  >
      <Row  >
        <Col md={5}  className="card-info">
         
          <Card className="card-body" >
          
            <Card.Body >
           
              <Card.Title><h2  style={resultStyle.heading}>The Weather App</h2></Card.Title>
              <Card.Text>
                <h2 style={{fontSize:'24px',fontWeight:'bold',lineHeight:'1.5'}}> {result} </h2>
               
              </Card.Text>
              {loading && <Loading />}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row >
        <Col md={5} className="mt-3">
          <Card >
          <Card.Body>
          <Form onSubmit={submitHandler}>
          <Row >
            <Col md={8} >
            <Form.Group controlId="formCity"  >
              
              <Form.Control type="text"  placeholder="Enter City" name="city" value={city} onChange={changeHandler} className="my-input" />
            </Form.Group>
            </Col>
            <Col>
            <Button  variant="primary" style={buttonStyle}  type="submit" onClick={fetchData} >
              Get Weather
            </Button>
           
            </Col>
            </Row>
          </Form>
          </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="illustrate ml-3 ">
        <div >
        <img src={illustration} alt="Illustration"  width={400} />
        </div>
        </Col>
       </Row>
      </Container>
      </div>
);
}
export default App;