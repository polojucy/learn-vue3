<template>
  <div class="validate-input-container pd-3">
    <input type="text" 
          class="form-control" 
          :class="{'is-invalid': inputRef.error}"
          v-model="inputRef.val"
          @blur="validateInput"
          @input="updateValue"
          v-bind="$attrs">
    <span class="invalid-feedback" v-if="inputRef.error">{{inputRef.message}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RuleProps = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RuleProps>,
    modelValue: String
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    const validateInput = () => {
      if (props.rules) {
        const validateResult = props.rules.every(rule => {
          let passed = true;
          inputRef.message = rule.message
          switch(rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '')
              break;
            case 'email':
              passed = emailRegex.test(inputRef.val)
              break;
            default:
              break;
          }
          return passed
        })
        inputRef.error = !validateResult
      }
    }
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value || ''
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    return {
      inputRef,
      validateInput,
      updateValue,
    }
  }
})
</script>