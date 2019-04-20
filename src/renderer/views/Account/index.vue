<template>
    <div class="account">
        <div class="account-update">
            <label>
                <i class="el-icon-upload"></i>
                <p>将文件拖到此处，或<span>点击上传</span>。格式：账号----密码</p>
                <input type="file">
            </label>
        </div>
        <el-table
            class="account-table"
            :data="tableData"
            size="mini"
            stripe
            height="310px"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="30">
            </el-table-column>
            <el-table-column
                prop="date"
                label="导入时间"
                width="100">
            </el-table-column>
            <el-table-column
                prop="account"
                label="账号"
                width="130">
            </el-table-column>
            <el-table-column
                prop="password"
                label="密码"
                width="180">
            </el-table-column>
            <el-table-column
                prop="status"
                width="90"
                label="状态">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button
                        @click="handleEdit(scope.$index, scope.row)"
                        type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="account-panel">
            <el-button size="mini">删除所选</el-button>
            <el-button size="mini">删除全部</el-button>
        </div>
        <div class="account-pager">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        <el-dialog width="330px" :center="true" title="修改账号" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="账号">
                    <el-input style="width: 240px" v-model="form.account" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input style="width: 240px" v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button
                    @click="dialogFormVisible = false"
                    size="small">
                    取 消
                </el-button>
                <el-button
                    size="small"
                    type="primary">
                    确 定
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'account',
    data () {
      return {
        dialogFormVisible: false,
        form: {
          account: '',
          password: ''
        },
        tableData: [{
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }, {
          date: '2016-05-02',
          account: '345435345',
          password: 'mE@hs*3uL2!Xgb_x',
          status: '已登录'
        }]
      }
    },
    methods: {
      handleEdit (idx, row) {
        console.log(idx, row)
        this.form.account = row.account
        this.form.password = row.password
        this.dialogFormVisible = true
      }
    }
  }
</script>

<style scoped>

</style>
