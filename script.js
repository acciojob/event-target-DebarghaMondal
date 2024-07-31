class EventTarget {
    constructor() {
      this.listeners = new Map();
    }
  
    addEventListener(event, callback) {
      // If event already exists in the map
      if (this.listeners.has(event)) {
        // Get the existing array and add the new callback
        this.listeners.get(event).push(callback);
      } else {
        // Else, add new event with the callback function in an array
        this.listeners.set(event, [callback]);
      }
    }
  
    removeEventListener(event, callback) {
      // If event exists
      if (this.listeners.has(event)) {
        // Get the array of callbacks
        let listeners = this.listeners.get(event);
        // Filter out the specific callback
        listeners = listeners.filter(listener => listener !== callback);
        // Update the listeners map
        this.listeners.set(event, listeners);
      }
    }
  
    dispatchEvent(event) {
      // If event exists
      if (this.listeners.has(event)) {
        // Get the array of callbacks and execute each one
        this.listeners.get(event).forEach(callback => callback());
      }
    }
}