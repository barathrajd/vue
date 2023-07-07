const app = Vue.createApp({
  data() {
    return {
      courseGoal: [2, 1].sort(),
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      alert('asdf');
    },
  },
});

app.mount('#user-goal');
