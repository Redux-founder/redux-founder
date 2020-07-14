// NOTE: Redux Saga, Actions
export default function SpreadActions(config) {
  const { state: defaultState } = config;

  return function (customState, sagas, config = {}) {
    const { init, pending, success, failure } = config;
    const notation = (str, obj) => str.split('.').reduce((a, c) => a[c], obj);

    try {
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
      this[sagas.INIT] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [init, draft, payload, state, 'init']);
        });
      this[sagas.PENDING] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [pending, draft, payload, state, 'pending']);
        });
      this[sagas.SUCCESS] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [success, draft, payload, state, 'success']);
        });
      this[sagas.FAILURE] = (state, payload) =>
        produce(state, draft => {
          setPartial.apply(this, [failure, draft, payload, state, 'failure']);
        });
    } catch (e) {
      console.log('SpreadSagas error', e);
    }
  };
}
