
  import React from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import s from "./Searchbar.module.css"
  
  const Searchbar = ({ onSubmit }) => {
    const handleSubmit = async (values, actions) => {
      await onSubmit(values);
      actions.setSubmitting (false);
      actions.resetForm();
    }
    return (
      <Formik
       initialValues={{  }}
       onSubmit={(values, actions) => { 
         console.log(values)
        actions.resetForm({
         values: {
          image: '',
         }
       }
       )}}>
         { ({isSubmitting}) => (  
            <Form  onSubmit={handleSubmit}>
            <label className={s.searchbar}>
            <button type="submit" className={s.button} disabled={isSubmitting}>
            <span>Search</span>
            </button>
             <Field
              type="text"  name="name" id="name" placeholder="Search images and photos"
                autoComplete="off"
                autoFocus/>
               </label>
            </Form>
           )
         }
         
 
    </Formik>

    )
  }
  
  export default Searchbar


