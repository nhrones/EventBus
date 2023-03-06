import type { BaseEvents } from './baseEvents.ts'
import { LocalEvents } from './localEvents.ts'
import { buildEventBus } from '../busFactory.ts'
import { doSomething } from './module1.ts'
import { doSomethingElse } from './module2.ts'


/** 
 * Use a factory function to create a new EventBus service 
 * using an intersection type from `Base` and `Local` types. 
 */
const eventBus = buildEventBus<BaseEvents & LocalEvents>()
export const { on, fire} = eventBus
doSomething()
doSomethingElse()