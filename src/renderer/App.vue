<template>
    <div id="app">
        <Menu/>
        <div class="container">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
  import './style/app.less'
  import Menu from '@/components/Menu/Index.vue'

  export default {
    name: 'App',
    components: {
      Menu
    }
  }
</script>
