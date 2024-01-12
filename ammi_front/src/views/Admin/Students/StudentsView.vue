<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card rounded="xl">
          <v-card-title>
            <v-row>
              <v-col cols="2"> Alumnos </v-col>
              <v-col cols="4">
                <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  color="primary"
                  name="search"
                  label="Buscar"
                  id="search"
                  density="compact"
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-item>
            <v-container fluid>
              <v-data-table :items="students">
                <template v-slot:item.actions>
                  <v-tooltip text="Ver Alumno">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        v-bind="props"
                        icon="mdi-eye"
                        variant="icon"
                      ></v-btn>
                    </template>
                  </v-tooltip>
                  <v-tooltip text="Eliminar Alumno">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        v-bind="props"
                        variant="icon"
                        icon="mdi-delete"
                        color="red"
                      ></v-btn>
                    </template>
                  </v-tooltip>
                </template>
              </v-data-table>
            </v-container>
          </v-card-item>
        </v-card>
      </v-col>
      <v-tooltip text="Agregar Alumno">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            color="primary_light"
            position="absolute"
            style="left: 256px; top: 150px"
            size="55"
            rounded="lg"
          >
            <v-icon size="25">mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
    </v-row>
  </v-container>
</template>

<script setup>
const students = [
  {
    name: "African Elephant",
    species: "Loxodonta africana",
    diet: "Herbivore",
    habitat: "Savanna, Forests",
    actions: "",
  },
  {
    name: "African Elephant",
    species: "Loxodonta africana",
    diet: "Herbivore",
    habitat: "Savanna, Forests",
    actions: "",
  },
  {
    name: "African Elephant",
    species: "Loxodonta africana",
    diet: "Herbivore",
    habitat: "Savanna, Forests",
    actions: "",
  },
  {
    name: "African Elephant",
    species: "Loxodonta africana",
    diet: "Herbivore",
    habitat: "Savanna, Forests",
    actions: "",
  },
];
</script>
