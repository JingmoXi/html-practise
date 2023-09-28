<template>
  <div class="login_page fill_contain">
    <section class="sex">
    <div class="manage_tip">
      <h3>管理后台</h3>
    </div>

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label-width="20px"  prop="username" >
        <el-input class="input-text usename" type="text" v-model="ruleForm.username" placeholder="用户名"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="20px" prop="pass">
        <el-input class="input-text" type="password" v-model="ruleForm.pass" placeholder="密码"
          autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label-width="20px">
        <el-button class="denglu" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
    </section>

  </div>
</template>

<script>
import { login } from '@/api/getData.js'
export default {
  name: 'LoginPage',
  data() {
    return {
      ruleForm: {
        username: "",
        pass: "",
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      },


    }
  },
  methods: {
    async submitForm(formName) {
      console.debug(formName)
      const res = await login(this.$data.ruleForm)
      if (res.status == 1) {

        this.$router.push('manage')
      } else {
        this.$router.push('manage')
      }

    }
  }
};
</script>

<style scope lang="less">
@import '../style/min.less';

.login_page {
  background-color: #324057;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;

  /* 垂直居中 */
  h3 {
    color: white;
    //在某些场景下,什么
    // display: block;

  }

  .demo-ruleForm {
    // display: inline-block;
    width: 360px;
    height: 230px;
    background-color: white;

    margin: 10px auto;
    // padding-top: 30px;
    // padding-right: 30px;
    .usename {
      margin-top: 30px;
    }

    .input-text {
      width: 300px;
      // margin-left: 30px;
      margin-bottom: 5px;
    }

    .denglu {
      width: 300px;
      // margin-left: 30px;
    }
  }
}

.manage_tip {
  width: 360px;
  // margin: auto ;
  // padding-top: 150px;
}

</style>