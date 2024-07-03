<template>
  <div class="breadcrumb">
    <ul class="flex flex-row gap-1">
      <li class="flex items-center" v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)" :class="{'linked': !!breadcrumb.link}"> 
        <span class="text-text-main last:text-text-dim select-none text-sm">{{ breadcrumb.name }}</span> 
        <span class="pl-1 select-none text-text-dim" v-if="idx !== breadcrumbList.length - 1">></span>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data() {
    return {
      breadcrumbList: []
    }
  },
  mounted() {
    this.updateList()
  },
  watch: {
    '$route': function() {
      this.updateList()
    }
  },
  methods: {
    routeTo(pRouteTo) {
      if (this.breadcrumbList[pRouteTo] && this.breadcrumbList[pRouteTo].link) {
        this.$router.push(this.breadcrumbList[pRouteTo].link)
      }
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb || []
    }
  }
}
</script>

<style scoped>
.linked {
  cursor: pointer;
}
.text-text-main:not(:last-child):hover {
    text-decoration: underline;
    text-underline-offset: 4px;
}
</style>
