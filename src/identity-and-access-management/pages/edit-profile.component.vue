<template>
  <div class="container">
    <div class="Profile">Profile</div>
    <div class="content">
      <div class="content-container">
        <div class="section">
          <div class="item">
            <div class="label">Photo</div>
            <div class="value">
              <template v-if="editMode.photo">
                <div>
                  <InputText v-model="formData.photo" type="text" class="p-inputtext-sm" placeholder="Small" />
                  <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('photo')"/>
                  <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('photo')"/>
                </div>
              </template>
              <template v-else>
                <div class="photo-container">
                  <Image :src="formData.photo" alt="Profile Photo" preview/>
                  <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('photo')" outlined></Button>
                </div>
              </template>
            </div>
          </div>
        </div>
        <Divider type="solid" />

        <div class="section">
          <div class="item">
            <div class="label">Name</div>
            <div class="value">
              <template v-if="!editMode.name">
                {{ formData.name }}
                <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('name')" outlined></Button>
              </template>
              <template v-else>
                <InputText v-model="formData.name" type="text" class="p-inputtext-sm" placeholder="Small" />
                <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('name')"/>
                <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('name')"/>
              </template>
            </div>
          </div>
          <Divider type="solid" />
        </div>

        <div class="section">
          <div class="item">
            <div class="label">Last Name</div>
            <div class="value">
              <template v-if="!editMode.lastName">
                {{ formData.lastName }}
                <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('lastName')" outlined></Button>
              </template>
              <template v-else>
                <InputText v-model="formData.lastName" type="text" class="p-inputtext-sm" placeholder="Small" />
                <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('lastName')"/>
                <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('lastName')"/>
              </template>
            </div>
          </div>
          <Divider type="solid" />
        </div>

        <div class="section">
          <div class="item">
            <div class="label">Email</div>
            <div class="value">
              <template v-if="!editMode.email">
                {{ formData.email }}
                <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('email')" outlined></Button>
              </template>
              <template v-else>
                <InputText v-model="formData.email" type="text" class="p-inputtext-sm" placeholder="Small" />
                <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('email')"/>
                <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('email')"/>
              </template>
            </div>
          </div>
          <Divider type="solid" />
        </div>

        <div class="section">
          <div class="item">
            <div class="label">District</div>
            <div class="value">
              <template v-if="!editMode.district">
                {{ formData.district }}
                <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('district')" outlined></Button>
              </template>
              <template v-else>
                <InputText v-model="formData.district" type="text" class="p-inputtext-sm" placeholder="Small" />
                <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('district')"/>
                <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('district')"/>
              </template>
            </div>
          </div>
          <Divider type="solid" />
        </div>

        <div class="section">
          <div class="item">
            <div class="label">Phone</div>
            <div class="value">
              <template v-if="!editMode.phone">
                {{ formData.phone }}
                <Button class="editButton" label="Edit" size="small" severity="secondary" @click="toggleEdit('phone')" outlined></Button>
              </template>
              <template v-else>
                <InputText v-model="formData.phone" type="text" class="p-inputtext-sm" placeholder="Small" />
                <Button class="cancelButton" size="small" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" @click="cancelChanges('phone')"/>
                <Button class="confirmButton" size="small" icon="pi pi-check" severity="success" rounded aria-label="Filter" @click="saveChanges('phone')"/>
              </template>
            </div>
          </div>
        </div>
        <Button>
          <li class="navbar-link">
            <router-link to="/subscription">Subscribe</router-link>
          </li>
        </Button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      editMode: {
        photo: false,
        name: false,
        lastName: false,
        email: false,
        district: false,
        phone: false,
      },
      formData: {
        photo:
            localStorage.getItem('profilePhoto') ||
            'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/articulos/perfil-resilencia.jpg',
        name: 'Luis',
        lastName: 'Li',
        email: 'lrlitang18@gmail.com',
        district: 'San Borja',
        phone: '984 014 947',
      },
      originalData: {},
    };
  },
  methods: {
    toggleEdit(field) {
      this.editMode[field] = !this.editMode[field];
      if (this.editMode[field]) {
        this.originalData[field] = this.formData[field];
      }
    },
    saveChanges(field) {
      this.toggleEdit(field);
      localStorage.setItem('profileData', JSON.stringify(this.formData));
    },
    cancelChanges(field) {
      this.toggleEdit(field);
      if (this.originalData[field] !== undefined) {
        this.formData[field] = this.originalData[field];
      } else {
        this.formData[field] = null; // Establece un valor predeterminado si no hay un valor original
      }
    },
  },
};
</script>

<style>
.container {
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 140px;
  margin: 0 100px;
}

.Profile {
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  justify-content: center;
}

.content {
  width: 100%;
  justify-content: center;
  padding-bottom: 50px;
}

.content-container {
  margin: 0 20px; /* Añade el margen horizontal al contenido */
}

.section {
  width: 100%;
}

.item {
  display: flex;
  align-items: center;
}

.label {
  flex: 1;
  margin-right: 16px;
}

.value {
  display: flex;
  align-items: center;
}

.editButton {
  margin-left: 15px;
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
}

.photo-container {
  display: flex;
  align-items: center;
  justify-items: center;
}

.photo-container img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  border-radius: 100px;
}

@media (max-width: 600px) {
  .item {
    flex-direction: column;
    align-items: flex-start;
  }

  .label {
    margin-bottom: 8px;
  }

  .editButton {
    margin-top: 8px;
    margin-left: 0;
  }

  @media (max-width: 600px) {
  }
}
.cancelButton {
  background: none;
  border: none;
  color: red;
  cursor: pointer;
  margin-left: 8px;
}

.confirmButton {
  background: none;
  border: none;
  color: green;
  cursor: pointer;
  margin-left: 8px;
}
</style>