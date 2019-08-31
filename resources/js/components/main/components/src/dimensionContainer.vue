<template>
    <div class="result-grid-container">
        <span>{{ dimension.left_side }}</span>
        <div class="d-inline-flex align-self-center">
            <div v-bind:class="{'result-color':this.isLeftSide(),'not-result-color':(!this.isLeftSide())}"
                 class="answer-bar answer-bar-left "></div>
            <div v-bind:class="{'result-color':(!this.isLeftSide()),'not-result-color':(this.isLeftSide())}"
                 class="answer-bar answer-bar-right"></div>
        </div>
        <span>{{ dimension.right_side }}</span>
    </div>
</template>

<script>
    export default {
        name: "dimensionContainer",
        props: {
            dimension: {
                required: true,
                type: Object,
            },
            result: {
                required: true,
                type: Object,
            },
            index: {
                required: true,
                type: Number,
            }
        },
        methods: {
            isLeftSide() {
                if (this.result.key.charAt(this.index) == this.dimension.abbreviation.charAt(0)) {
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>