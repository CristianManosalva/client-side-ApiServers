<template>
  <div>
    <div class align="center">
      <b-form-input
        placeholder="Ingresa el Dominio, ej: google.com"
        v-on:keydown.enter="presionaEnter"
        v-model="text"
      ></b-form-input>
      <br>
      <b-button  variant="outline-primary">Search</b-button>
    </div>
    <div class="container" v-if="showDomainInfo">
      <!--<DomainInfo domainProp="domain_info"/>-->
      <DomainInfo v-bind:domain_info="domain_info"></DomainInfo>
    </div>
    <div class="container" v-if="showServersInfo">
      <ServersInfo v-bind:items="domain_info.Endpoints" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DomainInfo from "./DomainInfo";
import ServersInfo from "./ServersInfo";

export default {
  name: "SearchBar",
  components: {
    DomainInfo,
    ServersInfo
  },
  data() {
    return {
      text: "",
      contend: "",
      domain_info: {},
      showDomainInfo: false,
      showServersInfo: false,
      Status: "",
      servers: [
        {
          SslGrade: "A+"
        }
      ]
    };
  },
  methods: {
    recursivo: function(e) {
      axios
        .get("http://localhost:3000/v1/servers/getServerInfo/platzi.com")
        .then(response => {
          this.Status = response.data;
          if (this.Status == "DNS") {
            this.recursivo;
          } else {
          }
        })
        .catch(e => {
          console.log("error ", e);
        });
    },
    presionaEnter: function(e) {
      this.contend = "Presiono enter rey";
      if (this.text != "") {
        axios
          .get("http://localhost:3000/v1/servers/getServerInfo/platzi.com")
          .then(response => {
            this.domain_info = response.data;
            //console.log("Info Dominio: ", response.data);
            console.log("Llmada al back");
            (this.showDomainInfo = true), (this.showServersInfo = true);
          })
          .catch(e => {
            console.log("error ", e);
          });
      }
    }
  }
  //   },v-on:sumit.prevent="presionaEnter"
  //   methods: {
  //       presionaEnter: function(e){
  //           //this.text = 'Presiono Enter cachorro'
  //       }
  //   }
  /*
    Endpoints: [
                    {
                        Address: 'serverIp',
                        SslGrade: 'A+',
                        Country: 'Us',
                        Owner: 'Amazon Web'
                    },
                    {
                        address: 'serverIp2',
                        sslGrade: 'A+2',
                        country: 'Us2',
                        owner: 'Amazon Web2'
                    }
                ],
                ServersChanged: false,
                SslGrade: 'B',
                PreviusSslGrade: 'A',
                Logo: 'enlaceLogo',
                Title: 'TitlePage',
                IsDowm: false
  */
};
</script>

<style>
</style>