<script>
import {RequestService} from "@/request-service-management/service/request.service";
import {ref} from "vue";
import {BusinessListService} from "@/request-service-management/service/business-list.service";

export default {
  name: "Request",
  data(){
    return {
      businessRequestCompleted: null,
      businessProfileService: null,
      requestsCompleted: null,
      businessId: null,
      active: ref(0),
    }
  },
  created() {
    this.businessRequestCompleted = new RequestService();
    this.businessProfileService = new BusinessListService();
    if(JSON.parse(localStorage.getItem("account")).role === "business"){
      this.businessProfileService.searchBusinessProfile(JSON.parse(localStorage.getItem("account")).id).then(res=>{
        this.businessId = res.data.id;
        this.businessRequestCompleted.getRequestsByBusinessId(res.data.id, res.data.status).then(result=>{
          this.requestsCompleted = result.data;
          console.log(this.requestsCompleted);
        })
      });
    }
  }
}

</script>

<template>
  <TabView v-model:activeIndex="active" style="margin: 150px 50px 0px 50px;" >
    <TabPanel style="background-color: cornflowerblue; padding: 10px 15px;" header="RECENT REQUESTS" >
      <div style="display: grid; grid-template-columns: repeat(3, 1fr)">
        <div v-for="(item, index) in this.requests" :key="item.id" >
          <div v-if="item.status == 'IN_PROCESS'"
               style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); border-radius: 8px;
           height: 200px; margin-bottom: 30px;">
            <img alt="user profile image" :src="item.userProfile.image" style="height: 50px; width: 50px;"/>
            <p><b>Request created by </b> {{item.userProfile.firstName}}</p>
            <Button icon="pi pi-check" label="Save" />
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel style="background-color: yellowgreen; padding: 10px 15px;" header="COMING PROJECTS">
      <div v-for="(item, index) in this.requests" :key="item.id" >
        <div v-if="item.status == 'PENDING'"
             style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); border-radius: 8px; width: 80%;
           height: 200px; margin-bottom: 30px;">
          <img alt="user profile image" :src="item.userProfile.image" style="height: 50px; width: 50px;"/>
          <p><b>Request created by </b> {{item.userProfile.firstName}}</p>
          <Button icon="pi pi-check" label="Save" />
        </div>
      </div>
    </TabPanel>
    <TabPanel style="background-color: green; padding: 10px 15px;" header="IN PROCESS PROJECTS">
      <div v-for="(item, index) in this.requests" :key="item.id" >
        <div v-if="item.status == 'COMPLETED'"
             style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); border-radius: 8px; width: 80%;
           height: 200px; margin-bottom: 30px;">
          <img alt="user profile image" :src="item.userProfile.image" style="height: 50px; width: 50px;"/>
          <p><b>Request created by </b> {{item.userProfile.firstName}}</p>
          <Button icon="pi pi-check" label="Save" />
        </div>
      </div>
    </TabPanel>


  </TabView>
</template>

<style scoped>
</style>