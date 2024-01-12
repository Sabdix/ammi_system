<script setup></script>
<template>
  <v-app style="background-color: #f1f3f4">
    <v-row wrap no-gutters style="height: 100%">
      <v-col md="5" style="height: 100%" class="ma-0 pa-0 bg-image visibilidad">
      </v-col>
      <v-col sm="12" md="7" class="d-flex">
        <v-container fill-height class="align-self-center">
          <v-row wrap justify="center">
            <!-- <v-col sm="12" md="12" class="pa-5" align="center">
               <v-avatar size="200">
                 <v-img src="@/assets/img/groove_logo.png/" alt="avatar" />
               </v-avatar>
             </v-col> -->
            <v-col sm="12" md="8" class="pa-2">
              <v-card class="pa-2" rounded="xl">
                <h1 class="primary-title text-center text-primary_text">
                  Autenticación
                </h1>
                <p class="text-center pa-0 ma-0 parrafo text-secondary_text">
                  Ingrese tus credenciales para ingresar al sistema
                </p>
                <v-card-text>
                  <v-form ref="form_ref" lazy-validation>
                    <v-container>
                      <v-text-field
                        name="username"
                        label="Ingresa tu usuario"
                        id="username"
                        variant="outlined"
                      ></v-text-field>

                      <v-text-field
                        name="password"
                        label="Ingresa tu contraseña"
                        id="password"
                        type="password"
                        variant="outlined"
                      ></v-text-field>

                      <v-checkbox
                        label="Recordar credenciales"
                        color="accent"
                        variant="outlined"
                        hide-details
                      ></v-checkbox>
                      <v-row wrap justify="center">
                        <v-col cols="12" class="text-center shrink">
                          <v-expand-transition>
                            <div>
                              <v-alert> </v-alert>
                            </div>
                          </v-expand-transition>
                        </v-col>
                      </v-row>
                      <v-row wrap justify="center" class="mt-10">
                        <v-col cols="6" class="text-center">
                          <v-btn
                            rounded="xl"
                            large
                            color="accent"
                            depressed
                            block
                            >Iniciar Sesión</v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<style>
.bg-image {
  background: url("@/assets/img/login-wallpaper.jpg") no-repeat;
  background-size: cover;
}
</style>
