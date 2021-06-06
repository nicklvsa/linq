import { Nullable, Queue } from "./models";
import axios from 'axios';

class API {
    private baseURL!: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    public async getQueueByID(id: string): Promise<Nullable<Queue>> {
        const resp = await axios.post(`${this.baseURL}/queue`, {
            queue_id: id,
        });

        if (resp.status !== 200) {
            console.error(`an error occurred while pulling queue with id: ${id}`);
            return null;
        }

        return resp.data as Queue;
    }
}

export default API;