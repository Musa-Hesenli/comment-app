<template>
  <div class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-9 col-md-offset-2 back-to-comments">
        <router-link to="/comments" tag="span">
          <h5>
            <i class="fas fa-arrow-left mr-3"></i>
            <span>Back to all comments</span>
          </h5>
        </router-link>
      </div>
      <br />
      <br />
      <div class="col-md-9 col-md-offset-2 single-comment">
        <h1>{{ singleMessage.title }}</h1>
        <br />
        <p>{{ singleMessage.message }}</p>
        <br />
        <hr />
      </div>
      <div class="col-12">
        <h1 class="text-muted text-center bottom-text">Lorem praesentium?</h1>
      </div>
      <div class="col-12 button-container">
        <router-link to="/">
          <button>
            <i class="fas fa-arrow-left mr-2"></i>

            Back to home page
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    messages() {
      return this.$store.getters.allComments;
    },
    singleMessage() {
      console.log(this.$route.params.id);
      return this.messages.filter(
        (item) => item.id == this.$route.params.id
      )[0];
    },
  },
  beforeCreate() {
    this.$store.dispatch("getComments");
  },
};
</script>

<style scoped>
.container {
  margin-top: 15px;
  margin-bottom: 15px;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
}
.button-container button {
  border: #23ac79 2px solid;
  padding: 15px 25px;
  border-radius: 3px;
  background: #fff;
  color: rgb(122, 122, 122);
}
.back-to-comments a {
  color: rgb(122, 122, 122);
  text-decoration: none;
}
.back-to-comments i {
  font-size: 15px !important;
}
.single-comment h1 {
  color: rgb(63, 63, 63);
}
.single-comment p {
  color: rgb(122, 122, 122);
  font-size: 16px;
}
.bottom-text {
    color: rgb(122, 122, 122);
    font-weight: 500;
}
</style>