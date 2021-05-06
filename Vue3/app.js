const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

Vue.createApp(Counter).mount('#counter');

const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString() // Gives the time the page loaded, does not consistently update
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute');

const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling')

const TwoWayBinding = {
  data() {
    return {
      message: 'Attached to input'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  },
  mounted() {
    setInterval(() => this.seen = !this.seen, 1000)
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'cat' },
        { text: 'dog' },
        { text: 'fish' },
      ],
      dynamicColor: 'color:red',
    }
  },
  mounted() {
    const colors = ['red', 'blue', 'green','brown']
    let i = 0;
    setInterval(() => {
      this.dynamicColor = 'color:' + colors[i % colors.length]
      i++;
    }, 400)
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')

const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Other food' }
      ],
      title: '<h1>TODO</h1>'
    }
  }
}

const app = Vue.createApp(TodoList)

app.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

app.mount('#todo-list-app');