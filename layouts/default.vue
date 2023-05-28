<template>
  <v-layout>
    <v-app-bar color="primary" density="comfortable">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn icon @click.stop="rail = !rail">
          <v-icon>mdi-{{ `chevron-${rail ? "right" : "left"}` }}</v-icon>
        </v-btn>
      </template>

      <v-app-bar-title>ระบบบริหารจัดการแปลงข้าว</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :rail="rail" expand-on-hover>
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <v-list-item v-if="!item.subManu" :to="item.to" active-color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>

          <v-list-group v-else>
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="item.title"
                prepend-icon="mdi-cog"
                active-color="primary"
              ></v-list-item>
            </template>

            <v-list-item
              v-for="(subManu, i) in item.subManu"
              :key="i"
              :title="subManu.title"
              :to="subManu.to"
              active-color="primary"
            ></v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px">
      <slot />
    </v-main>
  </v-layout>
</template>

<script setup>
// check isLogin
const router = useRouter();
const response = await useApiUsers().me();
if (response.status == 200) {
  // router.push({ path: "/dashboard" });
} else {
  router.push({ path: "/login" });
}

// Drawer
const drawer = ref(true);
const rail = ref(true);
const items = ref([
  {
    icon: "mdi-chart-areaspline",
    title: "แดชบอร์ด",
    page_code: ["dashboard"],
    to: "/dashboard",
    level: ["host", "admin", "user"],
    listActive: "",
  },
  {
    icon: "mdi-barn",
    title: "ฉางข้าว",
    page_code: ["barn"],
    to: "/barn",
    level: ["host", "admin", "user"],
    listActive: "",
  },
  {
    icon: "mdi-focus-field",
    title: "ข้อมูลแปลง",
    page_code: ["field"],
    to: "/field",
    level: ["host", "admin", "user"],
    listActive: "",
  },
  {
    icon: "mdi-router-wireless",
    title: "อุปกรณ์",
    page_code: ["equipment"],
    to: "/setting/equipment",
    level: ["host", "admin", "user"],
    listActive: "",
  },
  {
    icon: "mdi-account-cog",
    title: "ผู้ใช้งานระบบ",
    page_code: ["field"],
    to: "/setting/users",
    level: ["host", "admin", "user"],
    listActive: "",
  },
  // {
  //   icon: "mdi-cog",
  //   title: "ตั้งค่า",
  //   to: "",
  //   subManu: [
  //     {
  //       icon: "mdi-cube",
  //       title: "อุปกรณ์",
  //       to: "/setting/products",
  //     },
  //     {
  //       icon: "mdi-account-cog",
  //       title: "ผู้ใช้งานระบบ",
  //       to: "/setting/users",
  //     },
  //   ],
  // },
]);

const permissions = ref("");
permissions.value = JSON.parse(localStorage.getItem("permissions"));
console.log(JSON.parse(localStorage.getItem("permissions")));

// const admins = ref([
//   ["Management", "mdi-account-multiple-outline"],
//   ["Settings", "mdi-cog-outline"],
// ]);
</script>

<style></style>
