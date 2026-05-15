<template>

  <button
    class="ui-button ui-button--primary"
    @click="openPopup"
  >
    {{ text }}
  </button>

</template>

<script setup>
defineProps({

  text: {
    type: String,
    default: 'оставить заявку',
  },

});

const openPopup = () => {

  window.dispatchEvent(
    new CustomEvent('open-lead-popup')
  );
};
</script>