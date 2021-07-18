<template>
  <div class="sb--link">
    <button class="sb--toggle-btn">
      <b-icon :icon="iconSwitcher"></b-icon>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBarToggleButton',
  props: {
    iconSwitcher: {
      type: String
    }
  }
})
</script>
