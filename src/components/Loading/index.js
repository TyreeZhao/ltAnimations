import React, { Component } from 'react';
import './styles.css';

class Loading extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lines: [
        { timer: null, style: 'grow1' },
        { timer: null, style: 'grow3' },
        { timer: null, style: '' },
        { timer: null, style: 'grow1' },
        { timer: null, style: 'grow1' },
        { timer: null, style: 'grow0' },
        { timer: null, style: 'grow3' },
        { timer: null, style: '' },
      ],   
    }
  }

  componentDidMount() {
    this.state.lines.forEach((line, index) => {
      this.animate(index)
    })
  }

  componentWillUnmount() {
    this.state.lines.forEach(x => {
      clearTimeout(x.timer)
    })
  }

  animate(index) {
    const line = this.state.lines[index]
    line.timer = setTimeout(() => {
      line.timer = setTimeout(() => {
        const ls = [...this.state.lines]
        ls[index].style = this.getClass(index)
        this.setState({ lines: ls })
        line.timer = setTimeout(() => {
          const ls = [...this.state.lines]
          ls[index].style = ''
          this.setState({ lines: ls })
          this.animate(index)
        }, 250)
      }, 250)
    }, this.random(200))
  }
  random(max, min = 0) {
    return parseInt(Math.random() * (max - min)) + min
  }
  getClass(index) {
    const arr = ['grow0', 'grow1', 'grow2', 'grow3']
    const x = this.random(arr.length)
    return arr[x]
  }

  getContent() {
    const list = this.state.lines.map((l, index) => (
      <div className={`${'line'} ${l.style}`} key={index}>
      </div>
    ))
    return (
      <div className={'container'}>{list}</div>
    )
  }
 
  render() {
    return ( 
      <div>
        {this.getContent()} 
      </div>
    );
  }
}

export default Loading;