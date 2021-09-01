import { SpinnerDefault } from '../Spinner';

export const SpinnerOrbit = props => <div>
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
    <circle cx="50" cy="50" r="44" fill="none" strokeWidth="4" strokeOpacity=".5" stroke="currentColor"></circle>
    <circle cx="8" cy="54" r="6" fill="currentColor" strokeWidth="3" stroke="currentColor">
      <animateTransform attributeName="transform" type="rotate" from="0 50 48" to="360 50 52" dur="2s" repeatCount="indefinite"></animateTransform>
    </circle>
  </SpinnerDefault>


</div>;