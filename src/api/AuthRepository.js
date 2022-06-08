import axios from "./config";
import cookies from "js-cookie";
var token = cookies.get("token");
class AuthRepository {
  async UserRegister(params) {
        
        const reponse = await axios.post(`/register`, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
        return reponse;
    }

    async UserLogin(credentials) {
        
        const reponse = await axios.post(`/login`, credentials)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
        return reponse;
    }

    async UserLogout(credentials) {
        
        const reponse = await axios.get(`/logout`, credentials)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
        return reponse;
    }

    async UserProfileRegister(params) {
        
        const reponse = await axios.post(`/profile_create`, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
        return reponse;
    }

    async UserProfileGet(params) {
        
        const reponse = await axios.get(`/profile_get`, params)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error.response;
        });
        return reponse;
    }

}
export default new AuthRepository();