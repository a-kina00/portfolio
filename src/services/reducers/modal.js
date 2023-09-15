import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal.js"

const initialState = {
  modalIsVisible: false,
  modalContent: null
};

const modalList = (state = initialState, action) => {
  switch (action.type) {

    case OPEN_MODAL:
      return { ...state, modalIsVisible: true, modalContent: action.content }

    case CLOSE_MODAL:
      return { ...state, modalIsVisible: false, modalContent: null }

    default:
      return state
  }
}
export default modalList;