import React from 'react';
import BaseMapLayer from './BaseMapLayer.jsx'
import WaypointsMapLayer from './WaypointsMapLayer.jsx';

export default class NotSlippyMap extends React.Component {
  render() {
    const viewBox = this.props.viewport.slice();
    viewBox[0] += 180;
    viewBox[1] += 90;
    return (
      <svg viewBox={viewBox.toString()} xmlns="http://www.w3.org/2000/svg">
        <BaseMapLayer />
        <WaypointsMapLayer waypoints={this.props.waypoints} />
      </svg>
    );
  }
}
