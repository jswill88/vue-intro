


var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

setInterval(() => app3.seen = !app3.seen, 1100)

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

app4.todos.push({ text: 'New Item'})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js! CLICK ME TO HIDE',
    showing: true
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    },
    flipShow: function () {
      this.showing = false;
      setTimeout(() => this.showing = true, 800)
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'The input controls me'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
  }
})