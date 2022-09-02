import { Component } from 'react';
import { Vortex } from 'react-loader-spinner';

export class Loader extends Component {
  render() {
    return (
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{ margin: '25vh' }}
        wrapperClassName="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    );
  }
}
