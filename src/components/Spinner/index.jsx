export const SpinnerDefault = props => {
  const color = props?.svg?.color ?? 'primary';
  let { width, height } = props.svg;

  switch (String(props?.svg?.size).toLowerCase()) {
    case 'xs':
      width = '1em';
      height = '1em';
      break;
    case 'sm':
      width = '1.5em';
      height = '1.5em';
      break;
    case 'md':
      width = '2em';
      height = '2em';
      break;
    case 'lg':
      width = '4em';
      height = '4em';
      break;
    case 'xl':
      width = '8em';
      height = '8em';
      break;
    default:
      width = props.svg.width;
      height = props.svg.height;
      break;
  }

  const svgProps = {
    ...props.svg,
    width,
    height
  };


  return (
    <svg className={`spinner ${color}`} {...svgProps} xmlns="http://www.w3.org/2000/svg">
      {props.children}
    </svg>
  );
}