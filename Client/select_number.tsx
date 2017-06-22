import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import * as Api from './api'

export type SelectNumberProps = { value: number, setValue: (new_value: number, callback?: () => void) => void, moveNext: () => void, moveBack: () => void }
export type SelectNumberState = { available_numbers:"loading"|Immutable.List<number>, selection:undefined|number }
export class SelectNumber extends React.Component<SelectNumberProps, SelectNumberState> {
  constructor(props:SelectNumberProps, context:any) {
    super(props, context)
    this.state = { available_numbers:"loading", selection:undefined }
  }

  componentWillMount() {
    Api.getAvailableNumbers().then(n => this.setState({...this.state, available_numbers: n}))
  }

  render() : JSX.Element {
    return this.state.available_numbers == "loading" ? <div>Loading...</div>
          :
        <div>
          <select value={this.props.value}
                  onChange={e => this.props.setValue(parseInt(e.currentTarget.value))} >
             <option value=""></option>
             {
               this.state.available_numbers.map(i => <option value={i}>{i}</option>)
             }
           </select>
          <button disabled={!this.state.available_numbers.some(n => n == this.props.value)}
                  onClick={() => this.props.moveNext()}>Next</button>
          
          <button onClick={() => this.props.moveBack()}>Back</button>
        </div>
 }
}
