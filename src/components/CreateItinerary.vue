<template>
  <div>
      <h1>đây là create button</h1>
      <el-popover
      placement="bottom"
      width="1200"
      trigger="click">
      <el-input
        placeholder="Ngày"
        v-model="date">
      </el-input>
    
      <el-input
        placeholder="Thứ"
        v-model="day">
      </el-input>

      <el-select v-model="licensePlate" placeholder="Biển số">
         <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-input
        placeholder="Tên khách"
        v-model="name"
      >
      </el-input>

      <!-- <el-autocomplete
        class="inline-input"
        v-model="name"
        :fetch-suggestions="querySearch"
        placeholder="Tên khách"
        @select="handleSelect"
      ></el-autocomplete> -->

      
      <el-input
        placeholder="Nơi đi"
        v-model="from"
        >
      </el-input>

      <el-input
        placeholder="Nơi đến"
        v-model="to"
        >
      </el-input>

      <el-input
        placeholder="Chuyến"
        v-model="trip"
        >
      </el-input>

      <el-input
        placeholder="Tấn"
        v-model="ton"
        >
      </el-input>

      <el-input
        placeholder="Đơn giá"
        v-model="unitPrice"
        >
      </el-input>

      <el-input
        placeholder="Phí"
        v-model="extraCost"
        >
      </el-input>

      <el-input
        placeholder="Dầu"
        v-model="oil"
        >
      </el-input>

      <el-input
        placeholder="Số Km"
        v-model="kilometer"
        >
      </el-input>

      <el-input
        placeholder="Công an"
        v-model="police"
        >
      </el-input>

      <el-input
        placeholder="Thành tiền"
        v-model="total"
        >
      </el-input>

      <el-input
        placeholder="lương"
        v-model="salary"
        >
      </el-input>

      <el-input
        placeholder="Tài xế"
        v-model="driver"
        >
      </el-input>

      <el-button type="success" @click="createEmployee(date, day, licensePlate, name, from, to , kilometer, trip, ton, unitPrice, extraCost, oil, police, total, salary, driver)"> Add </el-button>
      

      <el-button round slot="reference" type="success">Create Itinerary</el-button
      >
    </el-popover>
  </div>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();
export default {
    name: 'CreateItinerary',
    data() {
        return {
            name: "",
            date: "",
            day: "",
            from: "",
            to: "",
            kilometer: "",
            trip: "",
            ton: "",
            oil: "",
            police: "",
            total: "",
            salary: "",
            driver: "",
            licensePlate: "",
            extraCost: "",
            unitPrice: "",
            itinerary: [],
            search: "",
            options: [
                {
                value: '51C 60596',
                label: 'Xe 51C 60596',
                },
                {
                value: '51D 46295',
                label: 'Xe 51D 46295',
                },
                {
                value: '50H 07677',
                label: 'Xe 50H 07677',
                },
                {
                value: 'xe ngoài',
                label: 'Xe ngoài',
                },
            ],

        }
    },
    methods: {
        createEmployee(date, day, licensePlate, name, from, to , kilometer, trip, ton, unitPrice, extraCost, oil, police, total, salary, driver) {
        if (name != "" && date != "" && licensePlate != "" && from != "" && to != "" && kilometer != "" && trip != ""
                                && ton != "" && unitPrice != "" && extraCost != "" && oil != "" && police != "" && total != "" && salary != "" && driver != "") {
        
        switch(licensePlate){
          case '51C 60596':
            db.collection("51C 60596")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: kilometer, trip: trip
                                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: total, salary: salary, driver: driver})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;

          case '51D 46295':
            db.collection("51D 46295")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: kilometer, trip: trip
                                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: total, salary: salary, driver: driver})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;
          
          case '50H 07677':
            db.collection("50H 07677")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: kilometer, trip: trip
                                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: total, salary: salary, driver: driver})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;

          case 'xe ngoài':
            db.collection("xe ngoai")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: kilometer, trip: trip
                                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: total, salary: salary, driver: driver})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;
        }
       
          this.name = "", this.date = "", this.day = "", this.from = "", this.to = "", this.kilometer = "", this.trip = "", this.ton = "", this.oil = "", 
          this.police = "", this.total = "", this.salary = "", this.driver = "", this.licensePlate = "", this.extraCost = "", this.unitPrice = ""

          
      }
    },
    }
}
</script>

<style>

</style>