const app = Vue.createApp({
  data() {
    return {
      courseGoal: [2, 1].sort(),
      vueLink: 'https://vuejs.org/',
    };
  },
});

app.mount('#user-goal');
