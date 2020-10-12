import http from "../http-common";

class ProductDataService {
  get(id) {
    return http.get(`/product/${id}`);
  }
  delete(id) {
    return http.get(`/product/${id}`);
  }
  update(id, data) {
    return http.patch(`/product/${id}`, data);
  }
  all() {
    return http.get("/product/");
  }
}

export default new ProductDataService();
