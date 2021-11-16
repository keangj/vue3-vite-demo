export const getSrc = (name: string) => {
  const path = `../assets/img/${name}`
  const modules = import.meta.globEager('../assets/img/**/*')
  return modules[path].default
}
