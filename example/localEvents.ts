import { DieIndex } from "../types.ts"
/** 
* Local Event definitions
*    Event-Name
*    Callback-Parameter-Type 
*/
export type LocalEvents = {
   three: boolean,
   four: null,
   five: { id: number, name: string },
   die: {index: DieIndex}
}
