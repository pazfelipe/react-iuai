import { Icon, SpinnerTail } from '..';
export const Button = props => {

  const label = props.label;
  const loading = props.loading;
  const disabled = props.disabled;
  const iconLeft = props.iconLeft;
  const iconRight = props.iconRight;
  const rounded = props.rounded;
  const outlined = props.outlined;
  const xs = props.xs;
  const sm = props.sm;
  const md = props.md;
  const lg = props.lg;
  const xl = props.xl;
  const flat = props.flat;
  const link = props.link;

  let color = props.color;
  let style;

  let onClick = props.onClick;
  let onDoubleClick = props.onDoubleClick;
  let onContextMenu = props.onContextMenu;

  const whiteIcon = props.color ? 'white' : undefined;

  const ContentNotDisabled = () => (
    <div>

      {iconRight ?
        <span>
          <Icon icon={iconRight} color={whiteIcon} />
        </span>
        : null
      }

      <span className="uiai-btn--label">{label}</span>

      {iconLeft ?
        <span>
          <Icon icon={iconLeft} color={whiteIcon} />
        </span>
        : null
      }
    </div>
  );

  const ContentLoading = () => (
    <div>
      <SpinnerTail />
    </div>
  );

  const ContentDisabled = () => (
    <div>
      <span>Disabled</span>
    </div>
  );

  let classnames = [];

  if (xs) {
    classnames.push('xs');
  }

  if (sm) {
    classnames.push('sm');
  }

  if (md) {
    classnames.push('md');
  }

  if (lg) {
    classnames.push('lg');
  }

  if (xl) {
    classnames.push('xl');
  }

  if (rounded) {
    classnames.push('rounded');
  }

  if (loading) {
    classnames.push('loading');
  }

  if (disabled) {
    classnames.push('disabled');
  }

  if (outlined) {
    classnames.push('outlined');
  }

  if (flat) {
    classnames.push('flat');
  }

  if (link) {
    classnames.push('link');
  }

  if (color && /^[a-z].+$/.test(color)) {
    classnames.push(String(color).toLowerCase());
  }

  if (/^#.+/.test(color)) {
    style = {
      backgroundColor: color
    };
  }

  classnames = classnames.filter(p => p).map(o => `uiai-btn__${o}`).join(' ');

  const ButtonContent = loading
    ? <ContentLoading />
    : disabled
      ? <ContentDisabled />
      : <ContentNotDisabled />;

  if (disabled || loading) {
    onClick = undefined;
    onDoubleClick = undefined;
    onContextMenu = undefined;
  } else {
    onClick = props.onClick;
    onDoubleClick = props.onDoubleClick;
    onContextMenu = props.onContextMenu;
  }

  return (
    <button
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onContextMenu={onContextMenu}
      className={`uiai-btn ${classnames}`}
      style={style}
    >
      {ButtonContent}
    </button>
  );
};