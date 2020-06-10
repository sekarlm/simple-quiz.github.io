<template>
    <div id="app">
        <Header 
            :numCorrect="correct_answer"
            :numTotal="total_answered"
        />
        <b-container class="bv-example-row">
            <b-row>
                <b-col sm="6" offset="3">
                    <QuestionBox
                        v-if="list_questions.length"
                        :currQuestion="list_questions[indexQuestion]"
                        :next="next"
                        :increment="increment"
                        :allowNext="allowNext"
                        :score="[correct_answer, total_answered]"
                    />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
    name: 'App',
    components: {
        Header,
        QuestionBox
    },
    data() {
        return {
            questions: [],
            indexQuestion: 0,
            allowNext: true
        }
    },
    computed: {
        correct_answer() {
            return this.$store.state.correct_answer
        },
        total_answered() {
            return this.$store.state.total_answered
        },
        list_questions() {
            return this.$store.state.questions
        }
    },
    methods: {
        next() {
            if(this.indexQuestion < 9) {
                this.indexQuestion++
                if (this.indexQuestion > 8) {
                    this.allowNext = false
                }
            } else {
                this.indexQuestion = 0
            }

        },
        increment(isCorrect) {
            if (isCorrect) {
                this.$store.commit('correct_inc')
            }
            this.$store.commit('total_inc')
        }
    },
    mounted() {
        this.$store.dispatch('get_questions')
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
