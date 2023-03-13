import { Booking, Delivery } from 'constants/constants.types';

import { Status } from './utils.types';

export const handleStatus = (booking: Booking | null, delivery: Delivery | null): Status => {
  const isBooking = booking ? booking.order : null;
  const isDelivery = delivery ? delivery.handed : null;

  if (!isBooking && isDelivery) {
    return Status.Busy;
  }

  if (isBooking && !isDelivery) {
    return Status.Reserved;
  }

  return Status.Free;
};
