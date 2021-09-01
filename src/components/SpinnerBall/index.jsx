import { SpinnerDefault } from '../Spinner';

export const SpinnerBall = props => <div>

  <SpinnerDefault svg={{
    stroke: "currentColor",
    width: props.width ?? "2em",
    height: props.height ?? "2em",
    color: props.color,
    size: props.size,
    viewBox: "0 0 57 57"
  }}>
    <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd">
      <circle cx="5" cy="50" r="5">
        <animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="27" cy="5" r="5">
        <animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="49" cy="50" r="5">
        <animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite"></animate>
        <animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite"></animate>
      </circle>
    </g>
  </SpinnerDefault>

</div>;