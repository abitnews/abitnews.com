import React from 'react';

const SvgComponent = props => (
  <svg
    id="prefix__Layer_1"
    x={0}
    y={0}
    viewBox="0 0 125 125"
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        '.prefix__st0{fill:none;stroke:#fff;stroke-width:2.719;stroke-miterlimit:10}'
      }
    </style>
    <ellipse className="prefix__st0" cx={63} cy={63.5} rx={60.4} ry={23} />
    <ellipse
      transform="rotate(-30 62.996 63.47)"
      className="prefix__st0"
      cx={63}
      cy={63.5}
      rx={23}
      ry={60.4}
    />
    <ellipse
      transform="rotate(-60 63 63.47)"
      className="prefix__st0"
      cx={63}
      cy={63.5}
      rx={60.4}
      ry={23}
    />
    <circle
      cx={62.7}
      cy={63.1}
      r={6.5}
      fill="#fff"
      stroke="#fff"
      strokeWidth={2.719}
      strokeMiterlimit={10}
    />
  </svg>
);

export default SvgComponent;
