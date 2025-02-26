<template>
  <v-container class="text-center">
    <v-card class="pa-4 mx-auto" width="500">
      <v-card-title>Conversor de Divisas</v-card-title>

      <v-select
        label="De"
        v-model="fromCurrency"
        :items="currencies"
        item-title="name"
        item-value="code"
        color="red-darken-3"
        dense
      ></v-select>

      <v-select
        label="A"
        v-model="toCurrency"
        :items="currencies"
        item-title="name"
        item-value="code"
        color="red-darken-3"
        dense
      ></v-select>

      <v-text-field
        v-model.number="amount"
        label="Cantidad"
        type="number"
        color="red-darken-3"
      ></v-text-field>

      <v-btn color="red-darken-3" @click="convert" block>Convertir</v-btn>

      <v-alert v-if="result !== null" color="red-darken-3" class="mt-3">
        {{ amount }} {{ fromCurrency }} = {{ result }} {{ toCurrency }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      apiKey: "cur_live_mIP7jcM0yzuHJmtQjsYGBS6wGMTi5YETJ2DKx76l",
      baseUrl: "https://api.currencyapi.com/v3/latest",
      fromCurrency: "USD",
      toCurrency: "EUR",
      amount: 1,
      result: null,
      currencies: [
        { code: "USD", name: "Dólar estadounidense" },
        { code: "EUR", name: "Euro" },
        { code: "GBP", name: "Libra esterlina" },
        { code: "JPY", name: "Yen japonés" },
        { code: "MXN", name: "Peso mexicano" },
        { code: "COP", name: "Peso colombiano" },
        { code: "CNY", name: "Yuan chino" },
        { code: "VES", name: "Bolívar fuerte" }
      ]
    };
  },
  methods: {
    async convert() {
      try {
        const response = await fetch(`${this.baseUrl}?apikey=${this.apiKey}&base_currency=${this.fromCurrency}`);
        const data = await response.json();

        if (data.data && data.data[this.toCurrency]) {
          const rate = data.data[this.toCurrency].value;
          this.result = (this.amount * rate).toFixed(2);
        } else {
          throw new Error("Moneda no encontrada");
        }
      } catch (error) {
        console.error("Error obteniendo tasa de cambio:", error);
        this.result = "Error";
      }
    }
  }
};
</script>

<style scoped>
@media (max-width: 799px) {
  h1 {
    font-size: 1.5rem;
  }
  .v-card {
    width: 100% !important;
  }
}
</style>