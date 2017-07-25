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
          label="Title"
          name="title"
          component={this.renderField}
        />

        <Field
          label = "Tags"
          name="tags"
          component={this.renderField}
        />


      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew); //connects form to redux state
