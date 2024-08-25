<template>
  <div class="container">
  <el-dialog
    v-model="showError"
    title="Error"
    width="500"
  >
  <span>I'm sorry, there was an error. Please try again later!</span>
  </el-dialog>

  <el-dialog
    v-model="showUnlucky"
    title="Unlucky"
    width="500"
  >
  <span>I'm sorry, {{ name }} is not in today's list of lucky names.</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="showUnlucky = false">OK</el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="showLucky"
    title="Lucky"
    width="500"
  >
  <span>Congratulations, {{ name }} is a lucky name! You've won a prize. Will you accept it?</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="reject">
          Reject
        </el-button>
        <el-button type="primary" @click="accept">
          Accept
        </el-button>
      </div>
    </template>
  </el-dialog>
  </div>
</template>

<script>
import { ElButton, ElDialog } from 'element-plus'
import { getAll } from '@/api/peopleApi'
export default {
  name: 'NameSearchResponse',
  props: {
    name: {type: String, default: ''}
  },
  emits: ['accept', 'reject'],
  data() {
    return {
      showLucky: false,
      showUnlucky: false,
      showError: false
    }
  },
  watch: {
    name: function(newVal, oldVal) {
      const people = getAll(true)
      people.then((result) => {
        const winner = result.find((el) => {return el.name == newVal})
        if(winner) {
          this.showLucky = true
        }else {
          this.showUnlucky = true
        }
      }).catch((error) => {
        this.showError = true
      })
    }
  },
  methods: {
    reject() {
      this.showLucky = false
      this.$emit('reject')
    },
    accept() {
      this.showLucky = false
      this.$emit('accept')
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>
