export const SHOW_REQUEST_CONFIRM_MODAL = 'SHOW_REQUEST_CONFIRM_MODAL';
export const CLOSE_REQUEST_CONFIRM_MODAL = 'CLOSE_REQUEST_CONFIRM_MODAL';

export const showRequestConfirmModal = (showFlag, userSummary) => {
  return ({
    type: SHOW_REQUEST_CONFIRM_MODAL,
    payload: {
      modals: {
        visible: showFlag,
        modalShownUserSummary: userSummary,
      },
    },
  });
};
