import type { DieIndex } from '../types.ts'
import { on } from './main.ts'

export const doSomething = () => {
   // extract methods for coding brevity 
   let me = "Me"

   // test event 'three' = boolean
   on("one", me, (data: string) => console.log('one: ', data))

   // test event 'three' = boolean
   on("two", me, (data: number) => console.log('two: ', data))

   // test event 'three' = boolean
   on("three", me, (data: boolean) => console.log('three: ', data))

   // test event 'four' = null
   on("four", me, (e: null) => console.log('four: Null'))

   // test event 'Five' = {id: 123, name: me}
   on("five", me, (data: {id: number, name: string}) => console.log('five: ', data))

   // test event die = DieIndex
   on("die", "me", (data: {index: DieIndex}) => console.log('die: ', data));
   
}
