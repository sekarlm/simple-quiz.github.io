<template>
    <div>
        <b-jumbotron>
            <template v-slot:lead>
            {{currQuestion.question}}
            </template>

            <hr class="my-4">

            <b-list-group>
                <b-list-group-item
                    v-for="(answer, index) in answers"
                    :key="index"
                    @click="selectAnswer(index)"
                    :class="[selected === index ? 'selected' : '']"
                >
                    {{answer}}
                </b-list-group-item>
            </b-list-group>

            <b-button variant="primary" href="#">
                Submit
            </b-button>
            <b-button @click="next" variant="success" href="#">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    props: {
        currQuestion: Object,
        next: Function
    },
    data() {
        return {
            selected: null,
            shuffledAnswers: []
        }
    },
    computed: {
        answers() {
            let answers = [...this.currQuestion.incorrect_answers]
            answers.push(this.currQuestion.correct_answer)
            return answers
        }
    },
    watch: {
        currQuestion: {
            immediate: true,
            handler() {
                this.selected = null
                this.shuffleAnswer()
            }
        }
    },
    methods: {
        selectAnswer(index) {
            this.selected = index
        },
        shuffleAnswer() {
            let answers = [...this.currQuestion.incorrect_answers, this.currQuestion.correct_answer]
            this.shuffledAnswers = _.shuffle(answers)
        }
    },
    mounted() {
        console.log(this.currQuestion)
    }
}
</script>

<style scoped>
.list-group {
    margin-bottom: 15px;
}

.list-group-item:hover {
    background: #eee;
    cursor: pointer;
}

.btn {
    margin: 0 5px;
}

.selected {
    background-color: aquamarine;
}

.correct {
    background-color: green;
}

.incorrect {
    background-color: red;
}
</style>