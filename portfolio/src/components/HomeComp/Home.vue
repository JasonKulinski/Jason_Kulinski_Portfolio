<template>
  <div class="home-comp">

      <div class="Button-Container">
        
          <button @click= "about" class="Link-Button"> About </button>
        

        
          <button @click= "content" class="Link-Button"> Content </button>
       
        

      </div>


  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const about = () => {
  router.push({ name: 'about' });
};

const content = () => {
  router.push({ name: 'content' });
};
</script>

<script>
export default {
  name: 'HomeComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.Button-Container{
  justify-Content: center;
  display: flex;
  font-family: Arial;
  font-size: 24px;

}


.Link-Button{
  border-color: black;
  border-width: 2px;
  background-color: #B71392;
  padding: 25px;
  transition-duration: .5s;
  color: black;
  font-size: 24px;
  font-family: Tahoma, sans-serif;
}

.Link-Button:hover{
  background-color: #060606;
  color: white;
  transition-duration: .5s;
}

h3 {
  margin: 40px 0 0;
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
</style>
