// @flow
import { Component } from 'react';

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
  submiting: boolean
};
class LandingPageFormManager extends Component<Props, State> {
  state = {
    state: '',
    city: '',
    school: '',
    firstname: '',
    lastname: '',
    email: '',
    submiting: false
  };

  handleValueChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    this.setState({ [target.name]: target.value });
    console.log('Value change', target.value);
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({ submiting: true });
    fakeFetch()
      .then(() => {
        console.log('Form submit success', this.state);
        this.setState({ submiting: false });
      })
      .catch(error => {
        console.log('Form submit error', this.state);
        this.setState({ submiting: false });
      });
  };

  render() {
    return this.props.children({
      state: this.state,
      handleValueChange: this.handleValueChange,
      handleSubmit: this.handleSubmit
    });
  }
}

export default LandingPageFormManager;
