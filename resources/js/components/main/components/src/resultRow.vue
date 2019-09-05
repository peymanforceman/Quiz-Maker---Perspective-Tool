<template>
    <tr>
        <th scope="row">{{ result.id }}</th>
        <th scope="row">{{ result.quiz.title }}</th>
        <td>{{ result.participant }}</td>
        <td>{{ result.key }}</td>
        <td>{{ result.meaning }}</td>
        <td>
            <button @click="show_results" style="border-radius: 0.25rem;" type="button"
                    class="btn btn-secondary">Show Answers
            </button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "resultRow",
        props: {
            result: {
                required: true,
                type: Object,
            },
        },
        methods: {
            show_results() {
                this.$root.$emit('show_answers', this.result)
            }
        }
    }
</script>

<style scoped>

</style>