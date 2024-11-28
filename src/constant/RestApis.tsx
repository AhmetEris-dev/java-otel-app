
const devUrl = 'http://localhost:9090/v1/dev';

const server = devUrl;

const apis = {
    authService: server + '/admin',
    adminService: server + '/admin',
    reservationService: server + '/reservation',
    roomService: server + '/room'
}

export default apis;