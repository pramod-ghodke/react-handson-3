import React, {useState} from 'react';

import {Container, Row, Col, Form, Button}  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowLeft } from 'react-bootstrap-icons';

import '../Components/style.css';

import emp from '../Assets/emp.png';
import user from '../Assets/user.png';

const Empform = () => {

    // Usestate fro storing Form Inputs 
    const [store, setStore]= useState({name:'', department:'', rating:'' });
    const [sub,setSub] = useState(false);

     // Usestate for getting or printing outputs in card belpw hr
     const [out, setOut]= useState([]);
     const input1= (e)=>{
          const name = e.target.name;
          const value = e.target.value;
          setStore({...store,[name]:[value]});
          
         //console.log(name, value);
     }

    // Usestate for counter label of card
     //const [counter, setCounter] = useState(0);

     const submitted =(e)=>{
       e.preventDefault();
       setOut([...out,{...store, id:out.length+1}]);
       setSub(true);
       
      


    
     }

  return (
    <>


{sub ? null : <Container>
  <h1 className='text-center mb-2 mt-2'><img src={user}  width={25} height={25} alt="25x25" 
    className="img-fluid me-2 mb-1"></img>Employee Registration Form</h1>
  <Row className="d-flex justify-content-center mt-3 flex-column-reverse flex-md-row">


  <Col md={4}>

  <Form onSubmit={submitted}>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Name
        </Form.Label>
        <Col sm={8}>
          <Form.Control type="name" placeholder="Enter Name" name="name" value={store.name} onChange={input1} required/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Department
        </Form.Label>
        <Col sm={8}>
      <Form.Select  name="department" value={store.department} onChange={input1} required>
      <option selected disabled value="">Choose Department</option>
      <option value="General">General</option>
      <option value="Marketing">Marketing</option>
      <option value="Finance">Finance</option>
      <option value="Sales">Sales</option>
    
    </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={4}>
          Rating
        </Form.Label>
        <Col sm={8}>
        <Form.Select name="rating" value={store.rating} onChange={input1} required>
      <option selected disabled value="">Rate out of 5</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
        </Col>
      </Form.Group>

    <Form.Group as={Row} className="mb-3">
        <Col xs={{ span: 4, offset: 4 }}>
          <Button type="submit" className='btn-submit'>Sumbit</Button>
        </Col>
      </Form.Group>
    </Form>
      

   </Col>
   <Col md={2} className='text-center'>
    <img src={emp} width={150} height={150} alt="150x150"   
    className='img-fluid emp m-auto'></img>
   </Col>
  </Row>
  <hr/>
</Container>

}

{(sub ? <>
<Container className="mt-5">
  <Row>
    
  <Col className="d-flex flex-wrap justify-content-evenly">
    {out.map(ele =>(

      <div className="mb-3 me-2 out">
        <button className='btn btn-id_counter'>{ele.id}</button>
      <h5>Name: {ele.name}</h5>
        <h5>Department: {ele.department}</h5>
        <h5>Rating: {ele.rating}</h5>
      </div>
    
      
 
    ))}
      
    </Col>
    <Row className='justify-content-center mt-5'>
      <Col xs={4} md={2}>
      <Button onClick={()=>{setSub(!sub)}} className='btn btn-block btn-back'><ArrowLeft className='me-2'/>Go Back</Button>
      </Col>

    </Row>

 
  </Row>
</Container> </> :null)}



    </>
    
  )
}

export default Empform;