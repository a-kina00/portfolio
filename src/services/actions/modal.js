const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const openModal = (payload) => ({ type: OPEN_MODAL, content: payload.content })
const closeModal = () => ({ type: CLOSE_MODAL })

export { OPEN_MODAL, CLOSE_MODAL, openModal, closeModal };