const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  computed: {
    fullname() {
      console.log('Computed Running....');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'test';
    },
  },
  methods: {
    outputFullName() {
      console.log('Running....');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'test';
    },
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
