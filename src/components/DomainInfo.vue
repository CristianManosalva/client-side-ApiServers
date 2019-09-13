<template>
  <div>
    <div>
      <b-card align="left">
        <p class="card-text">Servers Changed: {{domain_info.ServersChanged}}</p>
        <p class="card-text">Ssl Grade: {{domain_info.SslGrade}}</p>
        <p class="card-text">Previous Ssl Grade: {{domain_info.PreviousSslGrade}}</p>
        <p class="card-text">Logo link: {{domain_info.Logo}}</p>
        <p class="card-text">Title Page: {{domain_info.Title}}</p>
        <p class="card-text">Server is Down: {{domain_info.IsDown}}</p>
      </b-card>
    </div>
    <br>
    <div>
      <b-table striped hover :items="domain_info.Endpoints"></b-table>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "DomainInfo",
  data() {
    return {};
  },
  props: {
    domain_info: {
      type: Object,
      default: function() {
        return {
          Endpoints: [
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Last"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Last"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Last"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Last"
            }/*,
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "El Ultimo"
            }*/
          ],
          ServersChanged: false,
          SslGrade: "B",
          PreviousSslGrade: "A",
          Logo: "enlaceLogo",
          Title: "TitlePage",
          IsDown: false
        };
      }
    }
  }

  /*
  ,
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "Amazon Inc"
            },
            {
              Address: "serversIp",
              SslGrade: "A+",
              Country: "Us",
              Owner: "El Ultimo"
            }
   */
};
</script>

<style scoped>
</style>