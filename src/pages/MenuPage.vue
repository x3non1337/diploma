<template>
  <div>
    <section>
      <div>
        <el-image
          style="width: 600px; height: 200px;"
          :src="'@/assets/cover.jpg'"
          :fit="'fit'"
        />
        <h2>Распознавание букв</h2>
        <p>Развитие памяти</p>
        <p>
          Отлично подходит для повышения зрительной памяти
        </p>
      </div>
      <div>
        <el-button type="success" @click="handleClickOnFirstExercize">
          Начать упражнение
        </el-button>
      </div>
    </section>
    <section>
      <div>
        <h2>Запоминание цветов</h2>
        <p>Навыки интенсивного обучения</p>
        <p>
          Отлично помогает для запоминания больших объёмов информации
          за счёт развития кратковременной зрительной памяти
        </p>
      </div>
      <div>
        <button>Начать упражнение</button>
      </div>
    </section>
    <section>
      <div>
        <h2>Порядок слов</h2>
        <p>Развитие памяти</p>
        <p>
          Отлично подходит для повышения зрительной памяти
        </p>
      </div>
      <div>
        <button>Начать упражнение</button>
      </div>
    </section>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'MenuPage',
  methods: {
    handleClickOnFirstExercize() {
      router.push('exercise')
    }
  }
}
</script>

<style scoped>

</style>
