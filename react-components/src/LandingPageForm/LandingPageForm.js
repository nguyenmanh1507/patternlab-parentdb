// @flow
import React, { Component, Fragment } from 'react';

import './styles.min.css';
import LadingPageFormManager from './LadingPageFormManager';
import Popup from '../Popup';

class LandingPageForm extends Component<{}> {
  render() {
    return (
      <LadingPageFormManager>
        {({
          state,
          handleValueChange,
          handleBlur,
          handleSubmit,
          resetForm
        }) => (
          <Fragment>
            <form action="/" className="form" onSubmit={handleSubmit}>
              <h3 className="mb-lg text-center text-size-36">Request a school</h3>
              <div className="row">
                <div className="col">
                  <label htmlFor="state" className="text-small mb-md mb-md">
                    State
                    <span className="text-color-danger">*</span>
                  </label>
                  <select
                    name="state"
                    id="state"
                    className="form__control"
                    onChange={handleValueChange}
                    value={state.state}
                  >
                    <option value="" hidden="hidden">
                      Select your state
                    </option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                  </select>
                </div>

                <div className="col">
                  <label htmlFor="city" className="text-small mb-md">
                    City
                    <span className="text-color-danger">*</span>
                  </label>
                  <select
                    name="city"
                    id="city"
                    className="form__control"
                    onChange={handleValueChange}
                    value={state.city}
                  >
                    <option value="" hidden="hidden">
                      Select your city
                    </option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                  </select>
                </div>

                <div className="col">
                  <label htmlFor="school" className="text-small mb-md">
                    School
                    <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    className="form__control"
                    placeholder="Type your school name"
                    onChange={handleValueChange}
                    value={state.school}
                  />
                </div>
              </div>

              <div className="row mt-lg">
                <div className="col">
                  <label htmlFor="firstname" className="text-small mb-md">
                    First name
                    <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form__control"
                    placeholder="e.g. Emma"
                    onChange={handleValueChange}
                    value={state.firstname}
                  />
                </div>

                <div className="col">
                  <label htmlFor="lastname" className="text-small mb-md">
                    Last name
                    <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="form__control"
                    placeholder="e.g. Wastson"
                    onChange={handleValueChange}
                    value={state.lastname}
                  />
                </div>

                <div className="col form__group">
                  <label htmlFor="email" className="text-small mb-md">
                    Email
                    <span className="text-color-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form__control"
                    placeholder="e.g. emmawastson@email.com"
                    onChange={handleValueChange}
                    value={state.email}
                  />
                  {state.errors.email && (
                    <div className="form__error">
                      Error: Invalid email address
                    </div>
                  )}
                </div>
              </div>

              <div className="row mt-xl">
                <div className="col" />
                <div className="col text-center">
                  <button
                    className="btn btn--mario btn--block text-uppercase text-bold"
                    type="submit"
                    disabled={state.submiting}
                  >
                    {state.submiting ? 'Sending...' : 'Send request'}
                  </button>
                </div>
                <div className="col" />
              </div>
            </form>
            <Popup isOpen={state.submitSuccess} onRequestClose={resetForm} />
          </Fragment>
        )}
      </LadingPageFormManager>
    );
  }
}

export default LandingPageForm;
