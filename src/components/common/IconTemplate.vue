<template>
  <svg
    class="app-icon"
    :class="[iconClass, newClass]"
    :width="width"
    :height="height"
    aria-hidden="true"
  >
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="href" />
  </svg>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'

export default {
  name: 'Icon',

  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
    },
    height: {
      type: [Number, String],
    },
    newClass: {
      type: String,
    },
  },
  setup(_, { attrs }) {
    const data = reactive({
      href: computed(() => `#${attrs.name}`),
      iconClass: computed(() => `app-icon--${attrs.name}`),
    })

    return {
      ...toRefs(data),
    }
  },
}
</script>

<style lang="scss" scoped>
.app-icon {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
</style>
