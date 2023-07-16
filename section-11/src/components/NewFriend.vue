<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div>
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="phoneNumber" />
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="emailAddress" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      name: '',
      phoneNumber: '',
      emailAddress: ''
    }
  },
  methods: {
    submitData() {
      this.$emit('add-contact', {
        name: this.name,
        phone: this.phoneNumber,
        email: this.emailAddress
      })
      this.name = ''
      this.emailAddress = ''
      this.phoneNumber = ''
    }
  }
}
</script>
