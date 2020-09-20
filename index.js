var app = new Vue({
  el: '#app',
  data: {
    number: 0,
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    members: false
  },
  methods: {
    displayNumber: function(n){
      if (n=='.' && this.number.match(/\./)){
        return
      } else if (this.number==0){
        this.number = n
        return
      }
      this.number = String(this.number) + String(n)
    },
    clearNumber: function(){
      this.number = 0
    }
  },
  computed: {
    costPerPerson: function(){
      return this.number / this.members
    }
  }
})
