import { SpinnerDefault } from '../Spinner';

export const SpinnerPuff = props => <div>
  <SpinnerDefault
    svg={{
      stroke: "currentColor",
      width: props.width ?? "2em",
      height: props.height ?? "2em",
      color: props.color,
      size: props.size,
      viewBox: "0 0 44 44"
    }}
  >
    <g fill="none" fillRule="evenodd" strokeWidth="2">
      <circle cx="22" cy="22" r="1">
        <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
      </circle>
      <circle cx="22" cy="22" r="1">
        <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate>
        <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate>
      </circle>
    </g>
  </SpinnerDefault>


</div>;