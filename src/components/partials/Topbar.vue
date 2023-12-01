<template>
 <div class="main-header">
            <div class="logo"><img src="../../assets/images/logo.jpg" alt="" /></div>
            <div class="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="d-flex align-items-center">
                <!-- Mega menu-->
                <div v-if="currentuser.role._id == '63fd057b21a945fd564e9c6a'" class="dropdown mega-menu d-none d-md-block"><a class="btn text-muted dropdown-toggle me-3" id="dropdownMegaMenuButton" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mega Menu</a>
                    <div class="dropdown-menu text-start" aria-labelledby="dropdownMenuButton">
                        <div class="row m-0">
                            <div class="col-md-4 p-4 bg-img">
                                <h2 class="title">Mega Menu <br /> Man App</h2>
                                <p>Be a Gentleman.</p>
                                <p class="mb-4">At Man App Enterprise we understand the need to transform you to a better you.</p>
                                <button class="btn btn-lg btn-rounded btn-outline-warning">Learn More</button>
                            </div>
                            <div class="col-md-4 p-4">
                                <p class="text-primary text--cap border-bottom-primary d-inline-block">Features</p>
                                <div class="menu-icon-grid w-auto p-0"><router-link class="nav-link" to="/vendors"><i class="i-Shop-4"></i> Vendors</router-link><router-link class="nav-link" to="/donors"><i class="i-Library"></i> Vendors</router-link><router-link class="nav-link" to="/donations"><i class="i-Drop"></i> Donations</router-link><router-link class="nav-link" to="/members"><i class="i-File-Clipboard-File--Text"></i> Members</router-link><router-link class="nav-link" to="/admins"><i class="i-Checked-User"></i> Admins</router-link><router-link class="nav-link" to="/donation-requests"><i class="i-Ambulance"></i> Requests</router-link></div>
                            </div>
                            <div class="col-md-4 p-4">
                                <p class="text-primary text--cap border-bottom-primary d-inline-block">Components</p>
                                <ul class="links">
                                    <li><router-link class="nav-link" to="/services">Services</router-link></li>
                                    <li><router-link class="nav-link" to="/appointments">Appointments</router-link></li>
                                    <li><router-link class="nav-link" to="/interest-categories">Interest Categories</router-link></li>
                                    <li><router-link class="nav-link" to="/vendors">Vendors</router-link></li>
                                    <li><router-link class="nav-link" to="/countries">Countries</router-link></li>
                                    <li><router-link class="nav-link" to="/states">States</router-link></li>
                                    <li><router-link class="nav-link" to="/logs">Logs</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / Mega menu-->
                <div class="search-bar">
                    <input type="text" placeholder="Search" /><i class="search-icon text-muted i-Magnifi-Glass1"></i>
                </div>
            </div>
            <div style="margin: auto"></div>
            <div class="header-part-right">
                <!-- Notificaiton-->
                <!-- <div class="dropdown">
                    <div class="badge-top-container" id="dropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="badge bg-primary">3</span><i class="i-Bell text-muted header-icon"></i></div>
                    
                    <div class="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                        <div class="dropdown-item d-flex">
                            <div class="notification-icon"><i class="i-Speach-Bubble-6 text-primary me-1"></i></div>
                            <div class="notification-details flex-grow-1">
                                <p class="m-0 d-flex align-items-center"><span>New message</span><span class="badge rounded-pill text-bg-primary ms-1 me-1">new</span><span class="flex-grow-1"></span><span class="text-small text-muted ms-auto">10 sec ago</span></p>
                                <p class="text-small text-muted m-0">{{ currentuser.first_name.toUpperCase()}}  {{ currentuser.last_name.toUpperCase() }} You are welcomed?</p>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- Notificaiton End-->
                <!-- User avatar dropdown-->
                <div class="dropdown">
                    <div class="user col align-self-end"><img id="userDropdown" src="../../assets/images/user.png" alt="" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <div class="dropdown-header"><a class="dropdown-item" href="/profile"><i class="i-Lock-User me-1"></i> {{ currentuser.first_name.toUpperCase() }}  {{ currentuser.last_name.toUpperCase() }}</a></div><router-link to="/profile" class="dropdown-item">Profile</router-link><a class="dropdown-item" @click="logout()">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </template>
  
  <script>
 import TokenService from "@/services/token.service";
import {LOGIOUT_MUTATION} from '@/graphql';
  
  export default {
    name: 'Topbar',
    data () {
        return {
            currentuser: TokenService.getUser(),
        }
    },
    methods: {
      async logout(){
        await this.$apollo.query({
          query: LOGIOUT_MUTATION
          }).then(response => {
            localStorage.clear();
          }).catch((error) => {
          console.log(error.message)
        })
      this.$router.push("/login");
      }
    }
  }
  </script>