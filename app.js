const app = Vue.createApp({
    //create a function within the object and return an object
    //properties inside the object are accesible inside the template
    data() {
        return {
            showText: true,
            title: 'Kafka on the Shore',
            author: 'Harakuri Murikama',
            age: 61
        }
    },
    //a method property of the compenent filled with methods to be used
    methods: {
        //it doesn't have to be this complicated i just wanted to pass an argument in
        changeTitle(title) {
            if (this.title === 'Kafka on the Shore') {
                this.title = 'Dance Dance Dance'
            } else if (this.title === 'Dance Dance Dance') {
                this.title = title
            } else {
                this.title = 'Kafka on the Shore'
            }
        },
        toggleShowText() {
            this.showText = !this.showText
        }
    }
    //template: '<h2>I am the template</h2>'
})

app.mount('#app')