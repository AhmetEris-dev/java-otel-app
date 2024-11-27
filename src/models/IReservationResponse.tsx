export interface IReservationResponse {
    id: number,
    roomId: number,
    adultCount: string,
    childCount: string,
    description: string,
    customerName: string,
    customerEmail: string,
    checkInDate: string,
    checkOutDate: string
}