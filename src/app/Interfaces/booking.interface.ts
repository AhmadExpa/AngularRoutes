import { Guest } from './guest.interface';

export interface Booking {
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  guestAddress: string;
  guestCity: string;
  guestState: string;
  guestCountry: string;
  guestCount: number;
  adults: number;
  childrens: number;
  bookingStatus: string;
  bookingAmount: string;
  bookingDate: Date;
  checkinDate: Date;
  checkoutDate: Date;
  guestList: Guest[];
}
