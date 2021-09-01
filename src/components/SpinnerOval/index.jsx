import { SpinnerDefault } from '../Spinner';

export const SpinnerOval = props => <div>
  <SpinnerDefault
    svg={{
      stroke: "currentColor",
      width: props.width ?? "2em",
      height: props.height ?? "2em",
      color: props.color,
      size: props.size,
      viewBox: "0 0 38 38"
    }}
  >
    <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd">
      <circle strokeOpacity=".5" cx="18" cy="18" r="18"></circle>
      <path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path>
    </g>
  </SpinnerDefault>


</div>;