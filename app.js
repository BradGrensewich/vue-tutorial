const app = Vue.createApp({
    //create a function within the object and return an object
    //properties inside the object are accesible inside the template
    data() {
        return {
            url: "https://www.google.com",
            showText: true,
            books: [
                {title: 'Harry Potter', author: 'Rowling', img:'./assets/1.jpg', isFav: false},
                {title: 'Hearts in Atlantis', author: 'King', img:'./assets/2.jpg', isFav: false},
                {title: 'Yellow Flowers on Green Grass', author: 'Ngap Anh', img:'./assets/3.jpg', isFav: false}
            ],
            
            title: 'Kafka on the Shore',
            author: 'Harakuri Murikama',
            age: 61,
            x: 0,
            y: 0
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
        },
        //whenever we have events in the browser like double click, mouseleave ect. we get access to an
        //optional even object. it's denoted here as e. it must be the first parameter to access it
        handleEvent(e, data) {
            //events have a ton of properties. here's an example
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(book) {
            book.isFav = ! book.isFav
        }
    },
    //computed properties are a way to define data properties in componenets that depend on other
    //components that are defined in data. it will react to the original data changing
    computed: {
        //whatever is returned by a computed function may be accessed in the template
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('#app')