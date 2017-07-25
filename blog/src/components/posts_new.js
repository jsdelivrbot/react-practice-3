import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    //field.input is an object with event handlers and properties
    //use spread operator to distribute to input component
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render(){
    return(
      <form>
        <Field
          label="Title for Post"
          name="title"
          component={this.renderField}
        />

        <Field
          label = "Categories"
          name="categories"
          component={this.renderField}
        />

      <Field
        label="Post Content"
        name="content"
        component={this.renderField}
        />

      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  //Validate the inputs from 'values'
  if(!values.title){
    errors.title="Please enter a title.";
  }
  if(!values.categories){
    errors.categories="Please enter some categories.";
  }
  if(!values.content){
    errors.content="Please enter some content.";
  }

  //if errors is empty, the form is fine to submit
  //if errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate, //pass in helper function
  form: 'PostsNewForm'
})(PostsNew); //connects form to redux state
