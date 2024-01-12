/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// Composables
import { createVuetify } from "vuetify";
import { es } from "vuetify/locale";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale: {
    locale: "es",
    messages: { es },
  },
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#607D8B",
          accent: "#231f20",
          primary_text: "#212121",
          secondary_text: "#757575",
          text: "#FFFFFF",
          divider: "#BDBDBD",
          primary_dark: "#455A64",
          primary_light: "#CFD8DC",
        },
      },
    },
  },
});
