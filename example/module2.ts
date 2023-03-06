
import { fire } from './main.ts'

export const doSomethingElse = () => {
   let me = "Me"

   // test event 'three' = boolean
   fire("one", me, "One")

   // test event 'three' = boolean
   //on("two", me, (data) => console.log('two: ', data))
   fire("two", me, 2)


   // test event 'three' = boolean
   fire("three", me, true)

   // test event 'four' = null
   fire("four", me, null)

   // test event 'Five' = {id: 123, name: me}
   fire("five", me, { id: 123, name: me })
   
   // test event die = DieIndex
   fire("die", "me", {index: 0});
   
}
