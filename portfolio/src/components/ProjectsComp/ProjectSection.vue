<template>
  <div :class="sectionClass">
    <h1>{{ title }}</h1>
    <div class="meter">
      <span :style="{ width: meterWidth, backgroundColor: meterColor }"></span>    
    </div>
    <img :src="stampSrc" class="stamp">

    <transition name="fade" mode="out-in">
      <div v-if="sections[currentIndex]" :key="currentIndex" class="section active">
        <button @click="prevSection" class="prev">
          <img src="/LeftButton.png" alt="Previous">
        </button>

        <div class="content">
          <img :src="sections[currentIndex].imgSrc" :alt="sections[currentIndex].title" class="project-image">
          <div class="description">
            <h2>{{ sections[currentIndex].title }}</h2>
            <p>{{ sections[currentIndex].description }}</p>
          </div>
        </div>

        <button @click="nextSection" class="next">
          <img src="/RightButton.png" alt="Next">
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  sections: Array,
  index: Number,
  meterWidth: {
    type: String,
    default: '100%'
  },
    meterColor: {
    type: String,
    default: '#2BC253' 
  },
  stampSrc: {
    type: String,
    default: 'Completed.png'
  }
});

const currentIndex = ref(0);

const nextSection = () => {
  currentIndex.value = (currentIndex.value + 1) % props.sections.length;
};

const prevSection = () => {
  currentIndex.value = (currentIndex.value - 1 + props.sections.length) % props.sections.length;
};
</script>


<style scoped>
h1, h2 {
  margin: 0;
  padding: 10px;
  text-align: center;
  font-family: Tahoma, sans-serif;
  color: rgba(255, 255, 255, 1);
  text-shadow: 2px 0px 3px #000;
}
h1 {
  color: white;
  text-shadow: 2px 0px 3px #000;
  font-size: 2.8em;
}
h2 {
  padding: 0px;
  font-size: 2.0em;
}
p { 
  margin: 0;
  padding: 0px;
  text-align: center;
  font-family: Tahoma, sans-serif;
  color: rgba(0, 0, 0, 1);
  font-size: 1.4em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ProjectInfoDisplayOdd, .ProjectInfoDisplayEven {
  width: auto;
  height: 55vh;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(225, 225, 225, 0.9)), 
              url('@/assets/backgroundTexture.png') no-repeat center center;
  background-size: cover;
  z-index: 2;
  overflow: hidden;
}
.ProjectInfoDisplayEven {
  background: linear-gradient(to right, rgba(125, 125, 125, 0.7), rgba(225, 225, 225, 0.9)), 
              url('@/assets/backgroundTexture.png') no-repeat center center;
    background-size: cover;

}
.content {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  padding: 20px;
}
.section {
  display: none;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.section.active {
  display: flex;
  height: 0px;
  top: -15%;
  position: relative;
}
.project-image {
  max-height: 33vh;
  max-width: 500px;
}
.description {
  margin-left: 20px;
  color: rgba(255, 255, 255, 1);
}
.buttons {
  position: relative;
  top: 20%;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
}
button img {
  display: block;
  max-width: 100%;
  height: 25%;
}
button:hover {
  background-color: white;
}

.prev, .next {
  padding: 10px 20px;
  margin: 0px 100px;
  background-color: rgba(0,0,0,.3);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 50px;
  max-height: 100px;
  min-width: 50px;
  min-height: 100px;
  transition: background 1s;
  
}

.prev img, .next img {
  display: block;
  max-width: auto ;
  height: auto;
}


.buttonsEven button {
  background-color: rgba(255, 255, 255, 0.3);
  color: #000;
}
.buttonsEven button:hover {
  background-color: #FFF;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.meter {
    background: none repeat scroll 0 0 #555555;
    border-radius: 25px 25px 25px 25px;
    box-shadow: 0 -1px 1px rgba(255, 255, 255, 0.3) inset;
    height: 40px;
    width: 300px;
    top: -27%;
    left: 80%;
    margin: 60px 0 20px;
    overflow: hidden; /* remove padding and add me */
    position: relative;
}
.meter > span {
    background-color: #2BC253;
    background-image: -moz-linear-gradient(center bottom , #2BC253 37%, #54F054 69%);
    border-radius: 20px 0px 0px 20px; /* change me */
    box-shadow: 0 2px 9px rgba(255, 255, 255, 0.3) inset, 0 -2px 6px rgba(0, 0, 0, 0.4) inset;
    display: block;
    height: 100%;
    overflow: hidden;
    position: relative;
}

.stamp {
  height: auto;
  max-width: 300px;
  position: relative;
  top: -47%;
}

</style>
