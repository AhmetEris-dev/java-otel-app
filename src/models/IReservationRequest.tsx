export interface IReservationRequest {
    roomId: number,
    customerName: string,
    customerEmail: string,
    checkInDate: string,
    checkOutDate: string,
    adultCount: number,
    childCount: number,
    description: string
}