<template>
    <div class="container result-text">
        <template v-if="result!=null && getDimensions !=null">
            <div class="row justify-content-center light-outline text-left">
                <div class="col-md-6 text-left align-self-center">
                    <h1>Your Perspective</h1>
                    <p>Your Perspective Type is {{ result.key }}</p>
                </div>
                <div class="col-md-6">
                    <dimension-container v-for="(item, index) in getDimensions"
                                         :key="item.id"
                                         :dimension="item"
                                         :index="index"
                                         :result="result"/>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import DimensionContainer from "../src/dimensionContainer";

    export default {
        name: "result",
        components: {DimensionContainer},
        data() {
            return {
                id: null,
                result: null,
            }
        },
        computed: {
            ...mapGetters({
                getDimensions: 'getDimensions',
            })
        },
        created() {
            this.id = this.$route.params.id;
        },
        methods: {
            ...mapActions({
                getResult: 'getResult',
                getAllDimensions: 'getAllDimensions',
            }),
            async updateResult() {
                if (!this.result) {
                    await this.getResult(this.id)
                    this.result = this.$store.getters.getResultById(this.id)
                }
                this.updateDimensions()
            },
            async updateDimensions() {
                if (!this.dimensions) {
                    await this.getAllDimensions()
                }
            },
        },
        mounted() {
            this.result = this.$store.getters.getResultById(this.id)
            this.updateResult()
        },
    }
</script>