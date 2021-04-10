<template>
  <div id="footer" class="container">
    <div class="banner-container">
      <div class="row">
        <div class="col-md-4">
          <h1 class="display-4 footer-title">
            Write <br />
            comment
            <hr style="border: 2px solid darkorange; width: 20%" align="left" />
          </h1>
        </div>
        <div class="col-md-8 footer-contact-part">
          <form action="" @submit="(e) => e.preventDefault()">
            <div class="form-group">
              <input
                type="text"
                v-model="title"
                class=""
                placeholder="Title..."
                required
              />
            </div>
              <div class="alert alert-danger" v-if="error_title">
                  Please enter Title
              </div>
            <div class="form-group">
              <textarea
                class=""
                v-model="textarea"
                placeholder="Your comment..."
                rows="8"
              required></textarea>
            </div>
              <div class="alert alert-danger" v-if="error_textarea">
                  Please enter Comment
              </div>
            <div class="form-group">
              <button @click="post_data" class=" ">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom-panel">
    <div class="">
      <p>
        <a href="mailTo:musahesenli02@gmail.com">musahesenli02@gmail.com</a>
      </p>
      <p><a href="tel:+994559779778">+994559779778</a></p>
    </div>
    <div class="text-muted">
      <p>All rights reserved 2021</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      textarea: "",
      error_title: false,
      error_textarea: false,
      proceed: true,
    };
  },
  methods: {
    post_data() {
      if (this.title.length !== 0 && this.textarea.length !== 0 && this.proceed) {
        let payload = {
          title: this.title,
          message: this.textarea,
        };
        this.$store.dispatch("postComment", payload);
        this.title = "";
        this.textarea = "";
        console.log("Done");
      }
    },
  },
};
</script>

<style scoped>
.footer-title {
  font-weight: 500;
}
.bottom-panel {
  font-size: 13px;
}
</style>