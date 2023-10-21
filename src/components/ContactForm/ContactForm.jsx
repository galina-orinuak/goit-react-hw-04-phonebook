import { Component } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css'

export class ContactForm extends Component {
  state = {name: '', number: '',};

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addNewContact(this.state.name, this.state.number, nanoid())
this.reset()
  }

  reset = () => {
    this.setState();
  };

  render() {
    return (
      <div>
        <h2>Phone Book</h2>
        <form className={styles.contactForm} autoComplete="off" onSubmit={this.handleSubmit}>
          <label className={styles.formLabel} > Name <input className={styles.formInput}
            type="text"
            name="name"
            required
            placeholder="enter name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          </label>
         <label  className={styles.formLabel}  >Number <input className={styles.formInput}
            type="tel"
            name="number"
            required
            length="7"
           placeholder="enter phone"
            value={this.state.number}
            onChange={this.handleChange}
          /></label>
          <button className={styles.submitBtn}  type="submin">Add Contact</button>
        </form>
      </div>
    );
  }
}
