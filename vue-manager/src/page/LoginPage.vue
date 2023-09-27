<template>
  <div class="login_page">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input type="password" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
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
      msg: "欢迎"

    }
  },
  methods: {
    submitForm(formName) {
      console.debug(formName)

    }
  }
};
</script>

<style scope>
.login_page {
  background-color: #324057;
  height: 100%;
  width: 100%;
   
}
</style>