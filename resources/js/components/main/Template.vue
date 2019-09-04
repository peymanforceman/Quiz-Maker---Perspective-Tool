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
                    <li v-if="!loggedIn" class="nav-item">
                        <router-link class="nav-link" to="/admin/login">Login
                        </router-link>
                    </li>
                    <li v-if="loggedIn" class="nav-item">
                        <router-link class="nav-link" to="/admin/dashboard">Results</router-link>
                    </li>
                    <li v-if="loggedIn" class="nav-item">
                        <router-link class="nav-link" to="/admin/quizzes">Manage Quizzes</router-link>
                    </li>
                    <li v-if="loggedIn" class="nav-item">
                        <router-link class="nav-link" to="/admin/dimensions">Manage Dimensions</router-link>
                    </li>
                    <li class="nav-item">
                        <a v-if="loggedIn" @click="logout" class="nav-link" href="#">Log Out</a>
                    </li>
                </ul>
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