<script>
import {RequestService} from "@/request-service-management/service/request.service";
import {ref} from "vue";
import {BusinessListService} from "@/request-service-management/service/business-list.service";
import {AccountService} from "@/request-service-management/service/account-service";
import { useToast } from "primevue/usetoast";

export default {
  name: "Request",
  data(){
    return {
      requestService: null,
      requestId: null,
      toast: useToast(),
      businessProfileService: null,
      accountService: null,
      requestsCompleted: null,
      requestsInProcess: null,
      requestsPending: null,
      requestsCanceled: null,
      businessId: null,
      visibleAccepted: ref(false),
      visibleReject: ref(false),
      active: ref(0),
    }
  },
  created() {
    this.businessProfileService = new BusinessListService();
    this.requestService = new RequestService();
    this.accountService = new AccountService();
    if(JSON.parse(localStorage.getItem("account")).role === "business"){
      this.searchRequest();
    }
  },
  methods: {
    goToProposalForm(id){
      this.$router.push("/proposal/" + id);
    },
    onSubmitAccepted() {
      this.requestService.updateRequest(this.requestId, { "status": "PENDING_PROPOSAL"}).then(result => {
        console.log(result)
      })
      this.searchRequest();
      this.visibleAccepted = false;
      this.toast.add({ severity: 'success', summary: 'Request Accepted', detail: '', life: 3000 });
    },
    onSubmitReject() {
      this.requestService.updateRequest(this.requestId, { "status": "CANCELED" }).then(result => {
        console.log(result)
      })
      this.searchRequest();
      this.visibleReject = false;
      this.toast.add({ severity: 'error', summary: 'Request Reject', detail: '', life: 3000 });
    },
    searchRequest() {
      this.accountService.accountByUserId(JSON.parse(localStorage.getItem("account")).id).then((res) => {
        console.log("holli");
        this.businessProfileService.searchBusinessProfile(res.data.id).then(res => {
          this.businessId = res.data.id;
          console.log(res.data);
          // FIRST STATUS
          this.requestService.getRequestsByBusinessId(res.data.id, "PENDING").then(result => {
            this.requestsPending = result.data;
            console.log(this.requestsPending);
          });
          // SECOND STATUS
          this.requestService.getRequestsByBusinessId(res.data.id, "PENDING_PROPOSAL").then(result => {
            this.requestsCompleted = result.data;
            console.log(this.requestsCompleted);
          });
          // THIRD STATUS
          this.requestService.getRequestsByBusinessId(res.data.id, "IN_PROCESS").then(result => {
            this.requestsInProcess = result.data;
            console.log(this.requestsInProcess);
          });
          // FOURTH STATUS
          this.requestService.getRequestsByBusinessId(res.data.id, "CANCELED").then(result => {
            this.requestsCanceled = result.data;
            console.log(this.requestsCanceled);
          });
        });
      })
    }
  },
}

</script>

<template>
  <TabView v-model:activeIndex="active" style="margin: 150px 50px 0px 50px;" >
<!--    FIRST PANEL-->
    <TabPanel style="background-color: cornflowerblue; padding: 10px 15px;" header="RECENT REQUESTS" >
      <div class="cardRequest">
        <div v-for="(item, index) in this.requestsPending" :key="item.id" >
          <div class="contentCard">
            <div class="contentCardImg">
              <img alt="user profile image" :src="item.userProfile.image" style="height:150px; width: 150px; border-radius: 50%;"/>
            </div>
            <div class="contentCardText">
              <p><b>Request created by </b> {{ item.userProfile.firstName }}</p>
              <p>{{item.description}}</p>
              <div class="buttonOptions">
                <Button class="btn" icon="pi pi-check" label="Accept" @click="visibleAccepted = true; requestId = item.id" />
                <Button class="btn" icon="pi pi-times" severity="danger" label="Reject" @click="visibleReject = true; requestId = item.id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
<!--    SECOND PANEL-->
    <TabPanel style="background-color: yellowgreen; padding: 10px 15px;" header="PENDING PROPOSALS">
      <div class="cardRequest">
          <div v-for="(item, index) in this.requestsCompleted" :key="item.id" >
            <div class="contentCard">
              <div class="contentCardImg">
                <img alt="user profile image" :src="item.userProfile.image" style="height:150px; width: 150px; border-radius: 50%;"/>
              </div>
              <div class="contentCardText">
                <p><b>Send proposal to </b> {{ item.userProfile.firstName }}</p>
                <div>
                  <Button icon="pi pi-file" label="CREATE PROPOSAL" @click="goToProposalForm(item.id)"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </TabPanel>
<!--    THIRD PANEL-->
    <TabPanel style="background-color: green; padding: 10px 15px;" header="IN PROCESS PROJECTS">
      <div class="cardRequest">
          <div v-for="(item, index) in this.requestsPending" :key="item.id" >
            <div class="contentCard">
              <div class="contentCardImg">
                <img alt="user profile image" :src="item.userProfile.image" style="height:150px; width: 150px; border-radius: 50%;"/>
              </div>
              <div class="contentCardText">
                <p><b>Request created by </b> {{ item.userProfile.firstName }}</p>
                <div class="buttonsOpcion">
                  <Button icon="pi pi-check" label="Accept" />
                  <Button icon="pi pi-times" severity="danger" label="Reject" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </TabPanel>
<!--    FOURTH PANEL-->
    <TabPanel style="background-color: green; padding: 10px 15px;" header="PROJECTS CANCELED">
      <div class="cardRequest">
        <div v-for="(item, index) in this.requestsCanceled" :key="item.id" >
          <div class="contentCard">
            <div class="contentCardImg">
              <img alt="user profile image" :src="item.userProfile.image" style="height:150px; width: 150px; border-radius: 50%;"/>
            </div>
            <div class="contentCardText">
              <p><b>Request created by </b> {{ item.userProfile.firstName }}</p>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
  </TabView>

<!--  DIALOGS-->
  <Dialog v-model:visible="visibleAccepted" modal header="Are you sure?" :style="{ width: '20vw' }">
    <template #footer>
      <Button label="No" icon="pi pi-times" severity="danger" @click="visibleAccepted = false" text />
      <Button label="Yes" icon="pi pi-check" severity="success" @click="onSubmitAccepted" autofocus />
    </template>
  </Dialog>
  <Dialog v-model:visible="visibleReject" modal header="Are you sure to reject?" :style="{ width: '20vw' }">
      <template #footer>
        <Button label="No" icon="pi pi-times" severity="success" @click="visibleReject = false" text />
        <Button label="Yes" icon="pi pi-check" severity="danger" @click="onSubmitReject" autofocus />
      </template>
    </Dialog>


<!--  TOASTS-->
  <Toast />
</template>

<style scoped>
.cardRequest{
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    gap: 20px;
  }
  .contentCardImg{
    width: 100%; 
    display: flex; 
    justify-content: center;
    padding-top: 25px;
  }
  .contentCardImg img{
    cursor: pointer;
  }
  .contentCard{
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); 
    border-radius: 8px;
    margin: auto auto 30px;
  }
  .contentCardText{
    width: 90%;
    margin: auto;
    padding: 25px 0;
  }
  .buttonOptions{
    display: inline-block;
  }
  .buttonOptions .btn{
    display: inline-block;
    margin: 0 3px;
  }
</style>