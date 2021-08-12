<script lang="tsx">
import { defineComponent } from 'vue'
import Button from '../components/button'
export default defineComponent({
  name: 'Home',
  components: {
    Button
  },
  render: () => (
    <>
      <Button>提交</Button>
    </>
  )
})
</script>
