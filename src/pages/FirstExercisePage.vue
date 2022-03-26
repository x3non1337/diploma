<template>
  <div class="first-exercise">
    <section>
      <div v-if="true" class="first-exercise__quest">
        <div class="first-exercise__quest-item">
          <el-image
            :src="pathToQuestImage"
          />
        </div>
        <div class="first-exercise__quest-item">
          <el-image
            :src="pathToQuestImage"
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
            :src="pathToQuestImage"
          />
        </div>
        <div class="first-exercise__answer-item">
          <el-image
            :src="pathToQuestImage"
          />
        </div>
        <div class="first-exercise__answer-item">
          <el-image
            :src="pathToQuestImage"
          />
        </div>
        <div class="first-exercise__answer-item">
          <el-image
            :src="pathToQuestImage"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import picture from '../assets/cover.jpg'

export default {
  name: 'FirstExercisePage',
  data() {
    return {
      pathToQuestImage: picture
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
    flex-direction: row;

    &-item {
      margin: 4px;
      border-radius: 15px;
      width: 40%;
      height: 40%;
    }
  }

  &__quest {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &-item {
      margin: 16px;
      border-radius: 15px;
      width: 400px;
      height: 400px;
    }
  }
}
</style>
