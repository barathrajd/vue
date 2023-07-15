const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          name: 'John',
          phone: '01234 1234 123',
          email: 'john@gmail.com',
        },
        {
          id: 2,
          name: 'Doe',
          phone: '01234 1234 123',
          email: 'doe@gmail.com',
        },
      ],
    };
  },
});

app.component('friend-contact', {
  template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleShow">
        {{ showDetails ? 'Hide' : 'Show'}} Details
        </button>
        <ul v-if="showDetails">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
  data() {
    return {
      showDetails: false,
      friend: {
        id: 1,
        name: 'John',
        phone: '01234 1234 123',
        email: 'john@gmail.com',
      },
    };
  },
  methods: {
    toggleShow() {
      this.showDetails = !this.showDetails;
    },
  },
});

app.mount('#app');
