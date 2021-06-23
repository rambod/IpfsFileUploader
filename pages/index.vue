<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the IPFS+FileUploader
        </v-card-title>
        <v-card-text>
          <p>Upload your files up to 100MB into the ipfs and use them elsewhere.</p>
          <p>
            For more information check <a
              href="/info"
              rel="noopener noreferrer"
            >
              Info
            </a> page.
          </p>
          <v-row justify="space-around">
            <v-col md="10">
              <v-row class="mrg" justify="center"><v-icon size="60" color="cyan darken-1">mdi-file-upload</v-icon></v-row>
              <v-row class="mrg" justify="space-around"><v-file-input dense type="file" @change="captureFile" /></v-row>
              <v-row v-if="ipfsHash !== null" class="mrg" justify="center">Hash : {{ipfsHash}}</v-row>
              <v-row v-if="ipfsHash !== null" class="mrg" justify="center"><a :href="`https://ipfs.io/ipfs/`+ipfsHash"><v-icon size="50">mdi-link</v-icon></a> </v-row>
            </v-col>
          </v-row>

        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn style="margin-left: 1%" dark rounded color="cyan darken-1" @click="onSubmitFile">Upload!</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import ipfs from "~/ipfs";

export default {
  components: {
    VuetifyLogo
  },
  data(){
    return{
      ipfsHash:null
    }
  },methods:{
    captureFile(event) {
      // console.log("Capture File")
      console.log(event)
      // const file = event.target.files[0]
      const file = event
      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend = () => {
        this.buffer = Buffer(reader.result)
        console.log(this.buffer)
      }
    },
    onSubmitFile(event) {
      event.preventDefault()
      // console.log("Sumited file")
      ipfs.files.add(this.buffer, (err, result) => {
        if (err) {
          // console.log(err)
        } else {
          // console.log("no error")
          this.ipfsHash = result[0].hash
        }
      })

    }
  }
}
</script>
