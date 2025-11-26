import axios from "axios";

const useAxios = () => {
  const get = (url) => {
    return axios.get(url);
  };

  const post = (url, data) => {
    return axios.post(url, data);
  };

  const put = (url, data) => axios.put(url, data);

  const patch = (url, data) => {
    return axios.patch(url, data);
  };

  const remove = (url) => {
    return axios.delete(url);
  };

  return { get, post, patch, put, remove };
};

export default useAxios;
