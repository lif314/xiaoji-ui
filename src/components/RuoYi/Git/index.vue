<template>
  <div>
    <svg-icon icon-class="github" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'XiaoJiGit',
  data() {
    return {
      url: 'https://gitee.com/organizations/xiao-ji-smart-home/projects'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
