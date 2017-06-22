import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"


export type WizardProps = { }
export type WizardState = { }
export class Wizard extends React.Component<WizardProps, WizardState> {
  constructor(props:WizardProps, context:any) {
    super(props, context)
    this.state = {}
  }

  render() : JSX.Element {
    return <div>Hello world from react</div>
  }
}

export function wizard(target_element_id:string):void {
    ReactDOM.render(
      <Wizard />,
      document.getElementById(target_element_id)
    )
}