const app = Vue.createApp({
  data() {
    return {
      counter: 0,
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
  },
});

app.mount('#events');
