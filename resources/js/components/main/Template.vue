<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">MBIT TEST</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03"
                    aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" exact>Home <span class="sr-only">(current)</span>
                        </router-link>
                    </li>
                    <li v-if="loggedIn" class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false">Dashboard</a>
                        <div class="dropdown-menu" x-placement="bottom-start"
                             style="position: absolute; transform: translate3d(0px, 35px, 0px); top: 0px; left: 0px; will-change: transform;">
                            <router-link class="dropdown-item" to="/admin/dashboard">Results</router-link>
                            <a class="dropdown-item" href="#">Manage Dimensions</a>
                            <a class="dropdown-item" href="#">Manage Quizzes</a>
                        </div>
                    </li>
                </ul>
                <nav class="my-2 my-md-0 mr-md-3">
                    <button v-if="loggedIn" @click="logout" class="btn  btn-light" href="#">Log Out</button>
                </nav>
                <router-link exact-active-class="x" v-if="!loggedIn" to="/admin/login" class="btn btn-outline-primary">
                    Login
                </router-link>
            </div>
        </nav>
        <router-view @changeRouteTitle="changeRouteTitle"></router-view>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "Main",
        data() {
            return {
                routeTitle: this.$route.meta.pageTitle,
            }
        },
        computed: {
            ...mapGetters({
                loggedIn: 'loggedIn',
            })
        },
        methods: {
            ...mapActions({
                adminLogOut: 'adminLogOut',
            }),
            changeRouteTitle(title) {
                this.routeTitle = title;
            },
            async logout() {
                await this.adminLogOut()
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>