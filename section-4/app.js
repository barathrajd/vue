const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    incrementDynamic(num) {
      this.counter = this.counter + num;
    },
    decrementDynamic(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    },
  },
});

app.mount('#events');
