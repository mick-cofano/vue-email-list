// Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
// La chiamata ajax vi ritornerà ogni volta un'email random.

const app = new Vue({
  el: "#app",
  data: {
    eMails: []
  },

  // ciclo che genera le 10 mail random tramite axios
  mounted: function() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(risposta => {
        this.eMails.push(risposta.data.response) // push delle mail
     });
    }
  }
});
