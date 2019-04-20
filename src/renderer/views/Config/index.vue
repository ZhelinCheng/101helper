<template>
    <div class="config">
        <el-form class="config-form" ref="form" :model="form" size="small" label-width="90px">
            <el-form-item label="程序通知">
                <el-switch v-model="form.notice"></el-switch>
            </el-form-item>
            <el-form-item label="显示浏览器">
                <el-switch v-model="form.browser"></el-switch>
            </el-form-item>
            <el-form-item label="IP代理">
                <el-select clearable v-model="form.proxy" placeholder="请选择IP代理服务商">
                    <el-option label="无忧代理" value="www.data5u.com"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-if="form.proxy" label="代理Key">
                <el-input v-model="form.proxyKey"></el-input>
            </el-form-item>
            <el-form-item label="浏览器地址">
                <el-input v-model="form.browserPath"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'config',
    data () {
      return {
        form: {
          browser: false,
          browserPath: '',
          notice: false,
          proxy: '',
          proxyKey: ''
        }
      }
    },
    methods: {
      onSubmit () {
        console.log('submit!')
      }
    }
  }
</script>
