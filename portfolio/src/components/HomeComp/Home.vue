<template>
  <div class="home-comp">
    <NavBar class="NavBar" />

    <div class="Overlay">
        <video autoplay muted loop class="BackgroundContainer" controls="false">
          <source src="WebstieBackground4.mp4" type="video/mp4">
        </video>
      
      <img src="Headshot1.jpg" class="ImageContainer" />

      <div class="textbox">
        <h1>Hello World, I am</h1>
        <h2>Jason Kulinski</h2>
        <p>Welcome to my website! If you are here, you're interested in my professional accomplishments and who I am as a person.</p>
        <p>I wanted to jump off the page and let you in on some of the projects I've been a part of, as simply explaining them in an interview or reading about them in a resume doesn't do them justice.</p>
        <p>You'll also get a glimpse at my personality, some hobbies I take an interest in, and what I get up to in my free time. I hope you enjoy this tour of my life and accomplishments. I have certainly had fun living through them!</p>
      </div>
    </div>

    <div class="Button-Container">
      <a href="https://www.linkedin.com/in/jason-kulinski-/" class="Link-Button">
        <img src="LinkedinIcon.png" />
      </a>
      <a href="https://github.com/JasonKulinski" class="Link-Button">
        <img src="GitHubLogo.png" />
      </a>
      <a class="Link-Button">
        
        <button class="Link-Button" @click="handleDownloadClick">
          <img src="ResumeIcon.png" />
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
import NavBar from '../NavBar.vue';

const handleDownloadClick = (event) => {
  event.preventDefault(); // Prevent the default action

  // Show confirmation dialog
  const userConsent = confirm("Would you like to download Jason Kulinski's resume?");

  if (userConsent) {
    // If user gives consent, proceed with the download
    const link = document.createElement('a');
    link.href = 'Jason Kulinski Resume.pdf';
    link.download = 'Jason Kulinski Resume.pdf';
    link.click();
  }
};
</script>

<script>
export default {
  name: 'HomeComponent', 
};
</script>

<style scoped>
.body {
  margin: 0px;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
}

.Button-Container {
  justify-content: center;
  display: flex;
  font-family: Arial;
  font-size: 24px;
}

.Link-Button {
  border-width: 2px;
  background-color: #b71392;
  padding: 40px;
  transition-duration: 0.5s;
  color: black;
  font-size: 24px;
  font-family: Tahoma, sans-serif;
}

.Link-Button:hover {
  background-color: #060606;
  color: white;
  transition-duration: 0.5s;
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

.Overlay {
  position: fixed;
  width: 100%;
  height: 100hv;
  top: 0;
  left: 0;
  overflow: hidden;
}

.ImageContainer {
  justify-content: center;
  display: flex;
  align-items: center;
  height: auto;
  width: 30%;
  object-fit: center;
  object-position: center;
  border-radius: 50%;

  position: absolute;
  top: 45%;
  left: 20%;
  transform: translate(-50%, -50%);

  z-index: 3;
}

.BackgroundContainer {
  height: 100%;
  width: 100%;
  z-index: 1;
  pointer-events: none;
}

.BlankScreen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white background */
  z-index: 2; /* Ensure it's above the video but below other content */
}

.textbox {
  position: absolute;
  top: 45%;
  left: 65%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, rgba(0, 0, 139, 0.5), rgba(0, 0, 255, 0.5));
  padding: 20px;
  border-radius: 10px;
  z-index: 3;
  width: 50%;
  height: 40vh;
  text-align: center;
}

.textbox h1 {
  margin: 0; /* Remove default paragraph margin */
  font-size: 1.6em; /* Adjust font size as needed */
  font-family: Tahoma, sans-serif;
  color: rgba(255, 225, 205, 0.8);
}

.textbox h2 {
  margin: 0; /* Remove default paragraph margin */
  font-size: 2.6em; /* Adjust font size as needed */
  font-family: Tahoma, sans-serif;
  color: rgba(255, 155, 55, 1);
}

.textbox p {
  margin: 0; /* Remove default paragraph margin */
  font-size: 1.2em; /* Adjust font size as needed */
  font-family: Tahoma, sans-serif;
  font-weight: 500;
  color: rgba(225, 225, 225, 1);
  padding: 10px;
}

.Button-Container {
  position: absolute;
  top: 85%; /* Adjust position as needed */
  left: 65%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  z-index: 3; /* Ensure it is above the background elements */
  gap: 35px;
}

.Link-Button {
  background-color: black;
  color: black;
  padding: 5px 5px; /* Adjust padding to make the button smaller */
  font-size: 14px; /* Adjust font size to make the text smaller */
  width: auto; /* Allow the button to adjust its width based on content */
  max-width: 120px; /* Set a maximum width for the button */
  max-height: 120px;
  min-width: 120px;
  min-height: 120px;
  text-align: center; /* Center the text */
  transition: background-color 0.5s, color 0.5s;
  border-radius: 500px;
  object-fit: contain;
}

.Link-Button img {
  display: block;
  width: 100%; /* Ensure the image fills the button */
  height: auto;
}

.Link-Button:hover {
  background-color: gold;
  color: white;
}

</style>
