// @flow
import { Component } from 'react';

type Props = {
  children: any,
  onRequestClose: () => void,
  isOpen: boolean
};

class PopupManager extends Component<Props> {
  handleESCPress = (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
    console.log(event.key);
    if (event.key === 'Escape') {
      this.props.onRequestClose();
    }
  };

  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    return this.props.children({
      state: this.state,
      handleESCPress: this.handleESCPress,
      onRequestClose: this.props.onRequestClose
    });
  }
}

export default PopupManager;
