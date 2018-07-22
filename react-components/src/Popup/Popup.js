// @flow
import React, { Component } from 'react';

import PopupManager from './PopupManager';

type Props = {
  onRequestClose: () => void,
  isOpen: boolean
};
class Popup extends Component<Props> {
  render() {
    return (
      <PopupManager
        isOpen={this.props.isOpen}
        onRequestClose={this.props.onRequestClose}
      >
        {({ state, handleESCPress, onRequestClose }) => (
          <div className="popup" onKeyPress={handleESCPress}>
            <div className="popup__dialog">
              <h3 className="text-size-38 mb-lg">Request was successfully created!</h3>
              <div className="text-large text-bold mb-md">Your school information</div>

              <div className="mb-lg d-flex text-bold">
                <div>
                  <div className="text-color-muted">Name</div>
                  <div className="text-color-muted">City</div>
                  <div className="text-color-muted">State</div>
                  <div className="text-color-muted">Number of requests</div>
                </div>
                <div className="ml-sm">
                  <div className="text-color-muted">:</div>
                  <div className="text-color-muted">:</div>
                  <div className="text-color-muted">:</div>
                  <div className="text-color-muted">:</div>
                </div>
                <div className="ml-lg">
                  <div>Little Smiles School</div>
                  <div>Adak</div>
                  <div>Alaska</div>
                  <div>3</div>
                </div>
              </div>
              
              <p className="text-color-muted text-small">
                Thank you for signing up! Please share your request link to get
                greater than 10 people at your school signed up.
              </p>
              <a href="http://parentdb-staging.online/signup_requests/new?school_id=4" className="text-small">
                http://parentdb-staging.online/signup_requests/new?school_id=4
              </a>
              <button
                type="button"
                className="popup__btn-close"
                onClick={onRequestClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    fill-rule="evenodd"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M.5.5l23 23M23.5.5l-23 23" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        )}
      </PopupManager>
    );
  }
}

export default Popup;
