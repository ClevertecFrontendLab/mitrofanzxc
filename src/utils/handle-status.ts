import { THandleStatus } from './utils.types';

export const handleStatus: THandleStatus = (booking, delivery) => {
  const isBooking = booking ? booking.order : null;
  const isDelivery = delivery ? delivery.handed : null;

  if (!isBooking && isDelivery) {
    return 'busy';
  }

  if (isBooking && !isDelivery) {
    return 'reserved';
  }

  return 'free';
};
