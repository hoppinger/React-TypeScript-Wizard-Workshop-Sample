import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from './api'

export type SumNumbersProps = { first:number, second:number }
export type SumNumbersState = { sum:"adding"|number }
export class SumNumbers extends React.Component<SumNumbersProps, SumNumbersState> {
  constructor(props:SumNumbersProps, context:any) {
    super(props, context)
    this.state = { sum:"adding" }
  }

  remoteAddNumbers() {
    Api.addNumbers(Immutable.List<number>([this.props.first, this.props.second]))
      .then(sum => this.setState({...this.state, sum:sum}))
      .catch(e => setTimeout(() => this.remoteAddNumbers(), 200))
  }

  componentWillReceiveProps() {
    this.remoteAddNumbers()
  }

  componentWillMount() {
    this.remoteAddNumbers()
  }

  render() : JSX.Element {
    return this.state.sum == "adding" ?
        <div>Adding...</div>
      :
        <div>The sum is {this.state.sum}</div>
  }
}
