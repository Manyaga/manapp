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
  getCategory() {
    return JSON.parse(localStorage.getItem("categoryID"))
  }
  setCategory(category) {
    localStorage.setItem("categoryID", JSON.stringify(category))
  }
  setPricing(pricing) {
    localStorage.setItem("pricing", JSON.stringify(pricing))
  }  
  getPricing() {
    return JSON.parse(localStorage.getItem("pricing"))
  }
  removePricing() {
    localStorage.removeItem("pricing")
  } 
  removeVendor() {
    localStorage.removeItem("vendor")
  }  
  setVendor(vendor) {
    localStorage.setItem("vendor", JSON.stringify(vendor))
  }
  getVendor() {
    return JSON.parse(localStorage.getItem("vendor"))
  }
  removeInterest() {
    localStorage.removeItem("interest")
  }  
  setInterest (interest) {
    localStorage.setItem("interest", JSON.stringify(interest))
  }
  getInterest() {
    return JSON.parse(localStorage.getItem("interest"))
  }
}

export default new TokenService();
