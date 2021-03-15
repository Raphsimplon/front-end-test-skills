import Axios from "axios"

export class UsersService {

    constructor() {
        this.url = 'http://127.0.0.1:8000/profil/';
    }

    async findOne(id){
        let response = await Axios.get(this.url + id);
        return response.data;
    }
 
}