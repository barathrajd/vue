function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
  computed: {
    monsterHealthBarStyles() {
      this.currentRound++;
      return { width: this.monsterHealth + '%' };
    },
    playerHealthBarStyles() {
      return { width: this.playerHealth + '%' };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      const attackValue = randomNumber(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = randomNumber(8, 15);
      this.playerHealth -= attackValue;
    },
    specialMonsterPlayer() {
      const attackValue = randomNumber(10, 25);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = randomNumber(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
    },
  },
});

app.mount('#game');
