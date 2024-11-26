
const devUrl = 'http://localhost:9090/v1/dev';

const server = devUrl;

const apis = {
    reservationService: server + '/reservation',
    roomService: server + '/room'
}

export default apis;