import { Component } from 'react';
import { Icon, SpinnerAudio, SpinnerBall, SpinnerBars, SpinnerBox, SpinnerClock, SpinnerComment, SpinnerCube, SpinnerDots, SpinnerFacebook, SpinnerGears, SpinnerGrid, SpinnerHearts, SpinnerHourglass, SpinnerInfinity, SpinnerIos, SpinnerOrbit, SpinnerOval, SpinnerPie, SpinnerPuff, SpinnerRadio, SpinnerRings, SpinnerTail } from '..';

export class Input extends Component {

  render() {

    const { placeholder, title, outlined, content, top, bottom } = this.props;

    return (
      <div>
        {top}
        <i className="mdi-account-alert"></i>
        <p>Outlined: {String(outlined)}</p>
        <input placeholder={placeholder} title={title} />
        {content}
        {bottom}
        <Icon icon="divide" color="#dd0023" />
        Icons

        <div className="q-gutter-md row justify-center">
          <SpinnerAudio color="danger" />
          <SpinnerBall color="secondary" size="md" />
          <SpinnerBars />
          <SpinnerBox />
          <SpinnerClock />
          <SpinnerComment color="info" />
          <SpinnerCube />
          <SpinnerDots />
          <SpinnerFacebook />
          <SpinnerGears />
          <SpinnerGrid />
          <SpinnerHearts />
          <SpinnerHourglass />
          <SpinnerInfinity />
          <SpinnerIos />
          <SpinnerOrbit />
          <SpinnerOval />
          <SpinnerPie />
          <SpinnerPuff />
          <SpinnerRadio />
          <SpinnerRings />
          <SpinnerTail />












        </div>

      </div>
    );
  }

}