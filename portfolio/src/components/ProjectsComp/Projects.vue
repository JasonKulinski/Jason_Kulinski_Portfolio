<template>
  <div class="ProjectComp">
    <NavBar />

    <ProjectSection 
      :title="'OrbTak Mission Planner'"
      :sections="orbTakSections" 
      :meterWidth="'100%'" 
      :meterColor="'#2BC253'"
      :stampSrc="'Completed.png'"
      class="ProjectInfoDisplayOdd" 
    />

    <ProjectSection 
      :title="'GreenDex'"
      :sections="greenDexSections" 
      :meterWidth="'30%'" 
      :meterColor="'#FF5500'"
      :stampSrc="'InProgress.png'" 
      class="ProjectInfoDisplayEven"
    />


    <div class="ProjectInfoDisplayOdd">
      <h1>Rare Sticks</h1>
    </div>

    <div class="ProjectInfoDisplayEven">
      <h1>Poker Game</h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBar from '../NavBar.vue';
import ProjectSection from './ProjectSection.vue';

const orbTakSections = ref([
  { title: 'Project Description', imgSrc: '/OrbTakMissionPlanner1.png', description: 'The OrbTak Mission Planner was my senior year capstone project. The project introduced me to the SDLC, Agile and Waterfall workflows, a variaty of management styles, and how to keep up with bi-weekly sprints.' },
  { title: 'Tools & Features', imgSrc: '/OrbTakMissionPlanner2.png', description: 'The project utilized existing frameworks such as Vue.js, Cesium, and Firebase. With these tools combined our small team of five developers was able to create numerous key features that brought the mission planner to life such as: Global Mapping, Creating and storing new flight information, Implementing Role Based Action control, and more.' }
]);

const greenDexSections = ref([
  { title: 'How it Started', imgSrc: '/GreenDex1.jpg', description: 'GreenDex started off at as an idea in Hack4Delta, a new hackathon in New HartfordConneticit. The theme of the hackathon was sustainability so our Co-Founder Lucas Bent came up with an early idea of GreenDex called Basket. The idea was to create a shopping utility that allowed for at a glance information on companies sustainability practices via a lettered grading system. ' },
  { title: 'Where it went', imgSrc: '/GreenDex2.png', description: 'Over the course of the school year we all worked hard on prototyping the product. Our development approach was to fail fast, and fail cheap since our access to resources was limited. Several iterations of the app were developed on Jira, and what you see on the left is our current application utilziing React and Ionic. Our early stages for catagorizing companies had been souly based off of carbon emissions, but we plan to expand our technology to look into current and historic news, supply chain efficiency, and general CSR practices through web scraping. ' },
  { title: 'Where it will go', imgSrc: '/GreenDex3.jpg', description: 'In the next three months our small team plans to launch GreenDex in a MVP state. I am lucky to have gone through the Innovate for Maine program, becasue they have given me the skills necessary to bring these kinds of exciting innovations to life. The bootcamp sparked my go getter attitude, and helped me realize that anything is possible with the right team and the right mindset' },

]);

// const rareSticksSections = ref([
//   // Add sections for Rare Sticks
// ]);

// const pokerGameSections = ref([
//   // Add sections for Poker Game
// ]);
</script>


<script scoped>
export default {
  name: 'ProjectComp',
  props: {
    msg: String
  }
}
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
  background: linear-gradient(to left, rgba(225, 225, 225, 0.7), rgba(225, 225, 225, 0.9)), 
              url('@/assets/backgroundTexture.png') no-repeat center center;
  background-size: cover;
  z-index: 2;
  overflow: hidden;
}
.ProjectInfoDisplayEven {
  background: linear-gradient(to right, rgba(155, 155, 155, 0.9), rgba(225, 225, 225, 0.7)), 
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
