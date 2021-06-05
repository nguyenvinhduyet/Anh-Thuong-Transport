<template>
  <div>
      <el-popover
      height="auto"
      placement="bottom"
      width="1200"
      trigger="click">
      
    
      <div class="flex">
        <el-date-picker
          v-model="date"
          type="date"
          format="dd/MM/yyyy"
          placeholder="Chọn ngày">
        </el-date-picker>
        
        <el-select v-model="day" placeholder="Thứ">
          <el-option
            v-for="item in days"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>

        <el-select v-model="licensePlate" placeholder="Biển số">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      


      <el-input
        placeholder="Tên khách"
        v-model="name">
      </el-input>
 
      <div class="flex">
        <el-input
          placeholder="Nơi đi"
          v-model="from">
        </el-input>

        <el-input
          placeholder="Nơi đến"
          v-model="to">
        </el-input>
      </div>
      

      

      <div class="flex">
        <el-input
          placeholder="Km chuyến đi"
          v-model="kilometermfinish">
        </el-input>

        <el-input
          type="number"
          placeholder="Số chuyến"
          v-model="trip">
        </el-input>

        <el-input
          type="number"
          placeholder="Đơn giá"
          v-model="unitPrice">
        </el-input>
      </div>
      
        <el-input
          type="number"
          placeholder="Tấn"
          v-model="ton">
        </el-input>

        

        <el-input
          type="number"
          placeholder="Tiền phí"
          v-model="extraCost">
        </el-input>

      <div class="flex">
        <el-input
          placeholder="Chành"
          v-model="push">
        </el-input>

        <el-input
          placeholder="Bốc xếp"
          v-model="carry">
        </el-input>
      </div>
        
      
      

      <div class="flex">
        <el-input
          placeholder="Tiền dầu"
          type="number"
          v-model="oil">
        </el-input>

        <el-input
          type="number"
          placeholder="Số KM đã đi sau khi đổ dầu (được điền tự động)"
          v-model="kilometer">
        </el-input>
      </div>

      <div class="flex">
        <el-input
          placeholder="Số KM Mới"
          v-model="kmnew">
        </el-input>

        <el-input
          placeholder="Số KM Cũ"
          v-model="kmold">
        </el-input>
      </div>

      <div class="flex">
        <el-input
          placeholder="Chi phí vá xe"
          v-model="patch">
        </el-input>

        <el-input
          placeholder="Chi phí sửa xe"
          v-model="repair">
        </el-input>

        <el-input
          placeholder="Chi phí rửa xe"
          v-model="wash">
        </el-input>

        <el-input
          type="number"
          placeholder="Phí công an"
          v-model="police">
        </el-input>
      </div>

      

      <el-input
        :disabled="true"
        type="number"
        placeholder="Thành tiền (sẽ tự động được tính)"
        v-model="total"
        >
      </el-input>

      <el-input
        placeholder="Nợ/Thu"
        v-model="owe">
      </el-input>

      <el-input
        type="number"
        placeholder="Tiền lương"
        v-model="salary"
        >
      </el-input>

      <el-input
        placeholder="Tài xế"
        v-model="driver"
        type="text">
      </el-input>

      <el-input
        placeholder="Chi tiết"
        v-model="details">
      </el-input>

      <div class="flex">
        <el-input
          placeholder="Tài nghỉ"
          v-model="notwork">
        </el-input>

        <el-input
          placeholder="Tài trực"
          v-model="work">
        </el-input>
      </div>

      <div class="flex">
        <el-input
          placeholder="Chi xe"
          v-model="spendingcar">
        </el-input>

        <el-input
          placeholder="Tiền chi xe"
          v-model="spendingmoneyforcar">
        </el-input>
      </div>

      <div class="flex">
        <el-input 
          placeholder="Chi ngoài"
          v-model="spendingother">
        </el-input>

        <el-input
          placeholder="Tiền chi"
          v-model="spendingmoneyforother">
        </el-input>
      </div>
      
     

      <el-button type="success" icon="el-icon-check" @click="createEmployee(date, day, licensePlate, name, from, to , kilometer, trip, ton, unitPrice, extraCost, oil, police, total, salary, driver, kilometermfinish, 
          push, carry, kmnew, kmold, patch, repair, wash, owe, details, work, notwork, spendingcar, spendingmoneyforcar, spendingother, spendingmoneyforother)"> Done </el-button>
      

      <el-button slot="reference" type="success" icon="el-icon-edit" class="createButton">Create Itinerary</el-button
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
            kilometermfinish: "",
            push: "",
            carry: "",
            kmnew: "", 
            kmold: "", 
            patch: "", repair: "", wash: "", owe: "", details: "", work: "", notwork: "", spendingcar: "", spendingmoneyforcar: "", spendingother: "", spendingmoneyforother: "",
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
            days: [
                {
                value: 'thứ 2',
                label: 'Thứ 2',
                },
                {
                value: 'thứ 3',
                label: 'Thứ 3',
                },
                {
                value: 'thứ 4',
                label: 'Thứ 4',
                },
                {
                value: 'thứ 5',
                label: 'Thứ 5',
                },
                {
                value: 'thứ 6',
                label: 'Thứ 6',
                },
                {
                value: 'thứ 7',
                label: 'Thứ 7',
                },
                {
                value: 'chúa nhật',
                label: 'Chúa nhật',
                },
            ]
        }
    },
    methods: {
        createEmployee(date, day, licensePlate, name, from, to , kilometer, trip, ton, unitPrice, extraCost, oil, police, total, salary, driver, kilometermfinish, 
          push, carry, kmnew, kmold, patch, repair, wash, owe, details, work, notwork, spendingcar, spendingmoneyforcar, spendingother, spendingmoneyforother) {
        // if (name != "" && date != "" && licensePlate != "" && from != "" && to != "" && kilometer != "" && trip != ""
        //                         && ton != "" && unitPrice != "" && extraCost != "" && oil != "" && police != "" && total != "" && salary != "" && driver != "") {
        if (name != "" && licensePlate != ""){
        let totalPrice = trip * unitPrice
        let km = kmnew - kmold
        switch(licensePlate){
          case '51C 60596':
            db.collection("51C 60596")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: km, trip: trip
                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: totalPrice, salary: salary, driver: driver,
                  kilometermfinish: kilometermfinish, push: push, carry: carry, kmnew: kmnew, kmold: kmold, 
                  patch: patch, repair: repair, wash: wash, owe: owe, details: details, work: work, notwork: notwork, 
                  spendingcar: spendingcar, spendingmoneyforcar: spendingmoneyforcar, spendingother: spendingother, spendingmoneyforother: spendingmoneyforother})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;

          case '51D 46295':
            db.collection("51D 46295")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: km, trip: trip
                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: totalPrice, salary: salary, driver: driver,
                  kilometermfinish: kilometermfinish, push: push, carry: carry, kmnew: kmnew, kmold: kmold, 
                  patch: patch, repair: repair, wash: wash, owe: owe, details: details, work: work, notwork: notwork, 
                  spendingcar: spendingcar, spendingmoneyforcar: spendingmoneyforcar, spendingother: spendingother, spendingmoneyforother: spendingmoneyforother})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;
          
          case '50H 07677':
            db.collection("50H 07677")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: km, trip: trip
                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: totalPrice, salary: salary, driver: driver,
                  kilometermfinish: kilometermfinish, push: push, carry: carry, kmnew: kmnew, kmold: kmold, 
                  patch: patch, repair: repair, wash: wash, owe: owe, details: details, work: work, notwork: notwork, 
                  spendingcar: spendingcar, spendingmoneyforcar: spendingmoneyforcar, spendingother: spendingother, spendingmoneyforother: spendingmoneyforother})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;

          case 'xe ngoài':
            db.collection("xe ngoai")
            .add({ date: date, name: name, day: day, licensePlate: licensePlate, from: from, to: to, kilometer: km, trip: trip
                  ,ton: ton, unitPrice: unitPrice, extraCost: extraCost, oil: oil, police: police, total: totalPrice, salary: salary, driver: driver,
                  kilometermfinish: kilometermfinish, push: push, carry: carry, kmnew: kmnew, kmold: kmold, 
                  patch: patch, repair: repair, wash: wash, owe: owe, details: details, work: work, notwork: notwork, 
                  spendingcar: spendingcar, spendingmoneyforcar: spendingmoneyforcar, spendingother: spendingother, spendingmoneyforother: spendingmoneyforother})
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
            break;
        }
       
          this.name = "", this.date = "", this.day = "", this.from = "", this.to = "", this.kilometer = "", this.trip = "", this.ton = "", this.oil = "", 
          this.police = "", this.total = "", this.salary = "", this.driver = "", this.licensePlate = "", this.extraCost = "", this.unitPrice = "", this.kilometermfinish = "",
          this.push = "", this.carry = "", this.kmnew = "", this.kmold = "", this.patch = "", this.repair = "", this.wash = "", this.owe = "", this.details = "", this.work = "",
          this.notwork = "", this.spendingcar = "", this.spendingmoneyforcar = "", this.spendingother = "", this.spendingmoneyforother = ""

          
      }
    },
    }
}
</script>

<style>
.flex{
  display: flex;
}
</style>