<template>
  <div style="width: 100%" class="d-flex align-center" id="cover">
    <v-card class="mx-auto" max-width="620">
      <v-card-title class="text-center mt-5">
        <h2>ระบบบริหารจัดการแปลงข้าว</h2>
        <!-- <h2 class="mt-3">น้องแป้ง เบเกอรี่</h2> -->
      </v-card-title>
      <v-card-text class="text--primary mt-5">
        <v-form @submit.prevent="onSubmit()">
          <!-- <v-alert v-model="alert" type="warning" dismissible text> Username or Password Incorrect !! </v-alert> -->

          <v-text-field
            prepend-inner-icon="mdi-account"
            single-line
            type="text"
            placeholder="ชื่อผู้ใช้งาน/อีเมล์"
            v-model="email"
            dense
            outlined
          ></v-text-field>
          <v-text-field
            prepend-inner-icon="mdi-key-variant"
            single-line
            type="password"
            placeholder="รหัสผ่าน"
            v-model="password"
            dense
            outlined
          ></v-text-field>

          <v-btn
            block
            type="submit"
            color="warning"
            class="pt-5 pb-5"
            :loading="loading"
            :disabled="loading"
            variant="tonal"
            >เข้าสู่ระบบ
            <template v-slot:loader>
              <Icon name="svg-spinners:3-dots-move" size="2em" />
            </template>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});

const { $toast } = useNuxtApp();
const router = useRouter();

const alert = ref(false);
const loading = ref(false);
const email = ref("");
const password = ref("");

const onSubmit = async () => {
  loading.value = true;
  const data = {
    tokenName: "Web",
    email: email.value,
    password: password.value,
  };
  const response = await useApiUsers().login(data);
  if (response.status) {
    localStorage.setItem("token", response.data.token);
    const permission = response.data.permission;

    let permission_read = [];
    let permission_write = [];
    let permission_update = [];
    let permission_delete = [];

    permission.map(function (permission) {
      if (permission.permission_read == 1) {
        permission_read.push(permission.page_id);
      }
      if (permission.permission_write == 1) {
        permission_write.push(permission.page_id);
      }
      if (permission.permission_update == 1) {
        permission_update.push(permission.page_id);
      }
      if (permission.permission_delete == 1) {
        permission_delete.push(permission.page_id);
      }
    });

    const permissionArray = {
      permission_read: permission_read,
      permission_write: permission_write,
      permission_update: permission_update,
      permission_delete: permission_delete,
    };

    localStorage.setItem("permissions", JSON.stringify(permissionArray));
    router.push({ path: "/dashboard" });
  } else {
    alert.value = true;
    $toast.error("ชื่อผู้ใช้ หรือ รหัสผ่าน ผิด !!");
  }
  loading.value = false;
};
</script>

<style>
#cover {
  background-repeat: no-repeat;
  background-image: url("@/assets/images/cover.webp");
  background-size: cover;
  background-position: center;
}
</style>
