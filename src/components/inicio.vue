<template>
  <div class="container">
    <div class="pokemon">
      <input
        type="text"
        name="name"
        id="namePokemon"
        v-model="nameP"
        placeholder="Nombre Pokemon"
      />
      <button class="buttonP" @click="traer()">Buscar</button>
    </div>
    <div class="card" v-if="Object.entries(pokemon).length > 0">
      <div class="pokemonPrincipal">
        <h1>{{ pokemon.name }}</h1>
        <img
          v-if="pokemon.sprites && pokemon.sprites.other.dream_world.front_default"
          :src="pokemon.sprites.other.dream_world.front_default"
          alt="Imagen del Pokemon"
        />
        <p>Peso: {{ pokemon.weight / 10 }} Kg</p>
        <p>Altura: {{ pokemon.height / 10 }} m</p>
        <ul class="type">
          <h2>Tipos:</h2>
          <li v-for="(type, key) in pokemon.types" :key="key" :class="type.type.name">
            <span>{{ type.type.name }}</span>
          </li>
        </ul>
      </div>

      <div class="pokemonData">
        <ul class="stats">
          <h2>Stats:</h2>
          <li v-for="(stat, key) in pokemon.stats" :key="key">
            <span>{{ stat.stat.name }}: {{ stat.base_stat }}</span>
            <progress :value="stat.base_stat" max="255"></progress>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";



let pokemon = ref({
  name: "bulbasaur", // Pokemon predeterminado
  sprites: {
    other: {
      dream_world: {
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" // Imagen predeterminada de Bulbasaur
      }
    }
  },
  weight: 69,
  height: 7,
  types: [{ type: { name: "grass" } }, { type: { name: "poison" } }], // Tipos de Bulbasaur
  stats: [
    { stat: { name: "hp" }, base_stat: 45 },
    { stat: { name: "attack" }, base_stat: 49 },
    { stat: { name: "defense" }, base_stat: 49 },
    { stat: { name: "speed" }, base_stat: 45 },
    { stat: { name: "special-attack" }, base_stat: 65 },
    { stat: { name: "special-defense" }, base_stat: 65 }
  ]
});
const nameP = ref("");

async function traer() {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${nameP.value}`;
    let response = await axios.get(url);
    pokemon.value = response.data;
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>

.container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 105vh;
  width: 100vh;
  background: linear-gradient(to bottom right, #FF6B6B, #FFFFFF);
  border-radius: 15%;

}

.pokemon {
  display: flex;
  gap: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.card {
  display: flex;
  flex-direction: row;
  gap: 150px;
  width: max-content; /* Hace que el card ocupe el 100% del ancho disponible */
  height: max-content;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; /* Incluye el padding y el borde en el ancho total */
}

.buttonP {
  background-color: #FF6B6B;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.buttonP:hover {
  background-color: #FF5252;
}

.pokemonPrincipal {
  text-align: center;
}

.pokemonPrincipal h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.pokemonPrincipal img {
  max-width: 200px;
  margin-bottom: 10px;
}

.type {
  list-style-type: none;
  padding: 0;
}

.type h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.type li {
  display: inline-block;
  background-color: #FF6B6B;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  margin-right: 10px;
}

.stats {
  list-style-type: none;
  padding: 0;
}

.stats h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.stats li {
  margin-bottom: 10px;
}

.stats span {
  display: inline-block;
  width: 100px;
}

progress {
  width: 100%;
  height: 20px;
  border-radius: 10px;
}



</style>
