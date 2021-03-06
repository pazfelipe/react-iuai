import { SpinnerDefault } from '../Spinner';

export const SpinnerInfinity = props => <div>
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
    <path
      d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeDasharray="10.691205342610678 10.691205342610678"
      strokeDashoffset="0"
    >
      <animate attributeName="stroke-dashoffset" from="0" to="21.382410685221355" begin="0" dur="2s" repeatCount="indefinite" fill="freeze"></animate>
    </path>
  </SpinnerDefault>

</div>;