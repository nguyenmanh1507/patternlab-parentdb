// @flow
import { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'lodash/isEmpty';

function fakeFetch(error: boolean = false) {
  return new Promise((resolve, reject) => {
    if (error) {
      reject();
      return;
    }
    window.setTimeout(() => {
      resolve();
    }, 2000);
  });
}

const initialState = {
  state: '',
  city: '',
  school: '',
  firstname: '',
  lastname: '',
  email: '',
  errors: {},
  submiting: false,
  submitSuccess: false
};

type Props = {
  children: any
};
type State = {
  state: string,
  city: string,
  school: string,
  firstname: string,
  lastname: string,
  email: string,
  errors: Object,
  submiting: boolean,
  submitSuccess: boolean
};
class LandingPageFormManager extends Component<Props, State> {
  state = initialState;

  emailValidate = (value: string) => {
    if (!isEmail(value)) {
      this.setState({
        errors: { ...this.state.errors, email: 'Email is not valid' }
      });
    } else {
      const errors = this.state.errors;
      delete errors.email;
      this.setState({
        errors
      });
    }
  };

  handleBlur = (event: SyntheticEvent<HTMLInputElement>) => {
    switch (event.currentTarget.name) {
      case 'email':
        this.emailValidate(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  handleValueChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    await this.emailValidate(this.state.email);

    if (!isEmpty(this.state.errors)) {
      return;
    }

    this.setState({ submiting: true });
    fakeFetch()
      .then(() => {
        this.setState({ submiting: false, submitSuccess: true }, () => {
          console.log('Form submit success', this.state);
        });
      })
      .catch(error => {
        console.log('Form submit error', this.state);
        this.setState({ submiting: false, submitSuccess: false });
      });
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  render() {
    console.log('render', this.state);
    return this.props.children({
      state: this.state,
      handleValueChange: this.handleValueChange,
      handleBlur: this.handleBlur,
      handleSubmit: this.handleSubmit,
      resetForm: this.resetForm
    });
  }
}

export default LandingPageFormManager;
