// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
    constructor() {
      this.events = {};
    }
    // Register an event handler
    on(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName].push(callback);
      } else {
        this.events[eventName] = [callback];
      }
    }
  
    // Trigger all callbacks associated
    // with a given eventName
    trigger(eventName) {
      if (this.events[eventName]) {
        for (let cb of this.events[eventName]) {
          cb();
        }
      }
    }
  
    // Remove all event handlers associated
    // with the given eventName
    off(eventName) {
      delete this.events[eventName];
    }
  }
  
  module.exports = Events;

  //test

  const Events = require('./index');

test('Events can be registered then triggered', () => {
  const events = new Events();

  const cb1 = jest.fn();

  events.on('click', cb1);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
});

test('Multiple events can be registered then triggered', () => {
  const events = new Events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  events.on('click', cb1);
  events.on('click', cb2);
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});

test('Events can be triggered multiple times', () => {
  const events = new Events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  events.on('click', cb1);
  events.trigger('click');
  events.on('click', cb2);
  events.trigger('click');
  events.trigger('click');

  expect(cb1.mock.calls.length).toBe(3);
  expect(cb2.mock.calls.length).toBe(2);
});

test('Events can have different names', () => {
  const events = new Events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  events.on('click', cb1);
  events.trigger('click');
  events.on('hover', cb2);
  events.trigger('click');
  events.trigger('hover');

  expect(cb1.mock.calls.length).toBe(2);
  expect(cb2.mock.calls.length).toBe(1);
});

test('Events can be toggled off', () => {
  const events = new Events();

  const cb1 = jest.fn();
  const cb2 = jest.fn();

  events.on('hover', cb2);

  events.on('click', cb1);
  events.trigger('click');
  events.off('click');
  events.trigger('click');

  events.trigger('hover');

  expect(cb1.mock.calls.length).toBe(1);
  expect(cb2.mock.calls.length).toBe(1);
});