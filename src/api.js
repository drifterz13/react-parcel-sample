import axios from "axios";

let api;

const notes = {
  get: () => api.get("/notes"),
  post: note => api.post("/note", note)
};

function init() {
  api = axios.create({
    baseURL: "https://g50jc4a8kj.execute-api.us-east-1.amazonaws.com/dev/api"
  });
}

export { notes, init };
