<template>
  <button class="close" :aria-label="arialabel" @click="onClick">Hello</button>
</template>

<script lang="ts">
const props = defineProps<{
  ariaLabel: string;
  content: string;
  textVariant: string;
}>();
const emit = defineEmits<{
  (e: 'click', event: 'MouseEvent'): void;
}>()
  const onClick = (e:MouseEvent) => {
  if(props.disabled) {
    stopEvent(event)
  }
  emit('click', e)
  }
</script>

<style scoped></style>
