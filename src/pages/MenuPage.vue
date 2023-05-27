<template>
  <div>
    <section>
      <div>
        <h2 align="center">Распознавание символов</h2>
        <p align="center">Развитие памяти</p>
        <p align="center">
          Отлично подходит для развития зрительной памяти
        </p>
      </div>
      <div>
        <el-button type="success" @click="handleClickOnFirstExercize">
          Плоские буквы
        </el-button>
      </div>
      <div>
        <p>
        </p>
        <el-button type="success" @click="handleClickOnFirstExercize" >
          Распознавание букв
        </el-button>
        <p>
        </p>
        <!--<el-button type="success">
          Кубики
        </el-button> -->
        <p>
        </p>
        <el-button type="success">
          Результаты
        </el-button>
        <p>
        </p>
        <el-button type="success" @click="close()">
          Выход
        </el-button>
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
      router.push('difficulty')
    }
  }
}
</script>

<style scoped>
body
{
  background-color: #66b1ff;
}

section{
  padding-top: 220px;
}

.el-button
{
  width: 100%;
}
</style>
