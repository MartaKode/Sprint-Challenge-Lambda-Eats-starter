import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom'
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './formSchema'
import Picture from './Pizza.jpg'

const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  instructions: '',
  ///// DROPDOWN ////
  pizzaSize: '',
  ///// CHECKBOXES /////
  toppings: {
    mushrooms: false,
    bacon: false,
    olives: false,
    peppers: false,
    pepperoni: false
  },
  ////Radio button////
  sauces: '',
}

const initialFormErrors = {
  name: '',
  pizzaSize: '',
  sauces: '',
}

const initialPizzas = []
const initialDisabled = true

const App = () => {
  //~~~~~~~~States: ~~~~~~~~
  const [pizzas, setPizzas] = useState(initialPizzas)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  //~~~~~~~~~~Helpers: ~~~~~~~~~
  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)

      .then(response => {
        // debugger
        setPizzas([response.data, ...pizzas])

      })
      .catch(error => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = event => {

    const { name } = event.target
    const { value } = event.target

    yup
      .reach(formSchema, name)
      // we can then run validate using the value
      .validate(value)
      .then(valid => {
        // happy path, we can clear the error message
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        // sad path, does not validate so we set the error message to the message 
        // returned from yup (that we created in our schema)
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({ ...formValues, [name]: value })

  }

  const onCheckboxChange = event => {
    const { name } = event.target
    const { checked } = event.target
    // debugger
    setFormValues({
      ...formValues, toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })

  }

  const onSubmit = event => {
    event.preventDefault()

    const newPizza = {
      name: formValues['name'].trim(),
      instructions: formValues['instructions'].trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      toppings: Object.keys(formValues.toppings)
        .filter(topping => {
          return formValues.toppings[topping] === true
        }),
      sauces: formValues.sauces,

    }

    postNewPizza(newPizza)

  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])


  function Pizza({ details }) {
    // debugger
    return (

      <div className='pizza-container' key={details.index}>
        <h4>Name:{details.name} </h4>
        <p>Size: {details.pizzaSize} </p>
        <p>{details.instructions}</p>
        <p>Sauces: {details.sauces}</p>
        
          <div>
            Toppings:
              <ul>
              {details.toppings.map((topping, index) => <li key={index}>{topping}</li>)}
            </ul>
          </div>
        

      </div>

    )
  }
  return (
    <div className='App'>

      <header>

        <h1>Lambda Eats</h1>
        {/* <p>You can remove this code and create your own header</p> */}
        <Link to='/'><button>Home</button> </Link>
        <Link to='/pizza'><button>Pizza?</button></Link>
      </header>


      {/* Routes below */}
      <Switch>

        <Route path='/pizza'>
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            // Today's stuff
            disabled={disabled}
            errors={formErrors}
            onCheckboxChange={onCheckboxChange}
          />

          {pizzas.map((pizza, index) => {
            // debugger
            return (
              <div>
                <h3> This is what you ordered:</h3>
              <Pizza key={index} details={pizza} />
              </div>
            )
          })
          }
        </Route>


        <Route path='/'>
          <img src={Picture} alt="PIZZA"/>
          <div>
          <Link to='/pizza'> <button>Pizza?</button> </Link>
          </div>
        </Route>
      </Switch>

    </div>
  );
};
export default App;
