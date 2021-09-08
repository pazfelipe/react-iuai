import { Component } from 'react';

import './style.scss';

export class Icon extends Component {

  state = {
    icon: ''
  };

  findIcon = () => {
    const svg = this.props.icon;
    const icon = require(`../../assets/icons/feather/${svg}.svg`).default;
    this.setState({ icon });
  };

  componentDidMount() {
    this.findIcon();
  }
  render() {
    const { icon } = this.state;

    const color   = this.props.color  ?? '#000';
    const width   = this.props.width  ?? '24px';
    const height  = this.props.height ?? '24px';

    const style = {
      backgroundColor: color,
      maskImage: `url(${icon})`,
      width,
      height
    };

    return (
      <i style={style} className="uiai-icon" />
    );
  }
}