<template>
    <div class="account">
        <div class="account-update">
            <label ref="drag">
                <i class="el-icon-upload"></i>
                <p>将文件拖到此处，或<span>点击上传</span>。格式：账号----密码</p>
                <input @change="readFile($event)" accept="text/plain" type="file">
            </label>
        </div>
        <el-table
            class="account-table"
            :data="tableData"
            size="mini"
            stripe
            row-key="id"
            height="360px"
            @select-all="multipleSelection = 'all'"
            @selection-change="handleSelectionChange"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="30">
            </el-table-column>
            <el-table-column
                prop="create_at"
                label="导入时间"
                width="130">
            </el-table-column>
            <el-table-column
                prop="account"
                label="账号"
                width="110">
            </el-table-column>
            <el-table-column
                prop="password"
                label="密码"
                width="160">
            </el-table-column>
            <el-table-column
                prop="status"
                width="100"
                label="状态">
                <template slot-scope="scope">
                    <span>{{scope.row.cookie ? '已登录' : '未登录'}}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button
                        @click="handleEdit(scope.$index, scope.row)"
                        type="text" size="small">编辑
                    </el-button>
                    <el-button @click.native.prevent="deleteRow(scope.$index, scope.row, tableData)" type="text"
                               size="small">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="account-panel">
            <el-button @click="deleteSelectRows" size="mini">删除所选</el-button>
            <el-button @click="deleteAllRows" size="mini">删除全部</el-button>
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
                    @click="handleEditConfirm"
                    size="small"
                    type="primary">
                    确 定
                </el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import { formatTimeStamp } from '@/utils'
  import './index.less'

  export default {
    name: 'account',
    data () {
      return {
        dialogFormVisible: false,
        form: {
          id: '',
          account: '',
          password: ''
        },
        multipleSelection: [],
        tableData: []
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      deleteAllRows () {
        this.handleConfirm(() => {
          this.$db
            .set('account', [])
            .write()
          this.synchronizeData()
        })
      },
      deleteSelectRows () {
        if (this.multipleSelection === 'all') {
          return this.deleteAllRows()
        }
        this.handleConfirm(() => {
          this.multipleSelection.forEach(item => {
            this.$db.get('account')
              .remove({id: item.id})
              .write()
          })
          this.synchronizeData()
        })
      },
      deleteRow (idx, row, rows) {
        this.handleConfirm(() => {
          rows.splice(idx, 1)
          this.$db.get('account')
            .remove({id: row.id})
            .write()
        })
      },
      handleConfirm (text = '', cb = null) {
        if (typeof text === 'function') {
          cb = text
          text = ''
        }
        this.$confirm(text || '此操作将永久删除, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          typeof cb === 'function' && cb()
          this.$message.success('操作成功！')
        }).catch(() => {})
      },

      /**
       * 整理账号
       * @param text
       */
      handleAccount (text) {
        try {
          let date = Math.floor(new Date().getTime() / 1000)
          let arr = text.split(/\r\n|\n|\r/)
          for (let item of arr) {
            if (item) {
              let ac = item.split('----')
              this.$db
                .get('account')
                .insert({
                  create_at: formatTimeStamp(date, 'yyyy-MM-dd hh:mm'),
                  account: ac[0],
                  password: ac[1],
                  cookie: ''
                })
                .write()
            }
          }
          this.synchronizeData()
          this.$message.success('读取账号文件成功！')
        } catch (e) {
          this.$message.error(`错误：${e}`)
        }
      },

      /**
       * 读取文件内容
       * @param e
       * @returns {*}
       */
      readFile (e) {
        let file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]

        if (file.type !== 'text/plain') {
          return this.$message.error('不支持的文件类型！')
        }

        let reader = new FileReader()
        reader.readAsText(file)
        reader.onload = (arg) => {
          this.handleAccount(arg.target.result)
        }
      },

      /**
       * 拖动变化
       */
      dropChange () {
        let dom = this.$refs.drag
        dom.ondragenter = (e) => {
          e.stopPropagation()
          e.preventDefault()
        }
        dom.ondragover = (e) => {
          e.stopPropagation()
          e.preventDefault()
        }
        dom.ondrop = (e) => {
          e.stopPropagation()
          e.preventDefault()
          this.readFile(e)
        }
      },

      /**
       * 编辑
       * @param idx
       * @param row
       */
      handleEdit (idx, row) {
        this.form.account = row.account
        this.form.password = row.password
        this.form.id = row.id
        this.dialogFormVisible = true
      },
      handleEditConfirm () {
        this.handleConfirm('确认修改该条账号？', () => {
          this.$db.get('account')
            .find({id: this.form.id})
            .assign({
              account: this.form.account,
              password: this.form.password
            })
            .write()
          this.dialogFormVisible = false
          this.synchronizeData()
        })
      },
      synchronizeData () {
        this.tableData = [].concat(this.$db.get('account').value())
      }
    },
    created () {
      this.synchronizeData()
    },
    mounted () {
      this.dropChange()
    }
  }
</script>

<style scoped>

</style>
