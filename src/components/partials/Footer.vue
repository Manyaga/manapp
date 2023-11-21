<template>
    <div class="flex-grow-1"></div>
           <div class="app-footer">
             <div class="row">
               <div class="col-md-9">
                 <p>
                   <strong>God's Gift Enterprise</strong>
                 </p>
                 <p>
                  As we say, "Every circle starts with hope and that's what we can... Start the circle of HOPE!”
                   <sunt></sunt>
                 </p>
               </div>
             </div>
             <div
               class="footer-bottom border-top pt-3 d-flex flex-column flex-sm-row align-items-center"
             >
             <router-link  class="btn btn-gray-700 text-white btn-rounded" to="/dashboard">Home</router-link> 
               <span class="flex-grow-1"></span>
               <div class="d-flex align-items-center">
                 <img
                   class="logo"
                   src="../../assets/images/logo.jpg"
                   alt=""
                 />
                 <div>
                   <p class="m-0">&copy; 2023 God's Gift Enterprise</p>
                   <p class="m-0">All rights reserved</p>
                 </div>
               </div>
             </div>
           </div>
 </template>
 
 <script>
   export default {
     name: "Footer",
   }
 </script>