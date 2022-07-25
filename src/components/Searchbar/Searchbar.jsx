
  import React from 'react';
  import { Formik, Form, Field, ErrorMessage } from 'formik';
  import s from "./Searchbar.module.css"
  
  const Searchbar = ({onSubmit, isSubmiting}) => {
    const handleSubmit = (values, actions) => {
      onSubmit(values)
      actions.hendleReset();
    }
    return (
      <Formik
       initialValues={{}}
       onSubmit={(values, actions) => {console.log(values);
       actions.hendleReset()}}>
      <Form  onSubmit={handleSubmit}>
      <label className={s.searchbar}>
     <button type="submit" className={s.button}>
      <span>Search</span>
      </button>
       <Field
        type="text"  name="name" id="name" placeholder="Search images and photos"
          autoComplete="off"
          autoFocus/>
      

         </label>
      </Form>
    </Formik>

    )
  }
  
  export default Searchbar


