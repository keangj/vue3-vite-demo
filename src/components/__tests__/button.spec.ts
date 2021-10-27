import { mount } from '@vue/test-utils'
import KButton from '../button'

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
