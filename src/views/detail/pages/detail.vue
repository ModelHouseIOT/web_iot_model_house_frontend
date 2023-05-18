<template>
    <div class="container">
      <div class="content">
        <Card style="width: 500px; height: 800px;position:relative;
        margin: 200px 50px;">
          <template #header>
            <img :src="this.business.image" alt="business logo choose"/>
          </template>
          <template #title>
            <Rating style="margin-top: 50px; justify-content: center;"
                    v-model="value" :cancel="false" :model-value="3" readonly/>
            <br>
            <h2 style="text-align: center;">{{this.business.name}}</h2>
          </template>
          <template #subtitle><h3 style="text-align: center;">{{this.business.address}}</h3></template>
          <template #content>
            <br>
            <div><b>Web site: </b></div>
            <a :href="this.business.webSite" target="_blank">{{this.business.webSite}}</a>
            <br><br>
            <div><b>Phone number: </b></div>
            <p>{{this.business.phoneBusiness}}</p>
          </template>
        </Card>
      </div>
      <div class="sidebar">
        <div style="width: 500px; height: 800px;position:relative;
        margin: 200px 50px;">

          <h2>Description</h2>
          <p>{{this.business.description}}</p>
          <div class="card md:flex md:justify-content-center" style="width: 1000px;">
            <Galleria style="width: 100%;" :value="images" :responsiveOptions="responsiveOptions" :numVisible="4" containerStyle="min-width: 1000px"
                      :circular="true" :showItemNavigators="true">
              <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
              </template>
              <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block; width: 150px; height:100px;" />
              </template>
              <template #caption="slotProps">
                <span class="text-xl mb-2 font-bold">{{ slotProps.item.title }}</span>
                <div @click="signInUser">
                  <Button label="READ MORE" style="background-color: #02AA8B;
                  border-color: #02AA8B; padding: 8px; margin-top: 30px;"/>
                </div>
              </template>
            </Galleria>
          </div>
        </div>

      </div>

    </div>
</template>
<script>
import {defineComponent, ref} from 'vue'
import {BusinessService} from "@/views/detail/service/business.service";

export default defineComponent({
  name: "detail",
  data(){
    return {
      business: {
        image:'',
        name: '',
        address: '',
        webSite: '',
        phoneBusiness: '',
        description: '',
      },
      businessService: null,
      value: ref(null),
      responsiveOptions: null,
      images: null,
    }
  },
  beforeCreate() {

    this.responsiveOptions = ref([
      {
        breakpoint: '991px',
        numVisible: 4
      },
      {
        breakpoint: '767px',
        numVisible: 3
      },
      {
        breakpoint: '575px',
        numVisible: 1
      }
    ]);
    this.businessService = new BusinessService();
    this.businessService.getBusinessByID(this.$route.params.id).then(res=>{
      this.business = res.data;
      console.log(res.data);
    })
  },
  mounted(){
    this.images = ref([
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Remodelación de Casas',
        title: 'Remodelación y ampliación de una Casa en San Isidro - Lima'
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
        thumbnailImageSrc: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',
        alt: 'Remodelación de Casas',
        title: 'REMODELACIÓN DE COCINA EN LA MOLINA - LIMA'
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg',
        thumbnailImageSrc: 'https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg',
        alt: 'Remodelación de Casas',
        title: 'Remodelación y ampliación de una Casa en San Isidro - Lima'
      },
      {
        itemImageSrc: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg',
        thumbnailImageSrc: 'https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg',
        alt: 'Remodelación de Casas',
        title: 'Remodelación y ampliación de una Casa en San Isidro - Lima'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Remodelación de Casas',
        title: 'Remodelación y ampliación de una Casa en San Isidro - Lima'
      },
      {
        itemImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1.jpg',
        thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
        alt: 'Remodelación de Casas',
        title: 'Remodelación y ampliación de una Casa en San Isidro - Lima'
      },

    ])
  }

})
</script>

<style scoped>
.container {
  overflow: hidden; /* Para limpiar el float */
}

.content {
  width: 35%; /* Ancho del contenido principal */
  float: left; /* Flotar a la izquierda */
}

.sidebar {
  width: 65%; /* Ancho de la barra lateral */
  float: right; /* Flotar a la derecha */
}
</style>