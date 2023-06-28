const app = Vue.createApp({
    //data, fucntions
    data() {
        return {
            title: 'Kafka on the Shore',
            author: 'Harakuri Murikama',
            age: 61
        }
    },
    methods: {
        changeTitle(title) {
            if (this.title === 'Kafka on the Shore') {
                this.title = 'Dance Dance Dance'
            } else if (this.title === 'Dance Dance Dance') {
                this.title = title
            } else {
                this.title = 'Kafka on the Shore'
            }
        }
    }
    //template: '<h2>I am the template</h2>'
})

app.mount('#app')