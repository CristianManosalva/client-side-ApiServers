<template>
  <footer class="section footer-classic context-dark bg-image" style="background: #343a40;">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="pr-xl-4">
            <a class="brand" href="index.html">
              <img
                class="brand-logo-light"
                src="images/agency/logo-inverse-140x37.png"
                alt
                width="140"
                height="37"
                srcset="images/agency/logo-retina-inverse-280x74.png 2x"
              />
            </a>
            <p></p>
            <p>UI para consumir RESTAPI para la consulta de servidores asociados a un domino.</p>
            <!-- Rights class="navbar navbar-fixed-bottom"-->
            <p class="rights">
              <span></span>
              <span><strong>Truora</strong></span>
              <span>,</span>
              <span>Prueba Tecnica</span>
              <span>.</span>
              <span>Software Engineer - Intern.</span>
            </p>
          </div>
        </div>
        <!--<div class="col-md-4">-->
        <div class="col-md-4">
          <br>
          <h5>Contacts</h5>
          <dl class="contact-list">
            <dt>email:</dt>
            <dd>
              <a href="mailto:#">manosalvacristian@gmail.com</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="row no-gutters social-container">
      <div class="col">
        <a class="social-inner" href="https://www.linkedin.com/in/CristianManosalva" target="_blank">
          <span class="icon mdi mdi-linkedin"></span>
          <span>Linkedin</span>
        </a>
      </div>
      <div class="col">
        <a class="social-inner" href="https://www.github.com/CristianManosalva" target="_blank">
          <span class="icon mdi mdi-github"></span>
          <span>Github</span>
        </a>
      </div>
        <!--
      <div class="col">
        <a class="social-inner" href="#">
          <span class="icon mdi mdi-twitter"></span>
          <span>twitter</span>
        </a>
      </div>
      <div class="col">
        <a class="social-inner" href="#">
          <span class="icon mdi mdi-youtube-play"></span>
          <span>google</span>
        </a>
      </div>
      -->
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.context-dark,
.bg-gray-dark,
.bg-primary {
  color: rgba(255, 255, 255, 0.8);
}

.footer-classic a,
.footer-classic a:focus,
.footer-classic a:active {
  color: #ffffff;
}
.nav-list li {
  padding-top: 5px;
  padding-bottom: 5px;
}

.nav-list li a:hover:before {
  margin-left: 0;
  opacity: 1;
  visibility: visible;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.social-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 23px;
  font: 900 13px/1 "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}
.social-container .col {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.nav-list li a:before {
  content: "\f14f";
  font: 400 21px/1 "Material Design Icons";
  color: #4d6de6;
  display: inline-block;
  vertical-align: baseline;
  margin-left: -28px;
  margin-right: 7px;
  opacity: 0;
  visibility: hidden;
  transition: 0.22s ease;
}
</style>