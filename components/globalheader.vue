<template>
  <header class="globalheader">
    <router-link :to="{ path: '/' }" exact
      ><img
        src="~/static/fulllogo.jpeg"
        alt="Katie Cowden - Killer Queen Designs"
        width="300px"
    /></router-link>
    <nav>
      <ul>
        <li><router-link to="/gallery/">Gallery</router-link></li>
        <!-- <li>
          <a href="https://www.etsy.com/shop/KillerQueenJewelry" target="_blank"
            >Shop</a
          >
        </li> -->
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/52portraits2019">Portraits</router-link></li>
      </ul>
    </nav>
  </header>
</template>
