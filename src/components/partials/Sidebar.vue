<template>
  <div class="horizontal-bar-wrap">
    <div class="header-topnav">
      <div class="container-fluid">
        <div class="topnav rtl-ps-none" id="" data-perfect-scrollbar="" data-suppress-scroll-x="true">
          <!-- admin -->
          <ul class="menu float-start" v-if="hasGroupID('2')">
            <li>
              <div>
                <div><label class="toggle" for="drop-2"> Dashboard</label><router-link to="/dashboard"><i
                      class="nav-icon me-2 i-home1 text-primary"></i>Dashboard</router-link>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Members</label><router-link to="/members"><i
                      class="nav-icon me-2 i-Cool-Guy text-primary"></i> Members</router-link>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Vendors</label><router-link to="/vendors"><i
                      class="nav-icon me-2 i-Business-ManWoman text-primary"></i> Vendors</router-link>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Apppointments</label><router-link to="/appointments"><i
                      class="nav-icon me-2 i-Calendar-3 text-primary"></i>
                    Appointments</router-link>
                </div>
              </div>
            </li>
            <li>
              <div>
                <label class="toggle" for="drop-2"> Services</label><router-link to="/Services"><i
                    class="nav-icon me-2 i-Bag-Coins text-primary"></i>
                  Services</router-link>
              </div>
            </li>
            <!--end-pages -->
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2"> Admins</label><router-link to="/admins"><i
                      class="nav-icon me-2 i-Checked-User text-primary"></i>Admins</router-link>
                </div>
              </div>
            </li>
            <li>
              <div>
                <div>
                  <label class="toggle" for="drop-2">Settings</label><a href="#"><i class="nav-icon me-2 i-gear"></i>
                    Settings</a>
                  <input id="drop-2" type="checkbox" />
                  <ul>
                    <li>
                      <router-link to="/countries"><i class="nav-icon me-2 i-Map-Marker text-primary"></i><span
                          class="item-name">Countries</span></router-link>
                    </li>
                    <li>
                      <router-link to="/states"><i class="nav-icon me-2 i-Geo21 text-primary"></i><span
                          class="item-name">States</span></router-link>
                    </li>
                    <li>
                      <router-link to="/cities"><i class="nav-icon me-2 i-Map2 text-primary"></i><span
                          class="item-name">Cities</span></router-link>
                    </li>
                    <li>
                      <router-link to="/logs"><i class="nav-icon me-2 i-Financial text-primary"></i><span
                          class="item-name">Logs</span></router-link>
                    </li>
                    <li>
                      <router-link to="/interest-categories"><i class="nav-icon me-2 i-Friendster text-primary"></i><span
                          class="item-name">Interest</span></router-link>
                    </li>
                    <li>
                      <router-link to="/user-groups"><i class="nav-icon me-2 i-Map2 text-primary"></i><span class="item-name">User
                          Groups</span></router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <!--member -->
          <ul v-if="hasGroupID('1')" class="menu float-start">
            <li>
              <div>
                <div><label class="toggle" for="drop-2"> Dashboard</label><router-link to="/dashboard"><i class="nav-icon me-2 i-home1 text-primary"></i> Dashboard</router-link></div>
              </div>
            </li>
            <li>
              <div>
                <div><label class="toggle" for="drop-2"> Appointments</label><router-link to="/my-appointments"><i class="nav-icon me-2 i-Calendar-3 text-primary"></i> Appointments</router-link></div>
              </div>
            </li>
            <li>
              <div>
                <div><label class="toggle" for="drop-2"> Services</label><router-link to="/member-services"><i class="nav-icon me-2 i-Bag-Coins text-primary"></i> Services</router-link></div>
              </div>
            </li>
            <li>
              <div>
                <div><label class="toggle" for="drop-2"> Service Interests</label><router-link to="/member-interests-categories"><i class="nav-icon me-2 i-Friendster text-primary"></i> Service Interests</router-link></div>
              </div>
            </li>
          </ul>
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
  methods: {
    hasGroupID(id) {
      // Check if any object in the role array has the provided groupIdToCheck
      return this.currentuser.role.some(
        role => role.group_id && role.group_id.group_id === id
      );
    }
  }
};
</script>
