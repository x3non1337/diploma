<template class="rectangle">
  <div>
    <section>
      <h2>Выберите сложность</h2>
      <ul>
        <li><input type="radio" id="easy" name="difficulty" value="easy"><label for="easy">Легкий</label></li>
        <li><input type="radio" id="medium" name="difficulty" value="medium"><label for="medium">Средний</label></li>
        <li><input type="radio" id="hard" name="difficulty" value="hard"><label for="hard">Сложный</label></li>
        <!--<li><input type="radio" id="very-hard" name="difficulty" value="very-hard"><label for="very-hard">Очень сложный</label></li>
        -->
      </ul>
      <div class="buttons">
        <el-button type="success" @click="handleDiagnostic()">
          Диагностика
        </el-button>
        <el-button type="success" @click="handleTraining()">
          Тренинг
        </el-button>
        <el-button type="success" @click="handleExit()">
          Выход
        </el-button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Difficulty',
  methods: {
    handleExit() {
      this.$router.push({ name: 'Menu' })
    },
    handleDiagnostic(){
      this.$router.push({ name: 'FirstExercise' })
    },
    handleTraining(){
      this.$router.push({ name: 'FirstExercise' })
    },
  }

}

</script>

<style>
section{
  padding-top: 220px;
}

.rectangle {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  margin: auto;
  border: 2px solid #333;
  padding: 20px;
  width: 50%;
  height: 50%;
  background-color: #f2f2f2;
  transform: translate(-50%, -50%);
}

h2 {
  margin-top: 0;
  font-size: 24px;
  text-align: center;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 18px;
}

label {
  margin-left: 10px;
  font-size: 16px;
}

.buttons {
  margin-top: 20px;
  text-align: center;
}

button {
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 18px;
  color: #fff;
  background-color: #333;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
</style>
