import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

class PageBlur extends React.Component {
  constructor(props) {
    super(props);
    this.getClasses = this.getClasses.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }
  componentDidMount() {
    if (this.props.active) {
      this.props.onActive();
    }
  }
  componentWillReceiveProps(nprops) {
    if (nprops.active !== this.props.active) {
      if (nprops.active) {
        this.props.onActive();
      } else {
        this.props.offActive();
      }
    }
  }
  getClasses() {
    let classes = [];
    if (this.props.pulse) classes.push('pulse');
    return classes.join(' ') + ' ' + this.props.className;
  }
  getStyle() {
    return Object.assign(
      {},
      this.props.active && style.root,
      {
        opacity: this.props.opacity,
        backgroundColor: this.props.color,
        backgroundImage: this.props.image ? `url('${this.props.image}')` : 'none',
        backgroundRepeat: this.props.imageRepeat,
        backgroundPosition: this.props.imagePosition
      }
    );
  }
  render() {
    if (!this.props.active) return null;

    return (
      <div
        className={this.getClasses()}
        style={this.getStyle()}
        onClick={this.props.onOffClick}
      >
        {this.props.children}
      </div>
    );
  }
}

PageBlur.propsTypes = {
  active: PropTypes.bool,
  opacity: PropTypes.number,
  color: PropTypes.string,
  pulse: PropTypes.bool,
  image: PropTypes.string,
  imageRepeat: PropTypes.oneOf(['repeat', 'repeat-x', 'repeat-y', 'no-repeat']),
  imagePosition: PropTypes.string,
  className: PropTypes.string,
  onOffClick: PropTypes.func,
  onActive: PropTypes.func,
  offActive: PropTypes.func
};

PageBlur.defaultProps = {
  active: false,
  opacity: 0.5,
  color: 'black',
  pulse: false,
  image: undefined,
  imageRepeat: 'repeat',
  imagePosition: 'center',
  className: '',
  onOffClick: () => {},
  onActive: () => {},
  offActive: () => {}
};

const style = {
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99999
  }
};

export default PageBlur;
