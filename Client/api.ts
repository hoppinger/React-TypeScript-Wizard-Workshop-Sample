import * as Immutable from "immutable"

export let getAvailableNumbers : () => Promise<Immutable.List<number>> = () => Promise.resolve(Immutable.List<number>([3, 5, 7]))

let counter = 0
export let addNumbers : (_:Immutable.List<number>) => Promise<number> = (numbers) =>
  ++counter % 4 == 0 ?
    Promise.resolve(numbers.reduce((a:number,b:number) => a+b, 0))
  :
    Promise.reject("The server is busy with lots of other requests. Please try again later.")
