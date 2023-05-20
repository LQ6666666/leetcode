type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  public eventMap: Map<string, Callback[]>;
  constructor() {
    this.eventMap = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    const events = this.eventMap.get(eventName) ?? [];
    events.push(callback);
    this.eventMap.set(eventName, events);

    return {
      unsubscribe: () => {
        let events = this.eventMap.get(eventName) ?? [];
        events = events.filter(cb => callback !== cb);
        this.eventMap.set(eventName, events);
      }
    };
  }

  emit(eventName: string, args: any[] = []): any {
    const events = this.eventMap.get(eventName) ?? [];
    return events.map(cb => cb(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */

export {};
