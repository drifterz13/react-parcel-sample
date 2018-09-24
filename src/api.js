import axios from "axios";

export default {
  notes(url) {
    return {
      getAll: () => axios.get(`${url}/api/notes`),
      create: credentials => axios.post(`${url}/api/note`, credentials)
    };
  }
};
