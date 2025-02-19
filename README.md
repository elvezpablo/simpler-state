# <img src="https://simpler-state.js.org/assets/simpler-state-logo.png" alt="SimpleR State" width="240"/>

[![npm](https://img.shields.io/npm/v/simpler-state)](https://www.npmjs.com/package/simpler-state)
[![build](https://img.shields.io/travis/arnelenero/simpler-state)](https://travis-ci.org/github/arnelenero/simpler-state)
[![coverage](https://img.shields.io/coveralls/github/arnelenero/simpler-state)](https://coveralls.io/github/arnelenero/simpler-state)
[![license](https://img.shields.io/github/license/arnelenero/simpler-state)](https://opensource.org/licenses/MIT)

__SimpleR State__ is an ultra-lightweight library that provides the _simplest_ state management for React.

- __Minimalist API__; no complicated concepts or boilerplate
- Use __plain functions__ to update state (including async)
- Largely __unopinionated__ with flexible syntax
- Extremely __simple to unit test__ state logic
- Highly extensible with __plug-ins__ (e.g. persistence, dev tools)
- Full __TypeScript__ support with uncomplicated types
- Made specifically for React, and built on __React Hooks__ 
- Multiple times __faster__ than context/reducer solution
- It's tiny, just __around 1 KB__ (minified + gzipped)

Get all these benefits with one dependency install:
```
npm install simpler-state
```

## Two Easy Steps!

__Step 1:__ Create an entity (shared state) and actions (updater functions)

```js
// counter.js

import { entity } from 'simpler-state'

export const counter = entity(0)

export const reset = () => {
  counter.set(0)
}

export const increment = by => {
  counter.set(value => value + by)  
  // --OR-->  counter.set(counter.get() + by)  
}
```

__Step 2:__ Use the entity in your components with hooks

```jsx
import { counter, increment, reset } from 'counter'

const CounterView = () => {
  const count = counter.use()
  // --OR-->  const count = useEntity(counter)

  return (
    <>
      <div>{count}</div>

      <button onClick={() => increment(1)}> + </button> 
      <button onClick={reset}> Reset </button>
    </>
  )
}
```

It's that simple! __But the library can do a lot more, so check out the docs website.__ 

## Documentation

Learn more about what you can do with SimpleR State at [simpler-state.js.org](https://simpler-state.js.org).

## Feedback

I have opened a Request For Comments ([here](https://github.com/arnelenero/simpler-state/issues/1)) on GitHub. Your comments and suggestions would be greatly appreciated.

__And if you like this library, the concept, and its simplicity, please give it a star on the [GitHub repo](https://github.com/arnelenero/simpler-state) to let me know.__ 😀

## Prior Art

This library is an evolution of the already production-proven [react-entities](https://github.com/arnelenero/react-entities) that I also wrote. It shares the same stable core, but with a very different API.
