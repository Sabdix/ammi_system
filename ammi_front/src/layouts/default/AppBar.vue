<template>
  <v-navigation-drawer
    color="#f1f3f4"
    floating
    style="border-right: none"
    permanent
  >
    <v-container fluid>
      <v-card rounded="xl">
        <v-list nav>
          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item
                rounded="xl"
                v-bind="props"
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Sandra Adams"
                subtitle="sandra_a88@gmailcom"
              ></v-list-item>
            </template>
            <v-list-item
              rounded="xl"
              title="Ayuda"
              append-icon="mdi-help"
              @click="aboutOpen()"
            ></v-list-item>
            <v-list-item
              rounded="xl"
              append-icon="mdi-logout"
              title="Cerrar Sesión"
            ></v-list-item>
          </v-list-group>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-home"
            to="/admin/home"
            title="Inicio"
            rounded="xl"
            color="primary"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-school"
            title="Alumnos"
            color="primary"
            to="/admin/students"
            rounded="xl"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-tie"
            title="Maestros"
            color="primary"
            to="/admin/teachers"
            rounded="xl"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-shape"
            title="Materias"
            color="primary"
            to="/admin/subjects"
            rounded="xl"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group"
            title="Grupos"
            color="primary"
            to="/admin/groups"
            rounded="xl"
          ></v-list-item>
        </v-list>
      </v-card>
      <about-modal :visible="aboutVisible" @onClosed="aboutVisible = false" />
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
import AboutModal from "@/components/modals/AboutModal";
import { ref } from "vue";

const aboutVisible = ref(false);

function aboutOpen() {
  aboutVisible.value = true;
}
</script>
