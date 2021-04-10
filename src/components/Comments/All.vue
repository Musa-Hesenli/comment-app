<template>
    <div class="container">
        <div class="row" v-if="comments_data.length == 0">
            <img src="../../assets/loader.gif" alt="">
        </div>
        <div class="row" v-else>
            <div class="col-md-6 comment-box" v-for="(item, index) in comments_data" :key="index">
                <div>
                    <h1 class="box-title">{{ item.title }}</h1>
                    <p class="box-message">{{ item.message }}</p>
                        <router-link :to="'/comments/' + item.id">
                            <button>
                                Read more
                            </button>
                        </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed : {
        comments_data() {
            return this.$store.getters.allComments;
        }
    },
    beforeCreate() {
        this.$store.dispatch("getComments");
    },
    
}
</script>
<style scoped>
.container {
    margin-top: 10px;
    margin-bottom: 10px;
}
.comment-box div {
    border-radius: 5px;
    padding: 20px 25px;
    margin-bottom: 25px;
    border: 1px solid rgb(250, 250, 250);
    box-shadow: 3px 3px 5px rgb(223, 223, 223);
}
.box-title {
    font-size: 20px;
    font-weight: 500;
    color: rgb(77, 77, 77);
}

.box-message {
    font-weight: 300;
    color: rgb(122, 122, 122);
}
img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
button {
    background: #23AC79;
    border: none;
    outline: none;
    color: rgb(24, 22, 22);
    padding: 10px 20px;
    border-radius: 5px;
    opacity: 0.8;
    transition: .3s;
}
button:hover {
    opacity: 1;
}
</style>