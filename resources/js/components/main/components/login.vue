<template>
    <div class="row justify-content-center">
        <div class="col-sm-12 col-md-8 col-lg-6">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form action="#" @submit.prevent="login">

                        <div class="form-group row">
                            <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail
                                Address</label>
                            <div class="col-md-6">
                                <input type="email" id="email_address" class="form-control"
                                       name="email-address"
                                       v-bind:class="{'is-invalid':((serverError) && (username==''))}"
                                       v-model="username" required
                                       autofocus>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input type="password" id="password" class="form-control" name="password"
                                       v-bind:class="{'is-invalid':((serverError) && (password==''))}"
                                       v-model="password" required>
                            </div>
                        </div>

                        <div v-if="serverError" class="form-group row">
                            <div class="alert alert-danger mx-auto" role="alert">
                                {{ serverError }}
                            </div>
                        </div>

                        <div v-if="successMessage" class="form-group row">
                            <div class="alert alert-success mx-auto" role="alert">
                                {{ successMessage }}
                            </div>
                        </div>

                        <div class="col-md-6 offset-md-4">
                            <button type="submit" class="btn btn-lg btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: 'login',
        props: {
            dataSuccessMessage: {
                type: String,
            }
        },
        data() {
            return {
                username: '',
                password: '',
                serverError: '',
                successMessage: this.dataSuccessMessage,
                loading: false,
            }
        },
        methods: {
            ...mapActions({
                loginReq: 'loginReq',
            }),
            async login() {
                this.loading = true
                this.loginReq({
                    username: this.username,
                    password: this.password,
                    grant_type: 'password',
                    client_id: 2,
                    client_secret: 'YB9yncyFfIJU5Bxs2Okgfmxe6MGM95c0KGTf5pxG',
                }).then(response => {
                    this.loading = false
                    this.$router.push({name: 'dashboard'})
                })
                    .catch(error => {
                        console.log(error.response)
                        this.loading = false
                        this.serverError = 'Your credentials are incorrect. Please try again'
                        this.password = ''
                        this.username = ''
                        this.successMessage = ''
                    })
            }
        }
    }
</script>