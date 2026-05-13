type ToastStatus = 'success' | 'error' | 'warning' | 'info';

/**
 * Displays a toast notification.
 * 
 * @param {string} message - The message to display in the toast.
 * @param {string} status - The type of toast ('success', 'error', 'warning', 'info').
 * @param {string} position - The position of the toast (e.g., 'top-right', 'bottom-left').
 */
export const showToast = (
  message: string,
  status: ToastStatus = 'info',
  position = 'top-right',
) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.dispatchEvent(
    new CustomEvent('app:toast', {
      detail: {
        message,
        status,
        position,
      },
    }),
  );

  console[status === 'error' ? 'error' : status === 'warning' ? 'warn' : 'log'](
    message,
  );
};
