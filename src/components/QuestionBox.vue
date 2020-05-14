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
                    :class="answerClass(index)"
                >
                    {{answer}}
                </b-list-group-item>
            </b-list-group>

            <b-button 
            variant="primary"
            @click="submitAnswer"
            :disabled="selected === null || answered"
            >
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
        next: Function,
        increment: Function
    },
    data() {
        return {
            selected: null,
            shuffledAnswers: [],
            correctIndex: null,
            answered: null
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
                this.answered = false
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
            this.correctIndex = this.shuffledAnswers.indexOf(this.currQuestion.correct_answer)
        },
        submitAnswer() {
            let isCorrect = false

            if (this.selected === this.correctIndex) {
                isCorrect = true
            }

            this.answered = true
            this.increment(isCorrect)
        },
        answerClass(index) {
            let answerClass = ''
            if (!this.answered && this.selected === index) {
                answerClass = 'selected'
            } else if (this.answered && this.correctIndex === index) {
                answerClass = 'correct'
            } else if (this.answered && this.selected === index && this.correctIndex !== index) {
                answerClass = 'incorrect'
            }
            return answerClass
        },
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
    background-color: lightblue;
}

.correct {
    background-color: lightgreen;
}

.incorrect {
    background-color: red;
}
</style>