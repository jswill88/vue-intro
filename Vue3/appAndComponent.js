const app = Vue.createApp({})
// also try chaining these together
app.component('SearchInput', SearchInputComponent)
app.directive('focus', FocusDirective)
app.use(LocalPlugin)
