<script setup>
import { ref, watch } from "vue";

const innerVisible = ref(false);
const props = defineProps(["visible"]);
const emit = defineEmits(["onClosed"]);

watch(
  () => props.visible,
  (nValue) => {
    innerVisible.value = nValue;
  }
);

function onClose() {
  emit("onClosed");
}
</script>
<template>
  <v-dialog v-model="innerVisible" persistent width="300px">
    <v-card rounded="xl" title="Acerca De">
      <v-card-text> V 1.0.0 </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="accent" rounded="xl" variant="text" @click="onClose()"
          >Cerrar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
