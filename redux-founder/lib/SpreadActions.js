import { notation } from './common';
import produce from 'immer';
// NOTE: Redux Saga, Actions
export default function SpreadActions(config) {
  const { state: defaultState } = config;

  return function (customState, types, config = {}) {
    const { init, pending, success, failure, callback } = config;

    try {
      // single
      if (customState === null) {
        this[types] = (state, payload) => produce(state, draft => callback(draft, payload, state));
        return;
      }

      const setPartial = (fn, draft, payload, state, type) => {
        let targetState = notation(customState, draft);
        const intialState = notation(customState, defaultState);

        const { pending, success, failure } = targetState;
        if ([pending, success, failure].every(item => item === undefined)) return;

        if (type === 'init') {
          _.forEach(intialState, (value, key, obj) => {
            targetState[key] = value;
          });
        } else {
          targetState.pending = false;
          targetState.success = false;
          targetState.failure = false;
          targetState[type] = true;
        }
        if (typeof fn === 'function') {
          fn(draft, payload, state);
        }
      };

      // types
      this[types.INIT] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [init, draft, payload, state, 'init']);
        });
      this[types.PENDING] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [pending, draft, payload, state, 'pending']);
        });
      this[types.SUCCESS] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [success, draft, payload, state, 'success']);
        });
      this[types.FAILURE] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [failure, draft, payload, state, 'failure']);
        });
    } catch (e) {
      console.log('SpreadSagas error', e);
    }
  };
}
