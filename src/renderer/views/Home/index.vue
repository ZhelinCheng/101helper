<template>
    <div class="home">
        <el-row :gutter="12" class="home-info">
            <el-col :span="6">
                <el-card shadow="hover">
                    <strong>今日成功：</strong><span>730</span>
                </el-card>
            </el-col>
            <el-col :span="6" class="err">
                <el-card shadow="hover">
                    <strong>今日失败：</strong><span class="red">730</span>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover">
                    <strong>昨日成功：</strong><span>730</span>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card shadow="hover" class="err">
                    <strong>昨日失败：</strong><span>730</span>
                </el-card>
            </el-col>
        </el-row>
        <el-table
            class="home-table"
            :data="tableData"
            size="small"
            stripe
            style="width: 100%">
            <el-table-column
                prop="date"
                label="时间"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="成员"
                width="150">
            </el-table-column>
            <el-table-column
                prop="name"
                label="状态"
                width="150">
            </el-table-column>
            <el-table-column
                prop="address"
                label="备注">
            </el-table-column>
        </el-table>
        <div class="home-pager">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'Home',
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>

<style scoped>

</style>
