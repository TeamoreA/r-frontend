import http from "../http-common";

class CategoryDataService {
  get(id) {
    return http.get(`/category/${id}`);
  }
  delete(id) {
    return http.get(`/category/${id}`);
  }
  update(id, data) {
    return http.patch(`/category/${id}`, data);
  }
}

export default new CategoryDataService();
