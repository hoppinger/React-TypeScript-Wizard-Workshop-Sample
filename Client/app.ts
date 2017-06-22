// import * as Api from "./generated_api"
import * as Wizard from "./wizard"
import 'babel-polyfill'

export function main(target_element_id:string):void {
  Wizard.wizard(target_element_id)
}