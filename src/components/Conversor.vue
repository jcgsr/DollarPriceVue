<template>
  <div class="conversor">
    <h2>{{ moedaA }} para {{ moedaB }}</h2>
    <v-input>
      <v-text-field type="number" v-model="moedaA_value" :placeholder="moedaA"></v-text-field>
    </v-input>
    <v-btn id="btn" color="success" @click="converter">Converter</v-btn>
    <h2 id="value">{{ moedaB_value | currency }}</h2>
  </div>
</template>

<script>
export default {
  name: "Conversor",
  props: ["moedaA", "moedaB"],
  data() {
    return {
      moedaA_value: "",
      moedaB_value: 0,
    };
  },

  methods: {
    converter() {
      let de_para = this.moedaA + "_" + this.moedaB;
      let url =
        "https://free.currconv.com/api/v7/convert?q=" +
        de_para +
        "&compact=ultra&apiKey=41c3d3eae7092993a692";

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          let cotacao = json[de_para];
          this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(
            2
          );
        });
    },
  },
  filters: {
    currency(value) {
      return "R$ " + value.toLocaleString();
    },
  },
};
</script>

<style>
#btn {
  color: aliceblue;
}

#value {
  margin-top: 1rem;
}
</style>
