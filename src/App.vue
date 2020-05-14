<template>
    <div id="app">
        <Header 
            :numCorrect="numCorrect"
            :numTotal="numTotal"
        />
        <b-container class="bv-example-row">
            <b-row>
                <b-col sm="6" offset="3">
                    <QuestionBox
                        v-if="questions.length"
                        :currQuestion="questions[indexQuestion]"
                        :next="next"
                        :increment="increment"
                        :allowNext="allowNext"
                        :score="[numCorrect, numTotal]"
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
            numCorrect: 0,
            numTotal: 0,
            allowNext: true
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
                this.numCorrect++
            }
            this.numTotal++
        }
    },
    mounted: function() {
        fetch('https://opentdb.com/api.php?amount=10&category=18&type=multiple', {
            method: 'get'
        })
        .then((response) => {
            return response.json()
        })
        .then((jsonData) => {
            this.questions = jsonData.results
        })
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
