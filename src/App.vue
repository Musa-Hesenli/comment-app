<template>
  <div class="wrapper">
    <Header/>
    <router-view>
      
    </router-view>
    <div class="bg-dark">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/Common/Header';
import Footer from './components/Common/FooterBanner';
export default {
  components : {
    Header,Footer
  }
}
</script>

<style>
.wrapper {
  background: rgba(255, 255, 255, 0.746);
}
</style>
