<template>
    <div class="navbar navbar-expand-md navbar-light bg-light p-4">
        <router-link to="/" tag="a" class="navbar-brand">Brand</router-link>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-collapse">
        <div class="navbar-nav ml-auto">
            <div class="nav-item">
                <router-link to="/about" tag="a" class="nav-link">ABOUT US</router-link>
            </div>
            <div class="nav-item">
                <router-link class="nav-link" @click="scrollTo" to="#comments">WRITE COMMENT</router-link>
            </div>
            <div class="nav-item">
                <router-link tag="a" to='/comments/' class="nav-link">COMMENTS</router-link>
            </div>
        </div>
        </div>
    </div>
</template>
<script>

export default{
    data() {
        return {
            message : "Hello world"
        }
    }, 
    methods : {
        scrollTo() {
            const el = document.getElementById("footer");
            el.scrollIntoView({'behavior' : 'smooth'})
            console.log("Hello world")
        }
    }
}
</script>
<style scoped>

</style>
