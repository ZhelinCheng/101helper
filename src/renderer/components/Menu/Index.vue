<template>
    <div class="menu">
        <el-menu
            background-color="#304156"
            text-color="#BFCBD9"
            active-text-color="#409EFF"
            default-active="1"
            :router="true"
            class="el-menu-vertical-demo">
            <el-menu-item
                route="/"
                index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">Home</span>
            </el-menu-item>
            <el-menu-item
                route="/tasks"
                index="2">
                <i class="el-icon-tickets"></i>
                <span slot="title">任务</span>
            </el-menu-item>
            <el-menu-item
                index="3"
                route="/config"
            >
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
  import './Index.less'

  export default {
    name: 'Index'
  }
</script>
