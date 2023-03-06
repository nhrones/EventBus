/** strongly-types index values for 5 die 0-4 */
export type DieIndex = 0 | 1 | 2 | 3 | 4 ;

/** type for generic Event-Handler callbacks */
export type EventHandler<T = any> = (data: T) => void;

/** validate each Event Types callback parameters */
export type EventContract<T> = { [K in keyof T]: T[K] }

/** An EventBus interface with typed events and callbacks */
export interface EventBus<T extends EventContract<T>> {

   /** register a callback for specific named event */
   on<K extends keyof T>(event: K, id: string, handler: EventHandler<T[K]>): void,

   /** fire a specific named event with an appropriate payload */
   fire<K extends keyof T>(event: K, id: string, args: T[K]): void
}