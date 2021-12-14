import axios from 'axios'

class Service {
    static async getJobs(value) {
        const response = await axios.get("https://gonahh.ru/api/?jobname=" + value);
        return response.data;
    }

}

export default Service