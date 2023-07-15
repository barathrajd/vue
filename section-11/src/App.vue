<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :email-address="friend.email"
      :phone-number="friend.phone"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFavoriteStatus"
    ></friend-contact>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: '1',
          name: 'John',
          phone: '0123 4567 890',
          email: 'john@gmail.com',
          isFavorite: true
        },
        {
          id: '2',
          name: 'Doe',
          phone: '0123 4567 890',
          email: 'doe@gmail.com',
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const currentFriend = this.friends.find((friend) => friend.id === friendId)
      currentFriend.isFavorite = !currentFriend.isFavorite
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  list-style: none;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
