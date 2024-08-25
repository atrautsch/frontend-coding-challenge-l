<template>
  <div class="container">
  <el-dialog
    v-model="showError"
    title="Error"
    width="500"
  >
    <span>{{ errorMessage }}</span>
  </el-dialog>
    <el-form label-width="auto" @submit.prevent="checkName">
      <el-form-item label="Your name">
        <el-input v-model="name">
          <template #append>
            <el-button @click="checkName">Check</el-button>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
  <name-search-response :name="requestName" @accept="accept" @reject="reject" />
</template>

<script>
import NameSearchResponse from '@/components/NameSearchResponse.vue'
import { ElButton, ElForm, ElDialog } from 'element-plus'

export default {
  name: 'NameSearcher',
  components: {
    NameSearchResponse, ElButton, ElForm
  },
  data() {
    return {
      name: '',
      requestName: '',
      showError: false,
      errorMessage: 'There was an error',
    }
  },
  methods: {
    // clear input field on reject and add to lucky names of the day
    accept() {
      if(this.$store.state.winners.includes(this.requestName)) {
        this.errorMessage = 'I am sorry you have already won today.'
        this.showError = true
        this.name = ""
        return
      }
      this.$store.commit('addWinner', this.requestName)
      this.name = ""
    },
    reject() {
    },
    // this feels a bit weird, I do it this way because there is the name-search-response
    checkName() {
      if(this.name.length < 2) {
        this.errorMessage = 'Please enter a name of at least 2 characters.'
        this.showError = true
        return
      }
      if(!/^[a-zA-Z]+$/.test(this.name)) {
        this.errorMessage = 'Please enter only characters as a name.'
        this.showError = true
        return
      }

      if(this.requestName == this.name) {
        alert('you already tried that name!')
      }
      this.requestName = this.name
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 50%;
}
</style>
