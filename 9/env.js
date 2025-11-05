// stack이 있다. initial로 초기화. push, pop, find(name), toString
class Env {
  constructor(initial) {
    this.stack = [];
    this.push({ ...initial });
  }

  push(frame) {
    this.stack.push(frame);
  }

  pop() {
    return this.stack.pop();
  }

  find(name) {
    return this.stack.find(frame => name in frame)?.[name];
  }

  toString() {
    return JSON.stringify(this.stack);
  }
}

export default Env;
