<template>
  <div>
    <div v-for="(item, index) in answerOptions">
      <img :src="item.src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Array',
  data: function () {
    return {
      quest: [
        {id: 1, src: '../taskOne/1.jpg'},
        {id: 2, src: '../taskOne/2.jpg'},
        {id: 3, src: '../taskOne/3.jpg'},
        {id: 4, src: '../taskOne/4.jpg'},
        {id: 5, src: '../taskOne/5.jpg'},
        {id: 6, src: '../taskOne/6.jpg'},
        {id: 7, src: '../taskOne/7.jpg'},
        {id: 8, src: '../taskOne/8.jpg'},
        {id: 9, src: '../taskOne/9.jpg'},
        {id: 10, src: '../taskOne/10.jpg'},
        {id: 11, src: '../taskOne/11.jpg'},
        {id: 12, src: '../taskOne/12.jpg'},
        {id: 13, src: '../taskOne/13.jpg'},
        {id: 14, src: '../taskOne/14.jpg'},
        {id: 15, src: '../taskOne/15.jpg'},
        {id: 16, src: '../taskOne/16.jpg'},
        {id: 17, src: '../taskOne/17.jpg'},
        {id: 18, src: '../taskOne/18.jpg'},
        {id: 19, src: '../taskOne/19.jpg'},
        {id: 20, src: '../taskOne/20.jpg'},
        {id: 21, src: '../taskOne/21.jpg'},
        {id: 22, src: '../taskOne/22.jpg'},
        {id: 23, src: '../taskOne/23.jpg'},
        {id: 24, src: '../taskOne/24.jpg'},
        {id: 25, src: '../taskOne/25.jpg'},
        {id: 26, src: '../taskOne/26.jpg'},
        {id: 27, src: '../taskOne/27.jpg'},
        {id: 28, src: '../taskOne/28.jpg'},
        {id: 29, src: '../taskOne/29.jpg'},
        {id: 30, src: '../taskOne/30.jpg'}
      ],
      questTwo: [
        {id: 1, src: '../taskTwo/1.jpg'},
        {id: 2, src: '../taskTwo/2.jpg'},
        {id: 3, src: '../taskTwo/3.jpg'},
        {id: 4, src: '../taskTwo/4.jpg'},
        {id: 5, src: '../taskTwo/5.jpg'},
        {id: 6, src: '../taskTwo/6.jpg'},
        {id: 7, src: '../taskTwo/7.jpg'},
        {id: 8, src: '../taskTwo/8.jpg'},
        {id: 9, src: '../taskTwo/9.jpg'},
        {id: 10, src: '../taskTwo/10.jpg'},
        {id: 11, src: '../taskTwo/11.jpg'},
        {id: 12, src: '../taskTwo/12.jpg'},
        {id: 13, src: '../taskTwo/13.jpg'},
        {id: 14, src: '../taskTwo/14.jpg'},
        {id: 15, src: '../taskTwo/15.jpg'},
        {id: 16, src: '../taskTwo/16.jpg'},
        {id: 17, src: '../taskTwo/17.jpg'},
        {id: 18, src: '../taskTwo/18.jpg'},
        {id: 19, src: '../taskTwo/19.jpg'},
        {id: 20, src: '../taskTwo/20.jpg'},
        {id: 21, src: '../taskTwo/21.jpg'},
        {id: 22, src: '../taskTwo/22.jpg'},
        {id: 23, src: '../taskTwo/23.jpg'},
        {id: 24, src: '../taskTwo/24.jpg'},
        {id: 25, src: '../taskTwo/25.jpg'},
        {id: 26, src: '../taskTwo/26.jpg'},
        {id: 27, src: '../taskTwo/27.jpg'},
        {id: 28, src: '../taskTwo/28.jpg'},
        {id: 29, src: '../taskTwo/29.jpg'},
        {id: 30, src: '../taskTwo/30.jpg'}
      ],
      answer: [
        {id: 1, src: '../answerOptions/1.jpg'},
        {id: 2, src: '../answerOptions/2.jpg'},
        {id: 3, src: '../answerOptions/3.jpg'},
        {id: 4, src: '../answerOptions/4.jpg'},
        {id: 5, src: '../answerOptions/5.jpg'},
        {id: 6, src: '../answerOptions/6.jpg'},
        {id: 7, src: '../answerOptions/7.jpg'},
        {id: 8, src: '../answerOptions/8.jpg'},
        {id: 9, src: '../answerOptions/9.jpg'},
        {id: 10, src: '../answerOptions/10.jpg'},
        {id: 11, src: '../answerOptions/11.jpg'},
        {id: 12, src: '../answerOptions/12.jpg'},
        {id: 13, src: '../answerOptions/13.jpg'},
        {id: 14, src: '../answerOptions/14.jpg'},
        {id: 15, src: '../answerOptions/15.jpg'},
        {id: 16, src: '../answerOptions/16.jpg'},
        {id: 17, src: '../answerOptions/17.jpg'},
        {id: 18, src: '../answerOptions/18.jpg'},
        {id: 19, src: '../answerOptions/19.jpg'},
        {id: 20, src: '../answerOptions/20.jpg'},
        {id: 21, src: '../answerOptions/21.jpg'},
        {id: 22, src: '../answerOptions/22.jpg'},
        {id: 23, src: '../answerOptions/23.jpg'},
        {id: 24, src: '../answerOptions/24.jpg'},
        {id: 25, src: '../answerOptions/25.jpg'},
        {id: 26, src: '../answerOptions/26.jpg'},
        {id: 27, src: '../answerOptions/27.jpg'},
        {id: 28, src: '../answerOptions/28.jpg'},
        {id: 29, src: '../answerOptions/29.jpg'},
        {id: 30, src: '../answerOptions/30.jpg'}
      ],
      answerOptions: [
        {id: 1, answer: null, isTrue: false},
        {id: 2, answer: null, isTrue: false},
        {id: 3, answer: null, isTrue: false},
        {id: 4, answer: null, isTrue: false}
      ]
    }

  },
  methods: {

    randTask: function () {
      this.rand = Math.floor(Math.random() * questTwo)
      this.RightAnswer = Math.floor(Math.random() * answerOptions)
      answerOptionsthis.answer = (this.answer =
    }

  }

}
</script>

<style scoped/></style>
