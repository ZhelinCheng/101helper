<template>
    <div class="tasks">
        <el-card shadow="never" class="tasks-info">
            <div slot="header" class="hd">
                <span class="stop">任务执行中 / 当前账号：235458645（登录中）</span>
                <div class="hd-btn">
                    <el-button type="success" size="mini">启动</el-button>
                    <el-button type="primary" size="mini">导入QQ号</el-button>
                    <el-button @click="dialogFormVisible = true" type="primary" size="mini">修改</el-button>
                </div>
            </div>
            <div class="tasks-content">
                <span>PICK成员：张远、周震南</span>
                <span>验证码平台：易码</span>
                <span>账号数量：103/1000</span>
                <span>定时执行：00:00:01</span>
            </div>
        </el-card>

        <el-table
            class="tasks-table"
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

        <el-dialog width="400px" :center="true" title="修改任务配置" :visible.sync="dialogFormVisible">
            <el-form ref="form" size="small" :model="form" label-width="100px">
                <el-form-item label="PICK成员">
                    <el-select style="width: 240px"
                               v-model="value5"
                               multiple
                               filterable
                               placeholder="请选择PICK的成员">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="验证码平台">
                    <el-select style="width: 240px" v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="验证码Token">
                    <el-input style="width: 240px" v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="定时执行">
                    <el-time-picker style="width: 240px" placeholder="选择时间" v-model="form.date2" ></el-time-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
                <el-button size="small" type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import './index.less'

  export default {
    name: 'index',
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
        }],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        formLabelWidth: '120px',
        dialogFormVisible: false,
        form: {
          token: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    }
  }
</script>
