<template>
   <v-container class="flex-column d-flex align-center justify-center text-center">
   
   <h1> Unidades de Masa</h1>
 <v-card class="pa-4 "   width="800"> 
    <v-text-field  v-model="inputVal" color="red-darken-3"  label="Ingrese valor" type="number"></v-text-field>
 <v-select label="de" v-model="fromUnit" color="red-darken-3" :items="units" dense></v-select>
 <v-select label="a" v-model="toUnit" color="red-darken-3" :items="units" dense></v-select>
 <v-btn color="red-darken-3" @click="convert">Convert</v-btn>
 <v-alert v-if="result" color="red-darken-3" class="mt-3">Result: {{ result }} {{ toUnit }}</v-alert>
 </v-card>
 </v-container>
</template>

<script>
import {create,all} from 'mathjs';
const math=create(all);

export default{
    data(){
        return{
            inputVal:null,
            fromUnit:'kg',
            toUnit:'g',
            result:null,
            units:['kg','g', 'lb', 'oz', 'ton', 'mg'],
        };
          

    },
    methods:{
        convert(){
            try{
                const input=math.unit(this.inputVal,this.fromUnit);
                this.result=input.toNumber(this.toUnit);

            }catch(error){
                this.result='error'
            }
        },
    },
};

</script>