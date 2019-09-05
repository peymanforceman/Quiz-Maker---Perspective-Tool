<template>
    <div class="container">
        <div class="bs-docs-section clearfix">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            Available Dimensions:
                        </div>
                        <div class="card-body">
                            <table id="tablePreview" class="table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Abbreviation</th>
                                    <th>Left side</th>
                                    <th>Right side</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <dimension-row v-for="(item, index) in getDimensions"
                                               :key="item.id"
                                               :dimension="item"
                                               :index="index"/>
                                </tbody>
                            </table>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="btn btn-primary">+ Add New Dimension</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import QuizRow from "../src/quizRow";
    import DimensionRow from "../src/dimensionRow";

    export default {
        name: "dimensions",
        components: {DimensionRow, QuizRow},
        data() {
            return {}
        },
        computed: {
            ...mapGetters({
                getDimensions: 'getDimensions',
            })
        },
        methods: {
            ...mapActions({
                getAllDimensions: 'getAllDimensions',
            }),
            async reqAllDimensions() {
                await this.getAllDimensions()
            }
        },
        mounted() {
            this.reqAllDimensions();
        }
    }
</script>