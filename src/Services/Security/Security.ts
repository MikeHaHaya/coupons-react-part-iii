import axios from 'axios';
import store from "../../Redux/Store/Store";

const security = axios.create();

security.interceptors.request.use(request => {

    request.headers = {
        "jwt": store.getState().authState.user?.token
    };

    return request;
});

export default security;