import { SpinnerDefault } from '../Spinner';

export const SpinnerBox = props => <div>
  <SpinnerDefault
    svg={{
      width: props.width ?? "2em",
      height: props.height ?? "2em",
      color: props.color,
      size: props.size,
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid"
    }}
  >
    <rect x="25" y="25" width="50" height="50" fill="none" strokeWidth="4" stroke="currentColor">
      <animateTransform id="spinnerBox" attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" dur="0.5s" begin="rectBox.end"></animateTransform>
    </rect>
    <rect x="27" y="27" width="46" height="50" fill="currentColor"><animate id="rectBox" attributeName="height" begin="0s;spinnerBox.end" dur="1.3s" from="50" to="0" fill="freeze"></animate></rect>
  </SpinnerDefault>

</div>;