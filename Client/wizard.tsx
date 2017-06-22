import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Immutable from "immutable"
import {SelectName} from "./select_name"
import {SelectNumber} from "./select_number"
import {SumNumbers} from "./sum_numbers"

export type Step1Data = { name:string }
export type Step2Data = { first:number } & Step1Data
export type Step3Data = { second:number } & Step2Data
export type Step4Data = {} & Step3Data

export type Step1State = { step:1 } & Step1Data
export type Step2State = { step:2 } & Step2Data
export type Step3State = { step:3 } & Step3Data
export type Step4State = { step:4 } & Step4Data

export type WizardRecapProps = { state:WizardState }
export type WizardRecapState = {}
export class WizardRecap extends React.Component<WizardRecapProps, WizardRecapState> {
  constructor(props:WizardRecapProps, context:any) {
    super(props, context)
    this.state = {}
  }

  render() : JSX.Element {
    return <div>
      { <div>Step: {this.props.state.step}</div> }
      {
        this.props.state.step == 1 ?
          null
        : this.props.state.step == 2 ?
          <div>Name: {this.props.state.name}</div>
        : this.props.state.step == 3 ?
          <div>Name: {this.props.state.name}, First number: {this.props.state.first}</div>
        :
          <div>Name: {this.props.state.name}, First number: {this.props.state.first}, Second number: {this.props.state.second}</div>
      }
      </div>
  }
}

export type WizardProps = { }
export type WizardState = Step1State | Step2State | Step3State | Step4State
export class Wizard extends React.Component<WizardProps, WizardState> {
  constructor(props:WizardProps, context:any) {
    super(props, context)
    this.state = { step:1, name:"" }
  }

  render() : JSX.Element {
    return <div>
      <WizardRecap state={this.state} />
      {
        this.state.step == 1 ?
          <SelectName value={this.state.name}
                      setValue={(n,c) => this.setState({...this.state, name:n}, c) }
                      moveNext={() => {
                        if (this.state.step != 1) return
                        let new_state:WizardState = {...this.state, step:2, first: 0 }
                        this.setState(new_state)
                        } } />
        : this.state.step == 2 ?
           <SelectNumber value={this.state.first}
                      setValue={(v,c) => this.setState({...this.state, first:v}, c)}
                      moveNext={() => {
                        if (this.state.step != 2) return
                        let new_state:WizardState = {...this.state, step:3, second: 0 }
                        this.setState(new_state)
                        } } 
                      moveBack={() => {
                        if (this.state.step != 2) return
                        let new_state:WizardState = {...this.state, step:1, name: '' }
                        this.setState(new_state)
                        } }
                      />
        : this.state.step == 3 ?
           <SelectNumber value={this.state.second}
                      setValue={(v,c) => this.setState({...this.state, second:v}, c)}
                      moveNext={() => {
                        if (this.state.step != 3) return
                        let new_state:WizardState = {...this.state, step:4 }
                        this.setState(new_state)
                        } } 
                      moveBack={() => {
                        if (this.state.step != 3) return
                        let new_state:WizardState = {...this.state, step:2, first:0 }
                        this.setState(new_state)
                        } } />
        :
           <SumNumbers first={this.state.first}
                       second={this.state.second} />
      }
    </div>
  }
}

export function wizard(target_element_id:string):void {
    ReactDOM.render(
      <Wizard />,
      document.getElementById(target_element_id)
    )
}