export interface IReservationUpdateRequest{
    id: number | undefined,
    roomId: number,
    adultCount: string,
    childCount: string,
    checkInDate: string,
    checkOutDate: string
}