<template>
  <div class="horizontal-bar-wrap">
    <div class="header-topnav">
      <div class="container-fluid">
        <div
          class="topnav rtl-ps-none"
          id=""
          data-perfect-scrollbar=""
          data-suppress-scroll-x="true"
        >
          <!-- admin -->
          <ul class="menu float-start">
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Dashboard</label
                  ><router-link to="/dashboard"
                    ><i class="nav-icon me-2 i-home1 text-primary"></i>
                    Dashboard</router-link
                  >
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Members</label
                  ><router-link to="/members"
                    ><i class="nav-icon me-2 i-Friendster"></i>
                    Members</router-link
                  >
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Vendors</label
                  ><router-link to="/vendors"
                    ><i class="nav-icon me-2 i-money"></i> Vendors</router-link
                  >
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Apppointments</label
                  ><router-link to="/appointments"
                    ><i class="nav-icon me-2 i-Bag-Coins"></i>
                    Appointments</router-link
                  >
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2">Services</label
                  ><a href="#"
                    ><i class="nav-icon me-2 i-Full-Cart"></i> Services</a
                  >
                  <input id="drop-2" type="checkbox" />
                  <ul>
                    <li>
                      <router-link to="/Services"
                        ><i class="nav-icon me-2 i-Full-Cart"></i>
                        Services</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/service-interests"
                        ><i class="nav-icon me-2 i-Tag-4"></i
                        ><span class="item-name">
                          Service Interest</span
                        ></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/Service-pricing"
                        ><i class="nav-icon me-2 i-Big-Data"></i
                        ><span class="item-name"> Pricing</span></router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!--end-pages -->
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Admins</label
                  ><router-link to="/admins"
                    ><i class="nav-icon me-2 i-Checked-User"></i>
                    Admins</router-link
                  >
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2">Interests</label
                  ><a href="#"
                    ><i class="nav-icon me-2 i-gear"></i> Interests</a
                  >
                  <input id="drop-2" type="checkbox" />
                  <ul>
                    <li>
                      <router-link to="/interest-categories"
                        ><i class="nav-icon me-2 i-Map-Marker"></i
                        ><span class="item-name">Categories</span></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/service-interests"
                        ><i class="nav-icon me-2 i-Map2"></i
                        ><span class="item-name"
                          >Service Interest</span
                        ></router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2">Settings</label
                  ><a href="#"><i class="nav-icon me-2 i-gear"></i> Settings</a>
                  <input id="drop-2" type="checkbox" />
                  <ul>
                    <li>
                      <router-link to="/countries"
                        ><i class="nav-icon me-2 i-Map-Marker"></i
                        ><span class="item-name">Countries</span></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/states"
                        ><i class="nav-icon me-2 i-Geo21"></i
                        ><span class="item-name">States</span></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/cities"
                        ><i class="nav-icon me-2 i-Map2"></i
                        ><span class="item-name">Cities</span></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/logs"
                        ><i class="nav-icon me-2 i-Financial"></i
                        ><span class="item-name">Logs</span></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/payment-options"
                        ><i class="nav-icon me-2 i-Money-2"></i
                        ><span class="item-name"
                          >Payment Options</span
                        ></router-link
                      >
                    </li>
                    <li>
                      <router-link to="/user-groups"
                        ><i class="nav-icon me-2 i-Map2"></i
                        ><span class="item-name">User Groups</span></router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <!--member -->
          <!-- <ul v-if="currentuser.role._id == '63fd058921a945fd564e9c6c'" class="menu float-start">
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Dashboard</label><router-link to="/dashboard"><i class="nav-icon me-2 i-home1 text-primary"></i> Dashboard</router-link>                                       
                                    </div>
                                    
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> My Product Aids</label><router-link to="/my-donation-requests"><i class="nav-icon me-2 i-money text-primary"></i> My Product Aids</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> My Fundraisers</label><router-link to="/my-fundraisers-requests"><i class="nav-icon me-2 i-Bag-Coins text-primary"></i> My Fundraisers</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> My Cart</label><router-link to="/product-cart"><i class="nav-icon me-2 i-Full-Cart text-primary"></i> My Cart</router-link>
                                    </div>
                                </div>
                            </li>     
                        </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TokenService from "@/services/token.service";
export default {
  name: "Sidebar",
  data() {
    return {
      currentuser: TokenService.getUser(),
    };
  },
};
</script>
