import { ref } from 'vue'

const nameSpace = ref('ti')

export function useNamespace (scope: string) {
  return {
    mobilePrefixCls: `${nameSpace.value}-${scope}`,
    pcPrefixCls: `${nameSpace.value}-pc-${scope}`,
    prefixCls: [`${nameSpace.value}-${scope}`, `${nameSpace.value}-pc-${scope}`]
  }
}
