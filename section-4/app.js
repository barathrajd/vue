const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
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
    setName(e, welecome) {
      this.name = e.target.value;
    },
    submitForm() {
      // alert(this.confirmedName);
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
  },
});

app.mount('#events');
