import * as yup from 'yup'

const formSchema = yup.object().shape({

    name: yup.string()
    .trim()
    .min(2, 'Name has to be at least 2 characters long')
    .required('Name is required field'),
    pizzaSize: yup.string().required('Size is a required field'),
    instructions: yup.string()
    .trim(),
    sauces: yup.string().required('You must select your sauce')
   

    // termsOfService: yup.boolean()
    // // .required('Temrs of service needs to be checked'),
    // .oneOf([true], 'Must Accept Terms and Conditions')
    })
    
    export default formSchema