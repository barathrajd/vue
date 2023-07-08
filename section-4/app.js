const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      lastName: '',
    };
  },
  // To watch any function
  watch: {
    counter() {
      console.log(this.counter);
      if (this.counter >= 50) {
        this.counter = 0;
      }
    },
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log('Computed Running....');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
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
