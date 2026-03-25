// utils/toastUtils.js (or wherever you keep your utility functions)

import { toast } from 'react-toastify';

/**
 * Displays a toast notification.
 * 
 * @param {string} message - The message to display in the toast.
 * @param {string} status - The type of toast ('success', 'error', 'warning', 'info').
 * @param {string} position - The position of the toast (e.g., 'top-right', 'bottom-left').
 */
export const showToast = (message:string, status = 'info', position = 'top-right') => {
  // You can customize the toast options further here
  const toastOptions = {
    position: position,
    autoClose: 5000, // 5 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  switch (status) {
    case 'success':
      toast.success(message, toastOptions);
      break;
    case 'error':
      toast.error(message, toastOptions);
      break;
    case 'warning':
      toast.warning(message, toastOptions);
      break;
    case 'info':
    default:
      toast.info(message, toastOptions);
      break;
  }
};
