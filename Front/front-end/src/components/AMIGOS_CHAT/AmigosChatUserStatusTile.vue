<script setup lang="ts">
const props = defineProps({
   status: String
});

const statusColor = () => {
   switch (props.status) {
      case "Activo":
         return "bg-green-500";
      case "Ocupado":
         return "bg-red-500";
      case "Inactivo":
         return "bg-zinc-500";
      default:
         return "bg-gray-500";
   }
};
</script>

<template>
   <div class="flex gap-2 items-center">
      <div :class="statusColor()" class="h-2.5 w-2.5 rounded-full"></div>
      <span class="text-xs text-zinc-400 hover:text-zinc-200 transition-all duration-200 select-none cursor-pointer">{{
         status }}</span>
   </div>
</template>
