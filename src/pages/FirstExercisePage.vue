<template>
  <div class="first-exercise">
    <section>
      <div v-if="true" class="first-exercise__quest">
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
      <div v-else>
        <el-image
          :src="pathToQuestImage"
          :fit="'fit'"
        />
      </div>
    </section>
    <section>
      <h2>Выберите ответ</h2>
      <div class="first-exercise__answer">
        <div class="first-exercise__answer-item">
          <el-image
            :src="pathToAnswerOneImage"
          />
        </div>
        <div class="first-exercise__answer-item">
          <el-image
            :src="pathToAnswerTwoImage"
          />
        </div>
        <div class="first-exercise__answer-item">
          <el-image
            :src="pathToAnswerThreeImage"
          />
        </div>
        <div class="first-exercise__answer-item">
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
      pathToQuestOneImage: QuestOne,
      pathToQuestTwoImage: QuestTwo,
      pathToAnswerOneImage: AnswerOne,
      pathToAnswerTwoImage: AnswerTwo,
      pathToAnswerThreeImage: AnswerThree,
      pathToAnswerFourImage: AnswerFour,
    }
  }
}
</script>

<style scoped lang="scss">
.first-exercise {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
  }

  &__quest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-item {
      margin: 16px;
      border: 1px solid #000;
      border-radius: 15px;
      padding: 16px;
      width: 230px;
      height: 230px;
      background: #808080ff;
    }
  }
}
</style>
