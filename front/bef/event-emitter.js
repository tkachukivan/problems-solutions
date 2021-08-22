
// please complete the implementation
class EventEmitter {
    events = new Map();
    subscribe(eventName, callback) {
        let callbackKey = Date.now() + Math.random();
        let eventMap = null;
        if (!this.events.has(eventName)) {
            eventMap = new Map([[callbackKey, callback]]);
            this.events.set(eventName, eventMap);
        } else {
            eventMap = this.events.get(eventName);
            eventMap.set(callbackKey, callback);
        }

        return {
            release() {
                eventMap.delete(callbackKey);
            }
        }
    }

    emit(eventName, ...args) {
        if (!this.events.has(eventName)) return;
        for (const cb of this.events.get(eventName).values()) {
            cb(...args);
        }
    }
}

  // const emitter = new EventEmitter()

  // const callback1 = (...val) => console.log(...val);
  // const callback2 = () => console.log(5);

  // const sub1  = emitter.subscribe('event1', callback1);
  // emitter.emit('event1', 1, 2);
  // emitter.emit('event1', 3);
  // emitter.emit('event1', 1, 2, 3, 5);