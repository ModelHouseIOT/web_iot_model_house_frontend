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
      proposal: {
        description: "",
        price: "",
      },
      activities: null,
      resources: null,
      requestId: null,
      editMode: {
        activityDescription: "",
        resourceDescription: "",
        resourceAmount: "",
      },
      formData: {
        activityDescription: "",
        resourceDescription: "",
        resourceAmount: "",
      },
      originalData: {},
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
  },
  methods:{
    toggleEdit(field) {
      this.editMode[field] = !this.editMode[field];
      if (this.editMode[field]) {
        this.originalData[field] = this.formData[field];
      }
    },
    saveChanges(field, id) {
      this.toggleEdit(field);
      console.log(JSON.stringify(this.formData))
      if (field == 'activityDescription'){
        this.proposalService.updateProjectActivity(id, {
          "status": "PENDING",
          "name": "-",
          "description": this.activities[id-1].description,
        }).then(response=>{
          console.log(response)
        });
      }
      if (field == 'resourceDescription' || field == 'resourceAmount'){
        this.proposalService.updateProjectResource(id, {
          "description": this.resources[id-1].description,
          "quantity": this.resources[id-1].quantity,
          "state": "PENDING"
        }).then(response=>{
          console.log(response)
        });
      }
    },
    cancelChanges(field) {
      this.toggleEdit(field);
      if (this.originalData[field] !== undefined) {
        this.formData[field] = this.originalData[field];
      } else {
        this.formData[field] = null;
      }
    },
    wasDone(field, id){
      if (field == 'activityDescription'){
        this.proposalService.updateProjectActivity(id, {
          "status": "DONE",
          "name": "-",
          "description": this.activities[id-1].description,
        }).then(response=>{
          console.log(response)
        });
      }
      if (field == 'resourceDescription' || field == 'resourceAmount'){
        this.proposalService.updateProjectResource(id, {
          "description": this.resources[id-1].description,
          "quantity": this.resources[id-1].quantity,
          "state": "DONE"
        }).then(response=>{
          console.log(response)
        });
      }
    },
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

        <div class="value" style="display: flex;justify-content: space-between;">
          <template v-if="!editMode.activityDescription" >
            <div><b>{{index+1}}.- </b>{{ activity.description }}</div>
            <Button class="editButton space" label="Edit" size="small" severity="secondary" @click="toggleEdit('activityDescription')" outlined></Button>
          </template>
          <template v-else class="space">
            <InputText v-model="activity.description" type="text" class="p-inputtext-sm" placeholder="Small" />
            <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('activityDescription')"/>
            <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('activityDescription', index+1)"/>
          </template>
          <Button class="space" label="Done" severity="danger" @click="wasDone('activityDescription')" />
        </div>

        <br><br>
      </div>
      <div class="bkg">
        <h2>Resources</h2>
      </div>
      <br>
      <br>
      <div v-for="(resource, index) in resources" :key="index">
        <div style="display: flex; justify-content: space-between;">
          <div class="value">
            <template v-if="!editMode.resourceDescription">
              <p> <b>Resource: </b> {{resource.description}}</p>
              <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('resourceDescription')" outlined></Button>
            </template>
            <template v-else>
              <InputText v-model="resource.description" type="text" class="p-inputtext-sm" placeholder="Small" />
              <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('resourceDescription')"/>
              <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('resourceDescription', index+1)"/>
            </template>
            <Button class="space" label="Done" severity="danger" @click="wasDone('resourceDescription')" />

          </div>
          <div class="value">
            <template v-if="!editMode.resourceAmount">
              <p> <b>Amount: </b> {{resource.quantity}}</p>
              <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('resourceAmount')" outlined></Button>
            </template>
            <template v-else>
              <InputText v-model="resource.quantity" type="text" class="p-inputtext-sm" placeholder="Small" />
              <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('resourceAmount')"/>
              <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('resourceAmount', index+1)"/>
            </template>
            <Button class="space" label="Done" severity="danger" @click="wasDone('resourceAmount')" />

          </div>
        </div>
        <br><br>
      </div>
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