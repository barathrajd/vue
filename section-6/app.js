const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
      this.enteredGoal = '';
    },
    removeGoal(num) {
      this.goals.splice(num, 1);
    },
  },
});

app.mount('#user-goals');
