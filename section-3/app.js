const app = Vue.createApp({
  data() {
    return {
      courseGoal: [2, 1].sort(),
      courseGoalA: '<h1>Hello</h1>',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      return this.courseGoalA;
    },
  },
});

app.mount('#user-goal');
