<template>
  <div class="pa-2">
    <v-row>
      <v-col cols="3">
        <v-card variant="outlined" style="border: thin solid #ddd">
          <v-card-title class="d-flex justify-space-between">
            ข้อมูลแปลง
            <v-btn color="primary" style="min-width: 36px; padding: 0"><span style="font-size: 24px">+</span></v-btn>
          </v-card-title>
          <v-list :items="items" item-props lines="three">
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-card variant="outlined" style="border: thin solid #ddd" height="350px"> Map </v-card>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="6">
                <v-card variant="outlined" style="border: thin solid #ddd">
                  <v-card-title class="text-center"> ขนาดที่ดินทั้งหมด </v-card-title>
                  <v-card-text class="text-center">
                    <v-img
                      src="https://ricetech.ricethailand.go.th/images/svg/icon_menu_field.svg"
                      height="100"
                    ></v-img>
                    <div class="mt-5">3 ไร่ 2 งาน 11 ตร.วา</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card variant="outlined" style="border: thin solid #ddd">
                  <v-card-title class="text-center"> ระดับน้ำใต้ดิน </v-card-title>
                  <v-card-text class="text-center">
                    <v-img
                      src="https://ricetech.ricethailand.go.th/images/svg/icon_menu_moisture.svg"
                      height="100"
                    ></v-img>
                    <div class="mt-5">20 มม.</div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card variant="outlined" style="border: thin solid #ddd">
                  <v-card-title class="text-center" style="font-size: 16px"> ปลูกข้าว </v-card-title>
                  <v-card-text class="text-center">
                    <v-img src="https://cdn-icons-png.flaticon.com/512/898/898133.png" height="50"></v-img>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card variant="outlined" style="border: thin solid #ddd">
                  <v-card-title class="text-center" style="font-size: 16px"> ดินและปุ๋ย </v-card-title>
                  <v-card-text class="text-center">
                    <v-img src="https://cdn-icons-png.flaticon.com/512/1345/1345343.png" height="50"></v-img>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="3">
                <v-card variant="outlined" style="border: thin solid #ddd">
                  <v-card-title class="text-center" style="font-size: 16px"> เก็บเกี่ยว </v-card-title>
                  <v-card-text class="text-center">
                    <v-img src="https://cdn-icons-png.flaticon.com/512/3105/3105807.png" height="50"></v-img>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card variant="outlined" style="border: thin solid #ddd">
                  <v-card-title class="text-center" style="font-size: 16px"> ค่าใช้จ่าย </v-card-title>
                  <v-card-text class="text-center">
                    <v-img src="https://cdn-icons-png.flaticon.com/512/4850/4850385.png" height="50"></v-img>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card variant="outlined" style="border: thin solid #ddd">
              <v-card-title class="d-flex justify-space-between">
                ปลูกข้าว
                <v-btn color="primary" style="min-width: 36px; padding: 0">
                  <span style="font-size: 24px">+</span>
                </v-btn>
              </v-card-title>
              <v-data-table :headers="headers" :items="desserts" item-value="name" class="elevation-1"></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const items = ref([
  {
    prependAvatar: "https://i.stack.imgur.com/pSDIa.png",
    title: "#LD001",
    subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://i.stack.imgur.com/pSDIa.png",
    title: "#LD002",
    subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
  },
  { type: "divider", inset: true },
  {
    prependAvatar: "https://i.stack.imgur.com/pSDIa.png",
    title: "#LD003",
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
]);

const headers = ref([
  {
    title: "Dessert (100g serving)",
    align: "start",
    sortable: false,
    key: "name",
  },
  { title: "Calories", align: "end", key: "calories" },
  { title: "Fat (g)", align: "end", key: "fat" },
  { title: "Carbs (g)", align: "end", key: "carbs" },
  { title: "Protein (g)", align: "end", key: "protein" },
  { title: "Iron (%)", align: "end", key: "iron" },
]);

const desserts = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: "1",
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: "0",
  },
]);
</script>

<style></style>
