import { EStatus, THandleStatus } from './utils.types';

export const handleStatus: THandleStatus = (booking, delivery) => {
  const isBooking = booking ? booking.order : null;
  const isDelivery = delivery ? delivery.handed : null;

  if (!isBooking && isDelivery) {
    return EStatus.Busy;
  }

  if (isBooking && !isDelivery) {
    return EStatus.Reserved;
  }

  return EStatus.Free;
};
