<template>
    <div>
      <Card style="width: 500px; height: 800px;position:relative;
        margin: 200px 50px;">
        <template #header>
          <img :src="business.image" alt="business logo choose"/>
        </template>
        <template #title>
          <Rating style="margin-top: 50px; justify-content: center;" v-model="value" :cancel="false" :model-value="3" readonly/>
          <br>
          <h2 style="text-align: center;">{{business.name}}</h2>
        </template>
        <template #subtitle><h3 style="text-align: center;">{{business.address}}</h3></template>
        <template #content>
          <br>
          <div><b>Web site: </b></div>
          <a :href="business.webSite" target="_blank">{{business.webSite}}</a>
          <br><br>
          <div><b>Phone number: </b></div>
          <p>{{business.phoneBusiness}}</p>
        </template>
      </Card>
    </div>

</template>
<script>
import {defineComponent} from 'vue'
import {BusinessService} from "@/views/detail/service/business.service";

export default defineComponent({
  name: "detail",
  data(){
    return {
      business: null,
      businessService: null
    }
  },
  async created() {
    this.businessService = new BusinessService();
    await this.businessService.getBusinessByID(this.$route.params.id).then(res=>{
      this.business = res.data;
      console.log(res.data);
    })
  }
})
</script>

<style scoped>

</style>