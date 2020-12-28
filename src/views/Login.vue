<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">Email address</label>
      <validate-input :rules="emailRules" v-model="emailVal" type="text" placeholder="请输入邮箱"/>
      <span>{{emailVal}}</span>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <validate-input :rules="passwordRules" type="password" placeholder="请输入密码"/>
    </div>
    <!-- <template v-slot:submit> -->
    <!-- v-slot:submit == #submit 缩写 -->
    <template #submit>
      <span class="btn btn-danger">登录</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RuleProps } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'home',
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const emailRules: RuleProps = [
      { type: 'required', message: '邮箱不能为空!!' },
      { type: 'email', message: '邮箱格式不正确!!'}
    ]
    const passwordRules: RuleProps = [
      { type: 'required', message: '密码不能为空!!'}
    ]
    const emailVal = ref('')
    const store = useStore()
    const router = useRouter()
    const onFormSubmit = (result: boolean) => {
      console.log(result)
      if (result) {
        store.commit('login')
        router.push('/')
      }
    }
    return {
      emailRules,
      passwordRules,
      emailVal,
      onFormSubmit,
    }
  }
})
</script>