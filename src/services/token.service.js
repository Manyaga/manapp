class TokenService {
  getUser() {
    return JSON.parse(localStorage.getItem("user"))
  }
  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user))
  }
  removeUser() {
    localStorage.removeItem("user")
  }
  getRequest() {
    return JSON.parse(localStorage.getItem("request"))
  }
  getCategory() {
    return JSON.parse(localStorage.getItem("categoryID"))
  }
  getProduct() {
    return JSON.parse(localStorage.getItem("product"))
  }
  setRequest(request) {
    localStorage.setItem("request", JSON.stringify(request))
  }
  setCategory(category) {
    localStorage.setItem("categoryID", JSON.stringify(category))
  }
  setProduct(product) {
    localStorage.setItem("product", JSON.stringify(product))
  }
  removeRequest() {
    localStorage.removeItem("request")
  }
}

export default new TokenService();
