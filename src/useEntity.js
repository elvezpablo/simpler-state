import { useState, useCallback, useEffect } from 'react'
import { strictEqual } from './utils'

const identity = v => v

export const useEntity = (
  entity,
  transform = identity,
  equality = strictEqual
) => {
  if (!(entity._subscribers instanceof Set)) throw new Error('Invalid entity.')

  const [state, setState] = useState(transform(entity._value))

  const subscriberFn = useCallback(
    newValue => {
      const newComputed = transform(newValue)
      const hasChanged = !equality(state, newComputed)
      if (hasChanged) setState(newComputed)
    },
    [transform, equality, state]
  )

  useEffect(() => entity._subscribe(subscriberFn), [subscriberFn, entity])

  // Re-sync state in case transform function has changed
  subscriberFn(entity._value)

  return state
}

export default useEntity
