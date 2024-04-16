<template>
  <q-layout view="hHh lpR fFf" class="body">
    <q-header class="opciones">
      <div>
         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/2.gif" alt=""></div>
     
      <div class="opciones3">
        <div class="opciones2">
          <router-link class="link" to="/">Inicio</router-link>
        </div>
        <div class="opciones2">
          <router-link class="link" to="/juego">Juego</router-link>
        </div>
      </div>
    </q-header>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>

.body {
  background-image: url(../fondo.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.opciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FF6B6B; /* Color de fondo */
  color: white; /* Color del texto */
  padding: 10px; /* Espaciado interno */
}

.opciones img {
  width: 40px; /* Tamaño de la imagen del logo */
  margin-right: 10px; /* Espaciado entre la imagen y el texto */
}

.link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: black;
}

.opciones2 {
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2px;
  color: white;
}

.opciones2:hover {
  background-color: rgba(224, 216, 216, 0.645);
  
}
.opciones3 {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.page-container {
  padding-top: 0 !important; /* Sobrescribe el padding-top */
}
</style>
