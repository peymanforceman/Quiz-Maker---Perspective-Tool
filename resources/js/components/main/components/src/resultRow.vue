<template>
    <tr>
        <th scope="row">{{ result.id }}</th>
        <th scope="row">{{ result.quiz.title }}</th>
        <td>{{ result.participant }}</td>
        <td>{{ result.key }}</td>
        <td>{{ result.meaning }}</td>
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
    }
</script>

<style scoped>

</style>