import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
mutation Mutation($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    userId
    token
    tokenExpiration
  }
}
`
export const LOGIOUT_MUTATION = gql`
query Logoutuser {
  logoutuser {
    token
  }
}
`

export const CURRENTUSER_QUERY = gql`
query CurrentUser {
  currentUser {
    user_id
    first_name
    last_name
    email
    password
    phone_number
    postalCode
    city
    state {
      state_name
      state_id
      country_id {
        country_name
        country_id
        country_code
      }
    }
    country_id {
      country_name
      country_id
    }
    role {
      group_id {
        group_id
        group_name
      }
    }
    createdAt
  }
}
`


//COUNTRIES
export const ALL_COUNTRIES_QUERY = gql`
query Countries {
  countries {
    country_id
    country_name
    country_code
  }
}
`
export const EDIT_COUNTRY_MUTATION = gql`
mutation Updatecountry($input: updateCountry) {
  updatecountry(input: $input) {
    _id
    country_name
    createdAt
  }
}
`
export const ADD_COUNTRY_MUTATION = gql`
mutation CreateCountry($countryName: String!) {
  createCountry(country_name: $countryName) {
    _id
    country_name
    status
    image
  }
}
`
//STATES
export const ALL_STATES_QUERY = gql`
query States {
  states {
    state_id
    state_name
    abbreviation
    country_id {
      country_name
      country_id
      country_code
    }
  }
}
`
export const ADD_STATE_MUTATION = gql`
mutation CreateCounty($countyName: String!, $countryId: ID!) {
  createCounty(county_name: $countyName, countryID: $countryId) {
    _id
    county_name
    status
    country {
      _id
      country_name
      image
    }
  }
} 
`
export const DELETE_STATE_MUTATION = gql`
mutation DeleteCounty($countyId: ID!) {
  deleteCounty(countyId: $countyId) {
    _id
  }
}
`
export const EDIT_STATE_MUTATION = gql`
mutation Updatecounty($input: updateCounty) {
  updatecounty(input: $input) {
    status
    county_name
    _id
  }
}
`


//PAYMENTS
export const ALL_PAYMENTS_QUERY = gql`
query Payments {
  payments {
    _id
    payment_name
  }
}
`
export const ADD_PAYMENT_MUTATION = gql`
mutation CreatePayment($paymentName: String!) {
  createPayment(payment_name: $paymentName) {
    _id
    payment_name
  }
}
`
export const DELETE_PAYMENT_MUTATION = gql`
mutation DeletePayment($paymentId: ID!) {
  deletePayment(paymentId: $paymentId) {
    _id
  }
}
`
export const EDIT_PAYMENT_MUTATION = gql`
mutation Updatepayment($input: updatePayment) {
  updatepayment(input: $input) {
    _id
    payment_name
  }
}
`

//APPOINTMENTS
export const ALL_FAQS_QUERY = gql`
query Faqs {
  faqs {
    _id
    question
    answer
    status
  }
}
`
export const ADD_FAQ_MUTATION = gql`
mutation CreateFaq($question: String!, $answer: String!) {
  createFaq(question: $question, answer: $answer) {
    _id
    question
    answer
    status
  }
}
`
export const EDIT_FAQ_MUTATION = gql`
mutation Updatefaqs($input: updateFaq) {
  updatefaqs(input: $input) {
    _id
    question
    answer
    status
  }
}
`
export const DELETE_FAQ_MUTATION = gql`
mutation Deletefaq($faqId: ID!) {
  deletefaq(faqId: $faqId) {
    question
    _id
    answer
  }
}
`

//cities
export const ALL_CITIES_QUERY = gql`
query Allcities {
  allcities {
    _id
    city_name
    country {
      _id
      country_name
    }
    status
  }
}
`
export const ADD_CITY_MUTATION = gql`
mutation CreateCity($cityName: String!, $countryId: ID!) {
  createCity(city_name: $cityName, countryID: $countryId) {
    _id
    city_name
  }
} 
`
export const DELETE_CITY_MUTATION = gql`
mutation DeleteCity($cityId: ID!) {
  deleteCity(cityId: $cityId) {
    _id
  }
}
`
export const EDIT_CITY_MUTATION = gql`
mutation Updatecity($input: updateCity) {
  updatecity(input: $input) {
    _id
    city_name
  }
}
`

//USER INTERESTS
export const ALL_USER_INTERESTS_QUERY = gql`
query UserInterests {
  userInterests {
    user_interest_id
    user_id
    subcategory_id
    user {
      first_name
      last_name
      email
      phone_number
    }
    subcategory {
      name
      subcategory_id
    }
  }
}
`
export const ADD_USER_INTEREST_MUTATION = gql`
mutation CreateUserInterest($input: UserInterestInput!) {
  createUserInterest(input: $input) {
    user_interest_id
    user_id
    subcategory_id
    user {
      phone_number
      last_name
      first_name
      email
    }
    subcategory {
      subcategory_id
      name
      category {
        name
        category_id
      }
    }
  }
}
`
export const DELETE_USER_INTEREST_MUTATION = gql`
mutation DeleteUserInterest($userInterestId: Int!) {
  deleteUserInterest(userInterestId: $userInterestId)
}
`
export const EDIT_USER_INTEREST_MUTATION = gql`
mutation UpdateUserInterest($userInterestId: Int!, $input: UserInterestInput!) {
  updateUserInterest(userInterestId: $userInterestId, input: $input) {
    user_interest_id
    user_id
    subcategory_id
    subcategory {
      subcategory_id
      name
      category {
        category_id
        name
      }
    }
  }
}
`
//USER
export const ALL_USERS_QUERY = gql`
query Users {
  users {
    user_id
    first_name
    last_name
    nickname
    email
    password
    date_of_birth
    gender
    location
    profile_picture
    phone_number
    postalCode
    zipCode
    city
    state {
      abbreviation
      state_name
      state_id
    }
    verifyString
    verifiedEmail
    verifiedPhone
    status
    country_id {
      country_code
      country_id
      country_name
    }
  }
}
`
export const ADD_USER_MUTATION = gql`
mutation CreateUser($createAcc: createuser) {
  createUser(createAcc: $createAcc) {
    phone_number
    first_name
    email
    role {
      group_id {
        group_name
      }
    }
    user_id
  }
}
`
export const DELETE_USER_MUTATION = gql`
mutation DeleteUser($deleteUserId: Int!) {
  deleteUser(id: $deleteUserId)
}
`
export const EDIT_USER_MUTATION = gql`
mutation Updateuser($updateuserId: Int!, $input: UserInput) {
  updateuser(id: $updateuserId, input: $input) {
    user_id
    first_name
    last_name
    nickname
    email
    password
    date_of_birth
    gender
    location
    profile_picture
    phone_number
    postalCode
    zipCode
    city
    state {
      state_name
      state_id
    }
    verifyString
    verifiedEmail
    verifiedPhone
    status
    country_id {
      country_name
      country_id
      country_code
    }
  }
}
`
//SERVICE_PRICING
export const ALL_SERVICE_PRICINGS_QUERY = gql`
query ServicePricings {
  servicePricings {
    pricing_id
    price
    duration
    user_id {
      first_name
      last_name
      phone_number
      email
    }
    service_id
    service {
      description
      service_id
      service_name
    }
  }
}
`
export const ADD_SERVICE_PRICING_MUTATION = gql`
mutation CreateServicePricing($input: ServicePricingInput!) {
  createServicePricing(input: $input) {
    pricing_id
    price
    duration
    user_id {
      last_name
      first_name
      email
      phone_number
    }
    service_id
    service {
      description
      service_id
      service_name
    }
  }
}
`
export const DELETE_SERVICE_PRICING_MUTATION = gql`
mutation DeleteServicePricing($pricingId: Int!) {
  deleteServicePricing(pricingId: $pricingId)
}
`
export const EDIT_SERVICE_PRICING_MUTATION = gql`
mutation UpdateServicePricing($pricingId: Int!, $input: ServicePricingInput!) {
  updateServicePricing(pricingId: $pricingId, input: $input) {
    pricing_id
    price
    duration
    user_id {
      first_name
      last_name
      email
      phone_number
    }
    service_id
    service {
      service_id
      service_name
      description
    }
    user {
      last_name
      first_name
      email
      phone_number
    }
  }
}
`
//SERVICE_INTEREST
export const ALL_SERVICE_INTERESTS_QUERY = gql`
query ServiceIterests {
  serviceInterests {
    service {
      service_id
      service_name
      description
    }
    service_id
    service_interest_id
    subcategory_id
    subcategory {
      name
      subcategory_id
    }
  }
}
`
export const ADD_SERVICE_INTEREST_MUTATION = gql`
mutation CreateServiceInterest($input: ServiceInterestsInput) {
  createServiceInterest(input: $input) {
    service_interest_id
    subcategory_id
    service_id
    subcategory {
      category {
        category_id
        name
      }
      name
      subcategory_id
    }
    service {
      service_id
      description
      service_name
    }
  }
}
`
export const DELETE_SERVICE_INTEREST_MUTATION = gql`
mutation DeleteServiceInterest($serviceInterestId: Int!) {
  deleteServiceInterest(service_interest_id: $serviceInterestId)
}
`
export const EDIT_SERVICE_INTEREST_MUTATION = gql`
mutation UpdateServiceInterest($serviceInterestId: Int!, $input: ServiceInterestsInput) {
  updateServiceInterest(service_interest_id: $serviceInterestId, input: $input) {
    service_interest_id
    subcategory_id
    service_id
    subcategory {
      name
      category {
        category_id
        name
      }
      subcategory_id
    }
    service {
      description
      service_id
      service_name
    }
  }
}
`
//INTEREST_SUBCATEGORY
export const ALL_INTEREST_SUBCATEGORIES_QUERY = gql`
query InterestSubcategories {
  interestSubcategories {
    subcategory_id
    name
    category {
      category_id
      name
    }
  }
}
`
export const ADD_INTEREST_SUBCATEGORY_MUTATION = gql`
mutation CreateInterestSubcategory($input: InterestSubcategoryInput!) {
  createInterestSubcategory(input: $input) {
    subcategory_id
    name
    category {
      category_id
      name
    }
  }
}
`
export const DELETE_INTEREST_SUBCATEGORY_MUTATION = gql`
mutation DeleteInterestSubcategory($subcategoryId: Int!) {
  deleteInterestSubcategory(subcategoryId: $subcategoryId)
}
`
export const EDIT_INTEREST_SUBCATEGORY_MUTATION = gql`
mutation UpdateInterestSubcategory($subcategoryId: Int!, $input: InterestSubcategoryInput!) {
  updateInterestSubcategory(subcategoryId: $subcategoryId, input: $input) {
    subcategory_id
    name
    category {
      category_id
      name
    }
  }
}
`
//INTEREST_CATEGORY
export const ALL_INTEREST_CATEGORIES_QUERY = gql`
query InterestCategories {
  interestCategories {
    category_id
    name
  }
}
`
export const ADD_INTEREST_CATEGORY_MUTATION = gql`
mutation CreateInterestCategory($input: InterestCategoryInput!) {
  createInterestCategory(input: $input) {
    category_id
    name
  }
}
`
export const DELETE_INTEREST_CATEGORY_MUTATION = gql`
mutation DeleteSystemSettings($settingId: ID!) {
  deleteSystemSettings(settingId: $settingId) {
    _id
  }
}
`
export const EDIT_INTEREST_CATEGORY_MUTATION = gql`
mutation DeleteInterestCategory($categoryId: Int!) {
  deleteInterestCategory(categoryId: $categoryId)
}
`
//USER GROUPS
export const ALL_USER_GROUPS_QUERY = gql`
query UserGroups {
  userGroups {
    group_id
    group_name
  }
}
`
export const ADD_USER_GROUP_MUTATION = gql`
mutation CreateUserGroup($input: UserGroupInput) {
  createUserGroup(input: $input) {
    group_id
    group_name
  }
}
`
export const DELETE_USER_GROUP_MUTATION = gql`
mutation DeleteUserGroup($groupId: Int!) {
  deleteUserGroup(groupId: $groupId)
}
`
export const EDIT_USER_GROUP_MUTATION = gql`
mutation UpdateUserGroup($groupId: Int!, $input: UserGroupInput) {
  updateUserGroup(groupId: $groupId, input: $input) {
    group_id
    group_name
  }
}
`
//SERVICE
export const ALL_SERVICES_QUERY = gql`
query Services {
  services {
    service_id
    service_name
    description
  }
}
`
export const ADD_SERVICE_MUTATION = gql`
mutation CreateService($input: ServiceInput) {
  createService(input: $input) {
    service_id
    service_name
    description
  }
}
`
export const DELETE_SERVICE_MUTATION = gql`
mutation DeleteService($serviceId: Int!) {
  deleteService(serviceId: $serviceId)
}
`
export const EDIT_SERVICE_MUTATION = gql`
mutation UpdateService($serviceId: Int!, $input: ServiceInput) {
  updateService(serviceId: $serviceId, input: $input) {
    service_id
    service_name
    description
  }
}
`
export const USERS_BY_GROUP_QUERY = gql`
query UserUserGroups($limit: Int, $offset: Int, $groupId: ID) {
  userUserGroups(limit: $limit, offset: $offset, group_id: $groupId) {
    id
    user_id
    group_id
    user {
      phone_number
      first_name
      last_name
      email
    }
    group {
      group_id
      group_name
    }
  }
}
`