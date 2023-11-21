<template>
    <div class="breadcrumb">
        <h1>Features</h1>
        <ul>
            <li><router-link :to="previousTitle">{{previousTitle.toUpperCase()}}</router-link></li>
            <li>{{pageTitle}}</li>
        </ul>
    </div>
 </template>
 
 <script>
 import { useRoute } from 'vue-router'
   export default {
     name: "Breadcrumbs",
     computed: {
    pageTitle() {
      return useRoute().meta.title
    },
    previousTitle() {
       return useRoute().meta.back ?? "dashboard"
    },
  },
   }
 </script>