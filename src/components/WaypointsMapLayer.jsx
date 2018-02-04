import React from 'react';

export default class WaypointsMapLayer extends React.Component {
  render() {
    var keyId=0
    const waypoints = this.props.waypoints.map(waypoint => 
      <circle
        key={`waypoint_${keyId++}`}
        cx={waypoint.N + 180}
        cy={90 - waypoint.L}
        r="0.02"
        fill="blue"
      />
    );
    return (
      <g id="WaypointsLayer" fill="none" fillRule="nonzero">
        {waypoints}
      </g>
    );
  }
}
