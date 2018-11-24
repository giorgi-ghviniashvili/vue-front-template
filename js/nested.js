Vue.component('nested', {
  template: `
    <div>
      This nests foo component
      <foo></foo>
    </div>
  `,
  components: {
    foo: Vue.component('foo')
  }
})
