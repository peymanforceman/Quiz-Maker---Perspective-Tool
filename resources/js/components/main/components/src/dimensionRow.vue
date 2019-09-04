<template>
    <tr>
        <th scope="row">{{ dimension.id }}</th>
        <th scope="row">{{ dimension.abbreviation }}</th>
        <td>{{ dimension.left_side }}</td>
        <td>{{ dimension.right_side }}</td>
        <td>
            <div class="dropdown show">
                <a style="border-radius: 0.25rem;" class="btn btn-secondary dropdown-toggle" href="#" role="button"
                   id="dropdownMenuLink"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Actions
                </a>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Edit</a>
                    <a class="dropdown-item" href="#">Remove</a>
                </div>
            </div>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "dimensionRow",
        props: {
            dimension: {
                required: true,
                type: Object,
            },
        },
    }
</script>