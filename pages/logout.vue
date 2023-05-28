<template>
  <div></div>
</template>

<script setup>
const router = useRouter();

localStorage.removeItem("token");
localStorage.removeItem("permissions");

router.push({ path: "/login" });
</script>

<style></style>
