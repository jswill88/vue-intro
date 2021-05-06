# Vue 3 notes

* Use variable `vm` to refer to a component instance
```js
const RootComponent = {
  data(){
    return { count: 4 }
  }
}
const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')

console.log(vm.count) // => 4

```

### Lifecycle Hooks:
* beforeCreate
* created
* beforeMount
* mounted
* beforeUpdate
* updated
* beforeUnmount
* unmounted

* `v-once`: does not change data after loading
* `v-html`: Used to output raw HTML
* To change attributes, use `v-bind:id="attr"` or whatever attribute you need to be dynamic. Put the attribute variable in quotes 

* `v-if` is an example of a directive. Directive attributes are expected to be a single JS attribute
* The attribute itslef can be dynamic with brackets: 
```html
<a v-bind:[attributeName]="url"></a>
```
* Use `.prevent` as a postfix to automatically use `event.preventDefault()`
```html
<form v-on:submit.prevent="onSubmit"></form>
```

### Shorthands
* `v-bind:`: `:`
* `v-on`: `@`

* With in DOM templates, avoid naming keys with uppercase characters, as the browser will convert them all to lowercase