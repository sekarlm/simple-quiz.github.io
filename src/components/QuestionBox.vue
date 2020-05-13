<template>
    <div>
        <b-jumbotron>
            <template v-slot:lead>
            {{currQuestion.question}}
            </template>

            <hr class="my-4">

            <p>
            List of Answer
            </p>

            <b-button variant="primary" href="#">Submit</b-button>
            <b-button @click="next" variant="success" href="#">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
export default {
    props: {
        currQuestion: Object,
        next: Function
    }
}
</script>