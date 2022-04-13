import { ExtractPropTypes, FunctionalComponent } from 'vue'

const iconProps = {
  name: String,
  color: String
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>

export const Icon: FunctionalComponent<IconProps> = (props, context) => {
  const { name, color } = props

  return (
    <svg class="icon" aria-hidden="true">
      <use xlinkHref={`#icon-${name}`} fill={color} />
    </svg>
  )
}

export default Icon
