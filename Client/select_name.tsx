import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"

export type SelectNameProps = { value:string, setValue:(new_name:string,callback?:()=>void)=>void, moveNext:() => void }
export type SelectNameState = { }
export class SelectName extends React.Component<SelectNameProps, SelectNameState> {
  constructor(props:SelectNameProps, context:any) {
    super(props, context)
    this.state = {}
  }

  render() : JSX.Element {
    return <div>
             <input type="text"
                    value={this.props.value}
                    onChange={e => this.props.setValue(e.currentTarget.value)}
                   />
             <button disabled={this.props.value.length <= 0} onClick={() => this.props.moveNext()}>Next</button>
           </div>
  }
}