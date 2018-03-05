export const SHOW_REQUEST_CONFIRM_MODAL = 'SHOW_REQUEST_CONFIRM_MODAL';
export const CLOSE_REQUEST_CONFIRM_MODAL = 'CLOSE_REQUEST_CONFIRM_MODAL';

export const showRequestConfirmModal = (showFlag, data) => {
  return ({
    type: SHOW_REQUEST_CONFIRM_MODAL,
    payload: {
      modals: {
        visible: showFlag,
        data,
      },
    },
  });
};
