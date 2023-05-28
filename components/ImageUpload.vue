<template>
  <div class="uploader">
    <div class="file-input">
      <label for="'file'" style="display: flex; justify-content: center; align-items: center">
        <span v-if="!loadingComponent" style="font-size: 48px">+</span>
        <Icon v-else name="svg-spinners:180-ring" size="1.5em" />
      </label>
      <!-- <input v-model="files" type="file" id="'file'" @change="handleFileSelection($event)" /> -->

      <v-file-input
        v-show="false"
        v-model="files"
        id="'file'"
        accept="image/*"
        prepend-icon=""
        hide-details
        @change="handleFileSelection($event)"
      ></v-file-input>
    </div>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
  id: Number,
  type: String,
  location: String,
  loading: Boolean,
});
const loadingComponent = ref(null);
const loading = computed(() => props.loading);

watch(loading, () => {
  props.loading ? (loadingComponent.value = true) : (loadingComponent.value = false);
});

// Import Important
const { $toast } = useNuxtApp();
const emit = defineEmits(["success"]);

//Upload
const files = ref([]);
const handleFileSelection = async (event) => {
  loadingComponent.value = true;
  files.value.push(event.target.files);
  let formDataNew = new FormData();
  formDataNew.append(
    "formData",
    JSON.stringify({
      id: props.id,
      type: props.type,
      location: props.location,
    })
  );
  for (let i = 0; i < files.value.length; i++) {
    formDataNew.append("files[" + i + "]", files.value[i]);
  }
  const response = await useApiUploads().store(formDataNew);
  response.status == 201
    ? ($toast.success("อัพโหลดสำเร็จ"), emit("success"), (files.value = []))
    : ($toast.error("เกิดข้อผิดพลาด! กรุณาติดต่อผู้แลระบบ"), (loadingComponent.value = false));
};
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: #2196f3;
  color: #fff;
  padding: 40px;
  text-align: center;
  border-radius: 4px;
  border: thin solid #2196f3;
  font-size: 20px;

  .file-input {
    width: 100%;
    height: 100%;
    margin: auto;

    label,
    input {
      background: #fff;
      color: #2196f3;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding-bottom: 7px;
      cursor: pointer;
    }

    input {
      opacity: 0;
      z-index: -2;
    }
  }
}
</style>
