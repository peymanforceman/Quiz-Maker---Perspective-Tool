<template>
    <tr>
        <th scope="row">{{ quiz.id }}</th>
        <th scope="row">{{ quiz.title }}</th>
        <td>{{ quiz.description }}</td>
        <td>
            <div class="dropdown show">
                <a style="border-radius: 0.25rem;" class="btn btn-secondary dropdown-toggle" href="#" role="button"
                   id="dropdownMenuLink"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Questions</a>
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Remove</a>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "quizRow",
        props: {
            quiz: {
                required: true,
                type: Object,
            },
        },
    }
</script>