/* eslint-disable import/prefer-default-export */

import { ACTION_TYPES } from 'reducers/runtime';

export function setRuntimeVariable({ name, value }) {
  return {
    type: ACTION_TYPES.setRuntimeVariable,
    payload: {
      name,
      value,
    },
  };
}
