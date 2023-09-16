import * as TYPES from "../action-types";
const initial = {
  supNum: 11,
  oppNum: 5,
  total: 16,
};
export default function personalReducer(state = initial, action) {
  state = { ...state };
  switch (action.type) {
    case TYPES.PERSONAL_SUP:
      state.supNum++;
      break;
    default:
  }
  return state;
}
