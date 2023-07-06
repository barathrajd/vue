const app = Vue.createApp({
  data() {
    return {
      courseGoal: [2, 1].sort(),
    };
  },
});

app.mount('#user-goal');
