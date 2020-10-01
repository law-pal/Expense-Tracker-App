import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, Container, FormGroup, Form, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

 class Expenses extends Component {

   emptyItem = {
      id: '100',
      expensedate: '',
      description: '',
      location: '',
      categories: [1, 'Travel']
   }
   
   constructor(props){
      super()
      this.state = {
      isLoading: true,
      expenses: [],
      Categories: [],
      item: this.emptyItem,
      date: new Date()
      }
   }

   async componentDidMount(){
      const response = await fetch('/expense_api/categories');
      const body = await response.json();
      this.setState({Categories: body, isLoading: false});
   }

   render() {
      const title = <h3>Add Expense</h3>;
      const {Categories, isLoading} = this.state;
      if(isLoading)
         return(<div>Loading...</div>)

         let optionList =
         
            Categories.map(category => 
               <option id={category.id}>
                  {category.name}
               </option>)
         


      return (
         <div>
            <Container>
               {title}
               <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                     <Label for='title'>Title</Label>
                     <Input type='text' name='title' id='title' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                     <Label for='category'>Category</Label>
                     <select>{optionList}</select>
                    
                     <Input type='text' name='category' id='category' onChange={this.handleChange}/>
                  </FormGroup>
                  <FormGroup>
                     <Label for='expenseDate'>Expense Date</Label>
                     <DatePicker selected={this.state.date} onChange={this.handleChange}/>
                  </FormGroup>
                  <div className='row'>
                  <FormGroup className='col-md-4 mn-3'>
                     <Label for='location'>Location</Label>
                     <Input type='text' name='location' id='location' onChange={this.handleChange}/>
                  </FormGroup>
                  </div>
                  <FormGroup>
                     <Button color='primary' type='submit'>Save</Button>{' '}
                     <Button color='secondary' tag={Link} to='/categories'>Cancel</Button>
                  </FormGroup>
               </Form>
            </Container>
         </div>
      )
   }
}


export default Expenses;