// @flow
import React, { Component } from 'react';

import './styles.min.css';
import LadingPageFormManager from './LadingPageFormManager';

class LandingPageForm extends Component<{}> {
  render() {
    return (
      <LadingPageFormManager>
        {({ state, handleValueChange, handleSubmit }) => (
          <div className="container py-xl">
            <form action="/" className="form" onSubmit={handleSubmit}>
              <h3 className="mb-lg text-center">Request a school</h3>
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
                  />
                </div>

                <div className="col">
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
                  />
                </div>
              </div>

              <div className="row mt-lg">
                <div className="col" />
                <div className="col text-center">
                  <button
                    className="btn btn--mario btn--block text-uppercase"
                    type="submit"
                    disabled={state.submiting}
                  >
                    Send request
                  </button>
                </div>
                <div className="col" />
              </div>
            </form>
          </div>
        )}
      </LadingPageFormManager>
    );
  }
}

export default LandingPageForm;
