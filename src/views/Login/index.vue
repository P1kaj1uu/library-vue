<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 登录表单区域 -->
      <div class="login">
        <h3>欢迎您~</h3>
        <el-form ref="LoginFormRef" :rules="loginFormRules" class="login_form" :model="loginForm" label-width="70px">
          <el-form-item label="账号" prop="username">
            <el-input
            v-model="loginForm.username"
            autocomplete="off"
            prefix-icon="el-icon-user"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model="loginForm.password"
            show-password
            autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item class="login_btn">
            <el-button type="primary" @click="loginFn">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 登录表单校验规则
      loginFormRules: {
        // 用户名校验规则
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 密码校验规则
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 当点击重置按钮时
    resetForm () {
      this.$refs.LoginFormRef.resetFields()
    },
    // 当点击登录按钮时
    loginFn () {
      this.$refs.LoginFormRef.validate(async (valid) => {
        // 如果校验不通过，阻止后续代码继续执行
        if (!valid) return false
        // 发起网络请求
      //   const res = await userLoginAPI({
      //     username: this.loginForm.username,
      //     password: this.loginForm.password
      //   })
      //   // 用户名不存在
      //   if (res.data.meta.status === 400) {
      //     this.$message({
      //       message: '用户不存在',
      //       type: 'error'
      //     })
      //   } else if (res.data.meta.status === 200) {
      //     // 登录成功
      //     // 提示用户登录成功
      //     this.$message({
      //       message: '登录成功',
      //       type: 'success'
      //     })
      //     // 保存token
      //     setToken(res.data.data.token)
      //     // 跳转主页
      //     this.$router.replace('/home')
      //   }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  height: 100%;
}
.login_box {
  height: 100%;
  background: url(../../assets/1.jpg) no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.login {
  width: 450px;
  height: 280px;
  background-color: #88857e;
  border-radius: 5px;
  opacity: .8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login_form {
  padding: 10px 20px;
}
.el-input {
  width: 90%;
}
.login_btn {
  display: flex;
  justify-content: center;
  margin-left: -50px;
}
h3 {
  text-align: center;
}
/deep/ .el-form-item__label {
  color: #0d0a05;
  font-size: 16px;
}
</style>
