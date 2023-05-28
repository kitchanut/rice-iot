<template>
  <div>
    <v-img height="250" style="margin-top: 30vh" :src="$imageBaseApp()" :lazy-src="$imageBaseApp()"></v-img>
  </div>
</template>

<script setup>
const router = useRouter();
const response = await useApiUsers().me();
// console.log(response.status);
if (response.status == 401) {
  router.push({ path: "/login" });
} else {
  router.push({ path: "/dashboard" });
}
</script>

<style></style>
