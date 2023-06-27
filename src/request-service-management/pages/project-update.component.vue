<script>
import {ProposalService} from "@/request-service-management/service/proposal.service";
import {useField, useForm} from "vee-validate";

export default {
  name: "ProjectUpdate",
  data(){
    const { resetForm } = useForm();
    const { value, value1 } = useField('value', this.validateField);
    return {
      confirmation: false,
      resetForm: resetForm(),
      value: value,
      value1: value1,
      proposalService: null,
      proposal: null,
      activities: null,
      resources: null,
      requestId: null,
    }
  },
  created() {
    this.requestId = this.$route.params.id;
    this.proposalService = new ProposalService();
    this.proposalService.getProposal(this.requestId).then(res=>{
      this.proposal = res.data;
      console.log("PROPOSALS: ", this.proposal);
    });
    this.proposalService.getProjectActivity(this.requestId).then(res=>{
      this.activities = res.data;
      console.log("ACTIVITIES: ", this.activities);
    });
    this.proposalService.getProjectResource(this.requestId).then(res=>{
      this.resources = res.data;
      console.log("RESOURCES: ", this.resources);
    });
  }
}

</script>

<template>
  <div class="card flex justify-content-center" style="height: 400px; margin:200px 100px 0px 100px;">
    <form @submit.prevent="confirmation = true" class="flex flex-column gap-2" :reset="resetForm">
      <h1>Your current project</h1>
      <h3>Description</h3>
      <p>{{proposal.description}}</p>
      <h3>Price</h3>
      <p>PEN {{proposal.price}}</p>
      <div class="bkg">
        <h2>Activites</h2>
      </div>
      <br>
      <br>
      <div v-for="(activity, index) in activities" :key="index">
        <p>{{activities.description}}</p>
        <Button class="space" @click="removeActivity(index)" icon="pi pi-trash" severity="danger" rounded/>

        <br><br>
      </div>
      <div class="bkg">
        <h2>Resources</h2>
      </div>
      <br>
      <br>
      <div v-for="(resource, index) in resources" :key="index">
        <h3>Resource</h3>
        <p>{{resources.description}}</p>
        <h3>Amount</h3>
        <p>{{resources.quantity}}</p>
        <Button class="space" @click="removeResource(index)" icon="pi pi-trash" severity="danger" rounded/>
        <br><br>
      </div>

      <Button type="submit" label="Submit" style="background-color:#02AA8B; border-color: #02AA8B;
              margin-top: 30px; width: 30%;" @click="submitProposal"/>
    </form>
  </div>
</template>

<style scoped>
.title-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.draft-button {
  margin-top: 10px;
}
.bkg{
  background-color: #004A63;
  padding: 10px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  color: white;
}
.space{
  margin-left: 20px;
}
</style>