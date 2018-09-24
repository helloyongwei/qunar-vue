<template>
<ul class="list">
  <li
    class="item"
    v-for="item in letters"
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >{{item}}</li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: {
      type: Object
    }
  },
  data () {
    return {
      touchStates: false,
      startY: 0,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (event) {
      this.$emit('change', event.target.innerText)
    },
    handleTouchStart () {
      this.touchStates = true
    },
    handleTouchMove (event) {
      if (this.touchStates) {
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.timer = setInterval(() => {
          const touchY = event.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStates = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: .4rem
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
