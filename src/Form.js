import React from 'react';

const Form = (props) => {
    const {
        values,
        onInputChange,
        onSubmit,
        // today's stuff
        disabled,
        errors,
        onCheckboxChange,
    } = props
    // debugger

    // const sauces = [
    //     'blue cheese',
    //     'garlic',
    //     'red',
    //     'marinara'
    // ]

    const extraToppings = [
        'Three cheese',
        'Sausage',
        'Chicken',
        'Onions',
        'Diced Tomatos',
        'Pineapple',
        'Extra Cheese'
    ]

    return (
        <form onSubmit={onSubmit}>

            <div className='errors'>
                {/* 🔥  VALIDATION ERRORS HERE */}
                <div>{errors.name}</div>
                <div>{errors.pizzaSize}</div>
                <div>{errors.sauces}</div>
            </div>

            <header>
                <h1>Build your Pizza here</h1>
            </header>

            <div className='inputs'>
                <label>Name:
        <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        placeholder='Type name'
                    />
                </label>

                <div className='pizzaSize'>
                    <label>Pizza Size:&nbsp;
          <select
                            onChange={onInputChange}
                            value={values.pizzaSize}
                            name='pizzaSize'
                        >
                            <option value=''>- Select a pizza size -</option>
                            <option value='small'>small</option>
                            <option value='medium'>medium</option>
                            <option value='large'>large</option>
                        </select>
                    </label>
                </div>

                {/* /////////////////////////////CHECKBOXES */}
                <div className='toppings'>
                    <h3>Choose your toppings:</h3>

                    <div>
                        <label>Mushrooms
            <input
                                type='checkbox'
                                name='Mushrooms'
                                checked={values.toppings.Mushrooms}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Bacon
            <input
                                type='checkbox'
                                name='Bacon'
                                checked={values.toppings.Bacon}
                                onChange={onCheckboxChange}
                            />

                        </label>
                    </div>
                    <div>
                        <label>Olives
            <input
                                type='checkbox'
                                name='Olives'
                                checked={values.toppings.Olives}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Green Peppers
            <input
                                type='checkbox'
                                name='Peppers'
                                checked={values.toppings.Peppers}
                                onChange={onCheckboxChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>Pepperoni
            <input
                                type='checkbox'
                                name='Pepperoni'
                                checked={values.toppings.Pepperoni}
                                onChange={onCheckboxChange}
                            />

                        </label>
                    </div>
{/* Added extra toppings */}
                    {extraToppings.map(topper => {
                        return (
                            <div>
                                <label>{topper}
                                    <input
                                        type='checkbox'
                                        name={topper}
                                        checked={values.toppings[topper]}
                                        onChange={onCheckboxChange}
                                    />
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className='instructons'>
                    <label>
                        <h4>Special Instructions?</h4>
                        <div>
                            <textarea
                                value={values.instructions}
                                onChange={onInputChange}
                                name='instructions'
                                type='textarea'
                                placeholder='Type instructions here'
                            />
                        </div>
                    </label>
                </div>

                {/* Radio buttons //////// */}
                <h3>Sauces:</h3>
                <label>
                    <input
                        type='radio'
                        name='sauces'
                        value='marinara'
                        onChange={onInputChange}
                    />Marinara
                </label>

                <label>
                    <input
                        type='radio'
                        name='sauces'
                        value='garlic'
                        onChange={onInputChange}
                    />Garlic
                </label>
                <label>
                    <input
                        type='radio'
                        name='sauces'
                        value='BBQ'
                        onChange={onInputChange}
                    />BBQ
                </label>
                <label>
                    <input
                        type='radio'
                        name='sauces'
                        value='alfredo'
                        onChange={onInputChange}
                    />Alfredo
                </label>

                {/* Sauces:
                {sauces.map(sauce=> {return (
                    <div key={sauce}>
                        <label>
                            <input 
                            type='radio'
                            name='sauces'
                            value={sauce}
                            onChange={onInputChange}
                            />
                            {sauce}
                        </label>
                         </div>
                )})
                } */}


            </div>
            <button disabled={disabled}>submit</button>
        </form>
    )
}

export default Form 