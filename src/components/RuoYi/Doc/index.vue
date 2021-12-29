<template>
  <div>
    <svg-icon icon-class="question" @click="goto"/>
  </div>
</template>

<script>
export default {
  name: 'XiaoJiDoc',
  data() {
    return {
      url: 'https://xiaoji.atlassian.net/'
    }
  },
  methods: {
    goto() {
      window.open(this.url)
    }
  }
}
</script>
