<template>
  <div class="first-exercise">
    <section>
      <h2 v-if="!changeVisibleQuestOrAnswer" class="first-exercise__right-answer">
        Правильно!
      </h2>
      <transition name="mode-fade" mode="out-in">
        <div v-if="changeVisibleQuestOrAnswer" class="first-exercise__quest">
          <div class="first-exercise__quest-item">
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
      <h2>Выберите ответ</h2>
      <div class="first-exercise__answer">
        <div class="first-exercise__answer-item" @click="handleClickWrongAnswer">
          <el-image
            :src="pathToAnswerOneImage"
          />
        </div>
        <div class="first-exercise__answer-item" @click="handleClickWrongAnswer">
          <el-image
            :src="pathToAnswerTwoImage"
          />
        </div>
        <div class="first-exercise__answer-item" @click="handleClickWrongAnswer">
          <el-image
            :src="pathToAnswerThreeImage"
          />
        </div>
        <div class="first-exercise__answer-item" @click="handleClickRightAnswer">
          <el-image
            :src="pathToAnswerFourImage"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import QuestOne from '../assets/QuestOne.png'
import QuestTwo from '../assets/QuestTwo.png'
import AnswerOne from '../assets/AnswerOne.png'
import AnswerTwo from '../assets/AnswerTwo.png'
import AnswerThree from '../assets/AnswerThree.png'
import AnswerFour from '../assets/AnswerFour.png'

export default {
  name: 'FirstExercisePage',
  data() {
    return {
      changeVisibleQuestOrAnswer: true,

      pathToQuestOneImage: QuestOne,
      pathToQuestTwoImage: QuestTwo,
      pathToAnswerOneImage: AnswerOne,
      pathToAnswerTwoImage: AnswerTwo,
      pathToAnswerThreeImage: AnswerThree,
      pathToAnswerFourImage: AnswerFour,
    }
  },
  methods: {
    handleClickWrongAnswer() {
      alert('Неправильный ответ')
    },
    handleClickRightAnswer() {
      this.changeVisibleQuestOrAnswer = !this.changeVisibleQuestOrAnswer
    },
  }
}
</script>

<style scoped lang="scss">
.mode-fade-enter-active, .mode-fade-leave-active {
  transition: opacity 1.5s ease;
}

.mode-fade-enter-from, .mode-fade-leave-to {
  opacity: 0;
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
    width: 500px;
    height: 500px;

    &-item {
      margin: 4px;
      border: 1px solid #000;
      border-radius: 15px;
      padding: 16px;
      width: 40%;
      height: 40%;
      background: #808080ff;
    }

    &:hover {
      cursor: pointer;
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
</style>
