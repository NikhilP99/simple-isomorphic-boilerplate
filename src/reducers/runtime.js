export const ACTION_TYPES = {
  setRuntimeVariable: 'setRuntimeVariable',
};

export const DEFAULT_STATE = {};

export default function runtime(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.setRuntimeVariable:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
