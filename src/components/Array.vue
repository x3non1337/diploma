<template>
  <div class="exersize">
    <div>
      <img class="exersize__image" :src="quest[1].src" alt=""/>
      <img class="exersize__image" :src="questTwo[1].src" alt="">
    </div>
    <div>
      <img class="exersize__image" :src="answer[1].src" alt="">
      <img class="exersize__image" :src="answer[2].src" alt="">
      <img class="exersize__image" :src="answer[3].src" alt="">
      <img class="exersize__image" :src="answer[4].src" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Array',
  data () {
    return {
      quest: [
        { id: 1, src: 'images/taskOne/1.png' },
        { id: 2, src: 'images/taskOne/2.png' },
        { id: 3, src: 'images/taskOne/3.png' },
        { id: 4, src: 'images/taskOne/4.png' },
        { id: 5, src: 'images/taskOne/5.png' },
        { id: 6, src: 'images/taskOne/6.png' },
        { id: 7, src: 'images/taskOne/7.png' },
        { id: 8, src: 'images/taskOne/8.png' },
        { id: 9, src: 'images/taskOne/9.png' },
        { id: 10, src: 'images/taskOne/10.png' },
        { id: 11, src: 'images/taskOne/11.png' },
        { id: 12, src: 'images/taskOne/12.png' },
        { id: 13, src: 'images/taskOne/13.png' },
        { id: 14, src: 'images/taskOne/14.png' },
        { id: 15, src: 'images/taskOne/15.png' },
        { id: 16, src: 'images/taskOne/16.png' },
        { id: 17, src: 'images/taskOne/17.png' },
        { id: 18, src: 'images/taskOne/18.png' },
        { id: 19, src: 'images/taskOne/19.png' },
        { id: 20, src: 'images/taskOne/20.png' },
        { id: 21, src: 'images/taskOne/21.png' },
        { id: 22, src: 'images/taskOne/22.png' },
        { id: 23, src: 'images/taskOne/23.png' },
        { id: 24, src: 'images/taskOne/24.png' },
        { id: 25, src: 'images/taskOne/25.png' },
        { id: 26, src: 'images/taskOne/26.png' },
        { id: 27, src: 'images/taskOne/27.png' },
        { id: 28, src: 'images/taskOne/28.png' },
        { id: 29, src: 'images/taskOne/29.png' },
        { id: 30, src: 'images/taskOne/30.png' }
      ],
      questTwo: [
        { id: 1, src: 'images/taskTwo/1.png' },
        { id: 2, src: 'images/taskTwo/2.png' },
        { id: 3, src: 'images/taskTwo/3.png' },
        { id: 4, src: 'images/taskTwo/4.png' },
        { id: 5, src: 'images/taskTwo/5.png' },
        { id: 6, src: 'images/taskTwo/6.png' },
        { id: 7, src: 'images/taskTwo/7.png' },
        { id: 8, src: 'images/taskTwo/8.png' },
        { id: 9, src: 'images/taskTwo/9.png' },
        { id: 10, src: 'images/taskTwo/10.png' },
        { id: 11, src: 'images/taskTwo/11.png' },
        { id: 12, src: 'images/taskTwo/12.png' },
        { id: 13, src: 'images/taskTwo/13.png' },
        { id: 14, src: 'images/taskTwo/14.png' },
        { id: 15, src: 'images/taskTwo/15.png' },
        { id: 16, src: 'images/taskTwo/16.png' },
        { id: 17, src: 'images/taskTwo/17.png' },
        { id: 18, src: 'images/taskTwo/18.png' },
        { id: 19, src: 'images/taskTwo/19.png' },
        { id: 20, src: 'images/taskTwo/20.png' },
        { id: 21, src: 'images/taskTwo/21.png' },
        { id: 22, src: 'images/taskTwo/22.png' },
        { id: 23, src: 'images/taskTwo/23.png' },
        { id: 24, src: 'images/taskTwo/24.png' },
        { id: 25, src: 'images/taskTwo/25.png' },
        { id: 26, src: 'images/taskTwo/26.png' },
        { id: 27, src: 'images/taskTwo/27.png' },
        { id: 28, src: 'images/taskTwo/28.png' },
        { id: 29, src: 'images/taskTwo/29.png' },
        { id: 30, src: 'images/taskTwo/30.png' }
      ],
      answer: [
        { id: 1, src: 'images/answerOptions/1.png' },
        { id: 2, src: 'images/answerOptions/2.png' },
        { id: 3, src: 'images/answerOptions/3.png' },
        { id: 4, src: 'images/answerOptions/4.png' },
        { id: 5, src: 'images/answerOptions/5.png' },
        { id: 6, src: 'images/answerOptions/6.png' },
        { id: 7, src: 'images/answerOptions/7.png' },
        { id: 8, src: 'images/answerOptions/8.png' },
        { id: 9, src: 'images/answerOptions/9.png' },
        { id: 10, src: 'images/answerOptions/10.png' },
        { id: 11, src: 'images/answerOptions/11.png' },
        { id: 12, src: 'images/answerOptions/12.png' },
        { id: 13, src: 'images/answerOptions/13.png' },
        { id: 14, src: 'images/answerOptions/14.png' },
        { id: 15, src: 'images/answerOptions/15.png' },
        { id: 16, src: 'images/answerOptions/16.png' },
        { id: 17, src: 'images/answerOptions/17.png' },
        { id: 18, src: 'images/answerOptions/18.png' },
        { id: 19, src: 'images/answerOptions/19.png' },
        { id: 20, src: 'images/answerOptions/20.png' },
        { id: 21, src: 'images/answerOptions/21.png' },
        { id: 22, src: 'images/answerOptions/22.png' },
        { id: 23, src: 'images/answerOptions/23.png' },
        { id: 24, src: 'images/answerOptions/24.png' },
        { id: 25, src: 'images/answerOptions/25.png' },
        { id: 26, src: 'images/answerOptions/26.png' },
        { id: 27, src: 'images/answerOptions/27.png' },
        { id: 28, src: 'images/answerOptions/28.png' },
        { id: 29, src: 'images/answerOptions/29.png' },
        { id: 30, src: 'images/answerOptions/30.png' }
      ],
      answerOptions: [
        { id: 1, answer: null, isTrue: false },
        { id: 2, answer: null, isTrue: false },
        { id: 3, answer: null, isTrue: false },
        { id: 4, answer: null, isTrue: false },
      ]
    }

  },
  methods: {
    randTask () {
      this.rand = Math.floor(Math.random() * questTwo)
      this.RightAnswer = Math.floor(Math.random() * answerOptions)
      // answerOptionsthis.answer = (this.answer =
    }

  }

}
</script>

<style scoped lang="scss">
.exersize {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &__image {
    margin: 10px;
    width: 200px;
    height: 200px;
  }
}
</style>
