<template>
  <div v-if="allAnswers < 10" class="first-exercise">
    <section>
      <div class="timer">
        Время:  {{ minutes }}:{{ seconds }}
      </div>
      <h2 v-if="!changeVisibleQuestOrAnswer" class="first-exercise__right-answer">
        Правильно!
      </h2>

      <transition name="mode-fade" mode="out-in">
        <div v-if="changeVisibleQuestOrAnswer" class="first-exercise__quest">
          <div class="first-exercise__quest-item" >
            <el-image
              :src="pathToQuestOneImage"
            />
          </div>
          <div class="first-exercise__quest-item">
            <el-image
              :src="pathToQuestTwoImage"
            />
          </div>
        </div>
        <div v-else class="first-exercise__quest-item">
          <el-image
            :src="pathToAnswerFourImage"
          />
        </div>
      </transition>
    </section>
    <section>

      <h2>
        <el-button type="success" @click="handleExit">
          Выход
        </el-button>
        Выберите ответ
        <el-button type="success" >
          Подсказка
        </el-button>
      </h2>
      <div class="first-exercise__answer">
        <div
          v-for="(item, index) in answersOptions"
          :key="index"
          class="first-exercise__answer-item"
          @click="handleClickChangeAnswer(item.id)"
        >
          <el-image :src="item.src" />
        </div>
      </div>
    </section>
  </div>
  <div class="finally" v-else>
    <div class="finally__result">Правильных ответов: {{ `${rightAnswers}/10` }}</div>
    <div class="finally__result">Потрачено {{ summaryTime.toFixed(2) }} секунд.</div>
    <div class="finally__result">Оценка: {{ calculateGrade() }}</div>
    <div class="finally__result">Эффективность: {{ efficiency()  }}</div>
    <div>
      <el-button @click="handleExit">
        Вернуться в главное меню
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstExercisePage',
  data() {
    return {
       // время начала отсчета
      minutes: 0, // счетчик минут
      seconds: 0, // счетчик секунд
      changeVisibleQuestOrAnswer: true,

      pathToQuestOneImage: '',
      pathToQuestTwoImage: '',
      pathToAnswerOneImage: '',
      pathToAnswerTwoImage: '',
      pathToAnswerThreeImage: '',
      pathToAnswerFourImage: '',
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
      answersOptions: [],
      randArray: [],
      percentage: 0,
      rightAnswers: 0,
      allAnswers: 0,
      startTime: undefined,
      finishTime: undefined,
      summaryTime: undefined,
    }
  },
  mounted() {
    this.handleCLickGetPictures()
    this.startTime = new Date() // устанавливаем время начала отсчета
    // запускаем интервал, который каждую секунду обновляет счетчики минут и секунд
    setInterval(() => {
      const currentTime = new Date() // получаем текущее время
      const diff = Math.floor((currentTime - this.startTime) / 1000) // вычисляем разницу в секундах
      this.minutes = Math.floor(diff / 60) // вычисляем количество минут
      this.seconds = diff % 60 // вычисляем количество секунд
    }, 1000)
  },
  methods: {
    calculateGrade(){
      if (this.rightAnswers >= 8 && this.rightAnswers <= 10){
        return 5
      } else if (this.rightAnswers >= 6 && this.rightAnswers <= 8) {
        return 4
      } else if (this.rightAnswers >= 5 && this.rightAnswers <= 6) {
        return 3
      } else {
        return 2
      }
    },

    efficiency(){
      const percentage = (this.rightAnswers / this.summaryTime) * 100
      if (percentage >= 50 && percentage <= 74) {
        return percentage.toFixed(2)
      } else if (percentage >= 75 && percentage <= 89) {
        return percentage.toFixed(2)
      } else if (percentage >= 90 && percentage <= 100) {
        return percentage.toFixed(2)
      } else {
        return percentage.toFixed(2)
      }
    },

    handleCLear() {
      this.answersOptions = []
      this.randArray = []
    },
    handleClickChangeAnswer(id) {
      if (this.allAnswers === 0) {
        this.startTime = new Date()
      }
      if (this.allAnswers === 9) {
        this.finishTime = new Date()
        this.summaryTime = (+this.finishTime - +this.startTime) / 1000
      }
      if (id === this.randArray[0] + 1) {
        this.rightAnswers++
      }
      this.allAnswers++
      this.handleCLear()
      this.handleCLickGetPictures()
    },
    handleCLickGetPictures() {
      let rand = Math.floor(Math.random() * this.quest.length)
      this.randArray.push(rand)
      this.pathToQuestOneImage = this.quest[rand].src
      this.pathToQuestTwoImage = this.questTwo[rand].src

      let randomItem = Math.floor(Math.random() * 4)
      for (let i = 0; i < 4; i++) {
        if (i === randomItem) {
          this.answersOptions.push(this.answer[this.randArray[0]])
        } else {
          let randomAnswer = Math.floor(Math.random() * this.quest.length)
          this.answersOptions.push(this.answer[randomAnswer])
          this.randArray.push(randomAnswer)
        }
      }
    },
    handleExit() {
      this.$router.push({ name: 'Menu' })
    },
    

  },
}

</script>
<style scoped lang="scss">

section{
  padding-top: 1px;
}

.mode-fade-enter-active, .mode-fade-leave-active {
  transition: opacity 0.8s ease;
}

.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 3;
}

.timer {
  position: absolute;
  right: 49%;
}

.first-exercise {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__right-answer {
    position: absolute;
    left: 48%;
    top: 1%;
  }

  &__answer {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 600px;
    height: 600px;
    cursor: pointer;

    &-item {
      margin: 4px;
      border: 1px solid #000;
      border-radius: 15px;
      padding: 16px;
      width: 40%;
      height: 40%;
      background: #808080ff;
    }
  }

  &__quest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-item {
      margin: 45px 16px 16px;
      border: 1px solid #000;
      border-radius: 15px;
      padding: 16px;
      width: 225px;
      height: 225px;
      background: #808080ff;
    }
  }
}

.finally {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 220px;
  height: 200px;

  &__result {
    font-size: 40px;
  }
}
</style>
