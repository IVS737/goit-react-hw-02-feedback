import { Component } from 'react';

export class Section extends Component {
  render() {
    const { title } = this.props;
    return <h1>{title}</h1>;
  }
}
