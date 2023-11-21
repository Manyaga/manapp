<template>
 <div class="horizontal-bar-wrap">
            <div class="header-topnav">
                <div class="container-fluid">
                    <div class="topnav rtl-ps-none" id="" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                       <!-- admin -->
                        <ul v-if="currentuser.role._id == '63fd057b21a945fd564e9c6a'" class="menu float-start">
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
                                        <label class="toggle" for="drop-2"> Members</label><router-link to="/members"><i class="nav-icon me-2 i-Friendster"></i> Members</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Donors</label><router-link to="/donors"><i class="nav-icon me-2 i-money"></i> Donors</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Donation Requests</label><router-link to="/donation-requests"><i class="nav-icon me-2 i-Bag-Coins"></i> Donation Requests</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2">Products</label><a href="#"><i class="nav-icon me-2 i-Full-Cart"></i> Products</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li><router-link to="/products"><i class="nav-icon me-2 i-Full-Cart"></i> Products</router-link></li>
                                            <li><router-link to="/products-attributes"><i class="nav-icon me-2 i-Tag-4"></i><span class="item-name"> Atrributes</span></router-link></li>
                                            <li><router-link to="/categories"><i class="nav-icon me-2 i-Big-Data"></i><span class="item-name"> Categories</span></router-link></li>
                                            <li><router-link to="/suppliers"><i class="nav-icon me-2 i-Jet"></i><span class="item-name"> Suppliers</span></router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <!--end-pages -->
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2">Donations</label><router-link to="/donations"><i class="nav-icon me-2 i-Dollar-Sign"></i>Donations</router-link>
                                    </div>
                                </div>
                            </li>
                            
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Admins</label><router-link to="/admins"><i class="nav-icon me-2 i-Checked-User"></i> Admins</router-link>
                                    </div>
                                </div>
                            </li>                            
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2">Settings</label><a href="#"><i class="nav-icon me-2 i-gear"></i> Settings</a>
                                        <input id="drop-2" type="checkbox" />
                                        <ul>
                                            <li><router-link to="/settings"><i class="nav-icon me-2 i-gear"></i><span class="item-name">Settings</span></router-link></li>
                                            <li><router-link to="/countries"><i class="nav-icon me-2 i-Map-Marker"></i><span class="item-name">Countries</span></router-link></li>
                                            <li><router-link to="/counties"><i class="nav-icon me-2 i-Geo21"></i><span class="item-name">Counties</span></router-link></li>
                                            <li><router-link to="/cities"><i class="nav-icon me-2 i-Map2"></i><span class="item-name">Cities</span></router-link></li>
                                            <li><router-link to="/taxes"><i class="nav-icon me-2 i-Financial"></i><span class="item-name">Taxes</span></router-link></li>
                                            <li><router-link to="/payment-options"><i class="nav-icon me-2 i-Money-2"></i><span class="item-name">Payment Options</span></router-link></li>
                                            <li><router-link to="/faqs"><i class="nav-icon me-2 i-Eyeglasses-Smiley"></i><span class="item-name">FAQs</span></router-link></li>
                                            <li><router-link to="/email-templates"><i class="nav-icon me-2 i-Email"></i><span class="item-name">Email Templates</span></router-link></li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <!--donor -->
                        <ul v-if="currentuser.role._id == '63fd059321a945fd564e9c6e'" class="menu float-start">
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
                                        <label class="toggle" for="drop-2"> My Donations</label><router-link to="/my-donations"><i class="nav-icon me-2 i-money text-primary"></i> My donations</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Product Aid</label><router-link to="/all-requests"><i class="nav-icon me-2 i-Dollar-Sign text-primary"></i> Gift Aid</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Fundraisers</label><router-link to="/all-fundraisers"><i class="nav-icon me-2 i-Bag-Coins text-primary"></i> Fundraisers</router-link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <div>
                                        <label class="toggle" for="drop-2"> Donation Cart</label><router-link to="/donation-cart"><i class="nav-icon me-2 i-Full-Cart text-primary"></i> Donation Cart</router-link>
                                    </div>
                                </div>
                            </li>                        
                        </ul>
                        <!--member -->
                        <ul v-if="currentuser.role._id == '63fd058921a945fd564e9c6c'" class="menu float-start">
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
		}
	}
    
  }
</script>
  