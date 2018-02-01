import React from 'react';

export default class WaypointsMapLayer extends React.Component {
  render() {
    const waypoints = this.props.waypoints.map(waypoint => 
      <circle cx={waypoint.N + 180} cy={90 - waypoint.L} r="0.02" fill="blue" />
    );
    return (
      <g id="WaypointsLayer" fill="none" fillRule="nonzero">
        {waypoints}
      </g>
    );
  }
}
