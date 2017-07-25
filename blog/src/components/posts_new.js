import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

  renderField(field) {
    //field.input is an object with event handlers and properties
    //use spread operator to distribute to input component
    //meta property automatically given to Field component
    const { meta: { touched, error} } = field;
    const className = `form-group ${touched
      && error ? 'has-danger' : '' }`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      <div className="text-help">
          { touched ? error : ''}
        </div>

      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render(){
    const { handleSubmit } = this.props; //comes from reduxForm helper line 76

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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

      <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  //Validate the inputs from 'values'
  if(!values.title || values.title.length < 3){
    errors.title="Please enter a title that is at least 3 characters.";
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
