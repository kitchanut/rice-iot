<template>
  <div class="pa-3">
    <v-card variant="outlined">
      <div class="d-flex justify-space-between align-center">
        <v-col cols="3">
          <SettingDialogUser actionType="add" @success="getData()" />
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="search"
            append-inner-icon="mdi-magnify"
            label="ค้นหา"
            single-line
            hide-details
            density="comfortable"
          ></v-text-field>
        </v-col>
      </div>
      <v-data-table :headers="headers" :items="data" :search="search" density="compact">
        <template v-slot:[`item.status`]="{ item }">
          <v-chip
            :color="item.raw.status == 'เปิดใช้งาน' ? 'success' : 'warning'"
            size="small"
            label
            text-color="white"
          >
            {{ item.raw.status }}
          </v-chip>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <SettingDialogUser actionType="edit" :id="item.raw.id" @success="getData()" />
          <v-btn
            class="ml-1"
            color="red"
            icon="mdi-delete"
            density="comfortable"
            size="small"
            variant="tonal"
            @click="
              dialogDelete = true;
              id = item.raw.id;
            "
          >
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup>
const loading = ref(false);
const search = ref("");
const headers = ref([
  {
    align: "center",
    key: "no",
    title: "ลำดับ",
    width: "8%",
  },
  { key: "name", title: "ชื่อผู้ใช้งาน", width: "15%" },
  { key: "email", title: "อีเมล์" },
  { key: "created_at", title: "สร้างเมื่อ", width: "15%" },
  { key: "updated_at", title: "แก้ไขเมื่อ", width: "15%" },
  { key: "status", title: "สถานะ", width: "10%" },
  { key: "actions", title: "จัดการ", width: "10%" },
]);
const data = ref([]);

const getData = async () => {
  loading.value = true;

  const response = await useApiUsers().index();
  console.log(response.data);
  data.value = response.data;
  data.value.map((item, index) => {
    item.no = index + 1;
  });
  loading.value = false;
};
getData();
</script>

<style></style>
