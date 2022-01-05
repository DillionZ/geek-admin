
<template>
  <div class="container">
    <router-link to="/">首页</router-link> | 
    <router-link to="/about">关于</router-link>
    <router-view />
  </div>
  
</template>

<style>
  .container {
    text-align: center;
  }
</style>