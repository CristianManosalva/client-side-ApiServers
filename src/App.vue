<template>
  <div id="app">
    <NarBar />
    <div id="DivPrincipal" class="container">
      <div class="col">
        <div id="navbar" class="row-md-1">
        <!--<NarBar />-->
        
      </div>
      <div id="content" class="row-md-1">
        <!---->
        <router-view></router-view>
      </div>
      </div>
      <div id="footerPage">
        <FooterPage />
      </div>
    </div>
  </div>
</template>
<!-- 
<img src="./assets/domainse.png">
    <hr>
    <SearchBar/>
    <hr>
    <FooterPage/>
-->
<script>
import SearchBar from "./components/SearchBar";
import FooterPage from "./components/FooterPage";
import NarBar from "./components/NarBar";

export default {
  name: "App",
  components: {
    NarBar,
    //SearchBar,
    FooterPage
  }
};
/*
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: center;
}


#footerVue {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
}

#footerPage {
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 181px;
  color: white;
}


-------------------------------
html {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}
body {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
}

#app {
  width: 100%;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
}

#content {
  margin-top: 56px;
  width: 100%;
  margin-bottom: 181px;
}

#footerPage {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
}
-------------------------------

*/
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 181px;
}
#app {
  width: 100%;
  /* height: 100vh; */
  /*display: flex;*/
  /* flex-shrink: 1; */
  /* align-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}
#DivPrincipal {
  /* width: 100%;
  height: auto;
  align-content: center;
  align-items: center;
  text-align: center; */
}
#navbar {
  /*margin-top: 180px;*/
}
#content {
  margin-top: 76px;
  width: 100%;
  /* margin-bottom: 181px; */
}
#footerPage {
  height: 181px;
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0px;
}
</style>
