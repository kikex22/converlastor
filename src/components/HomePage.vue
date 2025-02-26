<template>
  
  <div id="grafico">
    Realiza
    <div id="flip">
      <div><div>Tiempo</div></div>
      <div><div>masa</div></div>
      <div><div>longitud</div></div>
      <div><div>presion</div></div>
      <div><div>Divisas</div></div>
    </div>
    Conversiones!
  </div>
  <v-hover>
    <v-container class="flex-column d-flex align-center justify-center text-center">
     
      
      <v-card
        color="red-darken-3"
        class="pa-4 mt-5 hover-card"
        max-width="800"
      >
        <v-card-title><strong>Conversion de Tiempo</strong></v-card-title>
        <v-card-text>
         
          <p>Unidad que mide la duración de eventos. Se expresa en anos, meses, semanas, segundos, minutos, horas, días, milisegundos, microsegundos. </p>
        </v-card-text>
      </v-card>

      <v-card
        color="red-darken-3"
        class="pa-4 mt-5 hover-card"
        max-width="800"
      >
        <v-card-title><strong> Conversion de Masa</strong></v-card-title>
        <v-card-text>
          
          <p>Cantidad de materia en un objeto. Se mide en gramos, kilogramos, gramos, libras, onzas, toneladas.</p>
        </v-card-text>
      </v-card>

      <v-card
        color="red-darken-3"
        class="pa-4 mt-5 hover-card"
        max-width="800"
      >
        <v-card-title><strong>Conversion de Longitud</strong></v-card-title>
        <v-card-text>
         
          <p>Distancia entre dos puntos. Se expresa en millas, kilómetros, metros, milimetros, centimetros, pulgadas, pies, yardas.</p>
        </v-card-text>
      </v-card>

      <v-card
        color="red-darken-3"
        class="pa-4 mt-5 hover-card"
        max-width="800"
      >
        <v-card-title><strong>Conversion de Presion</strong></v-card-title>
        <v-card-text>
          
          <p>Fuerza ejercida sobre una superficie por unidad de área. Se mide en Gigapascal, Megapascal, Kilopascal ,Pascal, Megabar, Bar, Atmósfera, Psi </p>
        </v-card-text>
      </v-card>

      <v-card
        color="red-darken-3"
        class="pa-4 mt-5 hover-card"
        max-width="800"
      >
        <v-card-title><strong>Conversion de Divisas</strong></v-card-title>
        <v-card-text>
         
          <p>Representación monetaria utilizada en distintos países. Se convierten entre sí según tasas de cambio variables. Dolar (USD),Peso Mexicano (MXN),Bolivar Soberano (VES),Peso Colombiano (COP),Euro (EUR),Libras Esterlinas (GPB),Yen (JPY)</p>
        </v-card-text>
      </v-card>
    </v-container>
  </v-hover>

  
</template>

<script>
export default {
  data() {
    return {};
  }
};
//<img :src="require('@/assets/bob.png')" alt="bob" width="400px"/>
</script>

<style scoped>
@media (max-width: 799px) {
  h1 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1rem;
    padding: 0 10px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#grafico {
  color: #000000;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  padding-top: 40px;
  text-align: center;
  width: 100%;
 
  display: block;
  border: 4px solid #800000; /* Borde blanco */
  border-radius: 700px; /* Bordes redondeados */
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* Sombra */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

#flip {
  height: 50px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}
#flip div:nth-child(2) div { background: rgb(168, 184, 0); } /* Cambia el 2do (Masa) a amarillo */
#flip div:nth-child(4) div { background: purple; } /* Cambia el 4to (Todo) a morado */

#flip div:first-child {
  animation: show 9s linear infinite;
}

#flip div div {
  background: #42c58a;
}

#flip div:first-child div {
  background: #4ec7f3;
}

#flip div:last-child div {
  background: #DC143C;
}

@keyframes show {
  0%   { margin-top: -360px; }
  10%  { margin-top: -270px; }
  30%  { margin-top: -270px; }
  40%  { margin-top: -180px; }
  50%  { margin-top: -180px; }
  60%  { margin-top: -90px; }
  70%  { margin-top: -90px; }
  80%  { margin-top: 0px; }
  100% { margin-top: -360px; }
}



</style>
