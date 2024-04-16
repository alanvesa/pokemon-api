<template>
  <q-layout class="body4">
    <div class="card">
      
      <div class="img">
        <img
          :src="pokemon.sprites?.other.dream_world.front_default"
          alt="Pokemon Image"
          class="pokemon-image"
        />
        <input
          v-model="info"
          type="text"
          placeholder="Adivina el pokemon"
          class="input"
        />
        <button class="button" @click="buscar()">buscar</button>
      </div>
      <audio>
        <source src="../img_6652.mp3" type="audio/mpeg" />
      </audio>
      <audio class="audio">
        <source src="../no-creeeeo.mp3" type="audio/mpeg" />
      </audio>

      <button class="button2" @click="traer()">Volver a jugar</button>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

let img = ref({});
let pokemon = ref({});
let ataque = ref("");
let defensa = ref("");
let info = ref("");
let adivinado = ref(true);
async function traer() {
  try {
    let random = Math.floor(Math.random() * 700) + 1; // Genera un número aleatorio entre 1 y 500
    let r = await axios.get("https://pokeapi.co/api/v2/pokemon/" + random);
    pokemon.value = r.data;
    img.value = r.data.sprites.front_default;
    ataque.value = r.data.stats[1].base_stat;
    defensa.value = r.data.stats[2].base_stat;
    console.log(r);
    const pokemonImage = document.querySelector(".pokemon-image");
    pokemonImage.style.filter = "brightness(0.0)";
  } catch (error) {
    console.log(error);
  }
}
async function buscar() {
  if (pokemon.value.name === info.value) {
    console.log("ganador");
    const pokemonImage = document.querySelector(".pokemon-image");
    pokemonImage.style.filter = "brightness(1.0)";
    Swal.fire({
    icon: "success",
    title: "¡Correcto!",
    text: "¡Has adivinado el Pokémon!",
    background: "black",
    iconColor: "green",
    textColor: "white",
  });
    console.log(pokemon.sprites?.other.dream_world.front_default);
  } else {
    console.log("ff");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "¡Pokemon equivocado!",
      background: "black",
      iconColor: "red",
      textColor: "white",
    });
    const audioPlayer = document.querySelector(".audio");
    audioPlayer.play();
  }
}
onMounted(() => {
  traer();
  const audioPlayer = document.querySelector("audio");
  audioPlayer.play();
});

traer(); // Llama a la función para obtener un Pokémon aleatorio al cargar la página
</script>

<style scoped>
.body4 {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card {
  background-color: #fff; /* Color de fondo */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 20px; /* Espaciado interno */
  text-align: center; /* Alineación centrada */
  width: 450px;
  max-width: 600px; /* Ancho máximo */
}

.pokemon-image {
  max-width: 200px; /* Ancho máximo */
  margin-bottom: 20px; /* Espaciado inferior */
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  /* margin-left: 140px; */
  gap: 10px;
 
}


.input {
  width: 100%;
  margin-bottom: 10px; /* Espaciado inferior */
  padding: 10px; /* Espaciado interno */
  border: 1px solid #ccc; /* Borde */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 16px; /* Tamaño de fuente */
}

.card-body {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  /* margin-right: 200px; */
  align-items: center;
  gap: 20px;
  color: rgb(17, 16, 16);
  font-family: "Luckiest Guy", cursive;
  background-color: rgba(241, 232, 232, 0.486);
}
/* .card-body>*{
    display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(241, 232, 232);
  height: 5vh;
  border-radius: 20%;
  padding: 5px;
} */

.button {
  background-color: #FF6B6B; /* Color de fondo */
  color: #fff; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de puntero */
  transition: background-color 0.3s ease; /* Transición suave */
}

.button:hover {
  background-color: #FF5252; /* Cambio de color al pasar el ratón */
}

.button2 {
  background-color: #4CAF50; /* Color de fondo */
  color: #fff; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 20px; /* Espaciado interno */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cursor de puntero */
  transition: background-color 0.3s ease; /* Transición suave */
  margin-top: 20px; /* Espaciado superior */
}

.button2:hover {
  background-color: #45a049;
}

.button:hover {
  background-color: rgba(255, 0, 0, 0.838);
}
iframe {
  width: 100px; /* Ancho del iframe */
  height: 100px; /* Altura del iframe */
  margin-left: 20px; /* Ajuste de margen para separar el iframe del título */
  border-radius: 80%;
}

@media (max-height: 900px) {
  .body4 {
    width: 100%;
    height: 140vh; /* Establece la altura del layout al 100% del viewport */
  }

  .image-container img {
    width: 100%; /* Ajustar el ancho */
    height: 80%; /* Altura automática */
  }
}
</style>
