import { defineComponent, ExtractPropTypes, PropType } from 'vue'

type IButtonType = PropType<
  'default' | 'primary' | 'info' | 'success' | 'warning' | 'error'
>

const buttonProps = {
  type: {
    type: String as IButtonType,
    default: 'default'
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>

const Button = defineComponent({
  name: 'KButton',
  props: buttonProps,
  setup() {},
  render() {
    const { $slots } = this
    return (
      <>
        <button>{$slots.default?.()}</button>
      </>
    )
  }
})

export default Button
