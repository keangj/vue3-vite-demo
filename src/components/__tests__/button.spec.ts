import { mount } from '@vue/test-utils'
import KButton from '../button'
// import Test from '../Test.vue'

describe('button', () => {
  it('should ', function () {
    mount(KButton)
  })
  it('clickable', function () {
    const onClick = jest.fn()
    const instance = mount(KButton, {
      props: {
        disabled: true,
        onClick
      }
    })
    instance.trigger('click')
    expect(onClick).not.toHaveBeenCalled()
  })
})

// describe('test', () => {
//   it('should ', function () {
//     mount(Test)
//   })
//   // it('clickable', function () {
//   //   const onClick = jest.fn()
//   //   const instance = mount(Test, {
//   //     props: {
//   //       disabled: true,
//   //       onClick
//   //     }
//   //   })
//   //   instance.trigger('click')
//   //   expect(onClick).not.toHaveBeenCalled()
//   // })
// })
