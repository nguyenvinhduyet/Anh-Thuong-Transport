<template>
  <div>
      <div>
      <el-table v-model="search" :span-method="colspanMethod" height="980"
      :data="itinerary.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;">

      <el-table-column fixed label="Ngày" prop="date" width="100"> </el-table-column>
      <el-table-column fixed label="Thứ" prop="day"> </el-table-column>
      <el-table-column fixed label="Số xe" prop="licensePlate" width="100"> </el-table-column>
      <el-table-column label="Khách hàng" prop="name" width="130"> </el-table-column>
      <el-table-column label="Nơi đi" prop="from"> </el-table-column>
      <el-table-column label="Nơi đến" prop="to"> </el-table-column>
      <el-table-column label="km" prop="kilometermfinish"> </el-table-column>
      <el-table-column label="Chuyến" prop="trip"> </el-table-column>
      <el-table-column label="Tấn" prop="ton"> </el-table-column>
      <el-table-column label="Đơn giá" prop="unitPrice" width="100"> </el-table-column>
      <el-table-column label="Phí" prop="extraCost"> </el-table-column>
      <el-table-column label="Chành" prop="push"> </el-table-column>
      <el-table-column label="Bốc xếp" prop="carry"> </el-table-column>

      <el-table-column label="Tiền dầu" prop="oil"> </el-table-column>
      <el-table-column label="Số km" prop="kilometer"> </el-table-column>
      <el-table-column label="Mới" prop="kmnew"> </el-table-column>
      <el-table-column label="Cũ" prop="kmold"> </el-table-column>
      <el-table-column label="Vá" prop="patch"> </el-table-column>
      <el-table-column label="Sửa" prop="repair"> </el-table-column>
      <el-table-column label="Rửa" prop="wash"> </el-table-column>

      <el-table-column label="Công an" prop="police"> </el-table-column>
      <el-table-column label="Thành tiền" prop="total" width="110"> </el-table-column>
      <el-table-column label="Nơ/thu" prop="owe"> </el-table-column>
      <el-table-column label="Lương" prop="salary"> </el-table-column>
      <el-table-column label="Tài xế" prop="driver"> </el-table-column>
      <el-table-column label="Chi tiết" prop="details"> </el-table-column>
      <el-table-column label="Nghỉ" prop="work"> </el-table-column>
      <el-table-column label="Trực" prop="notwork"> </el-table-column>
      <el-table-column label="Chi xe" prop="spendingcar"> </el-table-column>
      <el-table-column label="Tiền chi xe" prop="spendingmoneyforcar" width="100"> </el-table-column>
      <el-table-column label="Chi ngoài" prop="spendingother" width="100"> </el-table-column>
      <el-table-column label="Tiền chi" prop="spendingmoneyforother"> </el-table-column>




      <el-table-column align="right">
        <template slot="header" :slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <el-popover
            placement="bottom"
            width="1200"
            trigger="click">
          
            <div class="flex">
              <el-date-picker
                v-model="scope.row.date"
                type="date"
                format="dd/MM/yyyy"
                placeholder="Chọn ngày">
              </el-date-picker>

              <el-input
                placeholder="Thứ"
                v-model="scope.row.day">
              </el-input>

              <el-select v-model="scope.row.licensePlate" placeholder="Biển số">
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
              v-model="scope.row.name"
            ></el-input>

          <div class="flex">
            <el-input
              placeholder="Nơi đi"
              v-model="scope.row.from"
            ></el-input>

            <el-input
              placeholder="Nơi đến"
              v-model="scope.row.to"
            ></el-input>
          </div>
            
          <div class="flex">
            <el-input
              placeholder="Km chuyến đi"
              v-model="scope.row.kilometermfinish"
            ></el-input>

            <el-input
              placeholder="Số chuyến"
              v-model="scope.row.trip"
            ></el-input>
          </div>
            

            <el-input
              placeholder="Tấn"
              v-model="scope.row.ton"
            ></el-input>

            <el-input
              placeholder="Đơn giá"
              v-model="scope.row.unitPrice"
            ></el-input>

            <el-input
              placeholder="Tiền phí"
              v-model="scope.row.extraCost"
            ></el-input>

          <div class="flex">
            <el-input
              placeholder="Chành"
              v-model="scope.row.push"
            ></el-input>

            <el-input
              placeholder="Bốc xếp"
              v-model="scope.row.carry"
            ></el-input>
          </div>

          <div class="flex">
            <el-input
              placeholder="Tiền dầu"
              v-model="scope.row.oil"
            ></el-input>

            <el-input
              :disabled="true"
              placeholder="Số KM đã đi sau khi đổ dầu (được điền tự động)"
              v-model="scope.row.kilometer"
            ></el-input>
          </div>
          
          <div class="flex">
            <el-input
              placeholder="KM mới"
              v-model="scope.row.kmnew"
            ></el-input>

            <el-input
              placeholder="KM cũ"
              v-model="scope.row.kmold"
            ></el-input>
          </div>

          <div class="flex">
            <el-input
              placeholder="Tiền vá xe"
              v-model="scope.row.patch"
            ></el-input>

            <el-input
              placeholder="Tiền sửa xe"
              v-model="scope.row.repair"
            ></el-input>

            <el-input
              placeholder="Tiền rửa xe"
              v-model="scope.row.wash"
            ></el-input>

            <el-input
              placeholder="Phí công an"
              v-model="scope.row.police"
            ></el-input>
          </div>
            

            <el-input
              :disabled="true"
              placeholder="Thành tiền"
              v-model="scope.row.total"
            ></el-input>

            <el-input
              placeholder="Nợ/Thu"
              v-model="scope.row.owe"
            ></el-input>

            <el-input
              placeholder="Lương"
              v-model="scope.row.salary"
            ></el-input>

            <el-input
              placeholder="Tài xế"
              v-model="scope.row.driver"
            ></el-input>

            <el-input
              placeholder="Chi tiết"
              v-model="scope.row.details"
            ></el-input>

          <div class="flex">
            <el-input
              placeholder="Tài nghỉ"
              v-model="scope.row.notwork"
            ></el-input>

            <el-input
              placeholder="Tài trực"
              v-model="scope.row.work"
            ></el-input>
          </div>
            
          <div class="flex">
            <el-input
              placeholder="Chi xe"
              v-model="scope.row.spendingcar"
            ></el-input>

            <el-input
              placeholder="Tiền chi xe"
              v-model="scope.row.spendingmoneyforcar"
            ></el-input>
          </div>
            

          <div class="flex">
            <el-input
              placeholder="Chi ngoài"
              v-model="scope.row.spendingother"
            ></el-input>

            <el-input
              placeholder="Tiền chi ngoài"
              v-model="scope.row.spendingmoneyforother"
            ></el-input>
          </div>
            <el-button type="primary" icon="el-icon-check" @click="updateEmployee(scope.row.id, scope.row.name, scope.row.date, scope.row.day, scope.row.licensePlate, scope.row.from, scope.row.to , scope.row.kilometer, scope.row.trip, scope.row.ton, scope.row.unitPrice, scope.row.extraCost, scope.row.oil, scope.row.police, scope.row.total, scope.row.salary, scope.row.driver, scope.row.kilometermfinish,
            scope.row.push, scope.row.carry, scope.row.kmnew, scope.row.kmold, scope.row.patch, scope.row.repair, scope.row.wash, scope.row.owe, scope.row.details, scope.row.notwork, scope.row.work, scope.row.spendingcar, scope.row.spendingmoneyforcar, scope.row.spendingother, scope.row.spendingmoneyforother)"> 
              Done
            </el-button>

            <el-button type="primary" size="default" slot="reference" class="edit" icon="el-icon-edit-outline"></el-button>
          </el-popover>
          <el-button size="default" type="danger" @click="deleteEmployee(scope.row.id)" class="delete" icon="el-icon-delete">
          </el-button>

       
        </template>
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import firebase from "../firebaseInit";
const db = firebase.firestore();



export default {
    data() {
        return{
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
            
        }
    },
    methods: {
    formatDate(date){
      let dateData = date
      let seconds = dateData.seconds
      const milisecond = seconds * 1000
      const dateObject = new Date(milisecond)
      const humandayFormat = dateObject.toLocaleString("en-US", {day: "2-digit"} )
      const humanmonthFormat = dateObject.toLocaleString("en-US", {month: "2-digit"} )
      const humanyearFormat = dateObject.toLocaleString("en-US", {year: "numeric"} )
      const humanDateFormat = humandayFormat + '-' + humanmonthFormat + '-' + humanyearFormat
      return humanDateFormat
    },
    formatTimeStamp(date){
      let myDate = date;
      myDate = myDate.split("-");
      var newDate = new Date( myDate[2], myDate[1] - 1, myDate[0]);
      console.log("date dinh dang TimeStamp: ", newDate)
      return newDate
    },
    readEmployees() {
      this.itinerary = [];
      db.collection("51C 60596")
        .get()
        .then((querySnapshot) => {
          
          querySnapshot.forEach((doc) => {
            this.itinerary.push({
              id: doc.id,
              date: this.formatDate(doc.data().date),
              day: doc.data().day,
              from: doc.data().from,
              to: doc.data().to,
              kilometer: doc.data().kilometer,
              trip: doc.data().trip,
              ton: doc.data().ton,
              oil: doc.data().oil,
              police: doc.data().police,
              total: doc.data().total, 
              salary: doc.data().salary,
              driver: doc.data().driver,
              licensePlate: doc.data().licensePlate,
              extraCost: doc.data().extraCost,
              unitPrice: doc.data().unitPrice,
              name: doc.data().name,
              kilometermfinish: doc.data().kilometermfinish,
              push: doc.data().push,
              carry: doc.data().carry,
              kmnew: doc.data().kmnew, 
              kmold: doc.data().kmold, 
              patch: doc.data().patch, 
              repair: doc.data().repair, 
              wash: doc.data().wash, 
              owe: doc.data().owe, 
              details: doc.data().details, 
              work: doc.data().work, 
              notwork: doc.data().notwork, 
              spendingcar: doc.data().spendingcar, 
              spendingmoneyforcar: doc.data().spendingmoneyforcar, 
              spendingother: doc.data().spendingother, 
              spendingmoneyforother: doc.data().spendingmoneyforother,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      db.collection("51D 46295")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.itinerary.push({
              id: doc.id,
              date: this.formatDate(doc.data().date),
              day: doc.data().day,
              from: doc.data().from,
              to: doc.data().to,
              kilometer: doc.data().kilometer,
              trip: doc.data().trip,
              ton: doc.data().ton,
              oil: doc.data().oil,
              police: doc.data().police,
              total: doc.data().total, 
              salary: doc.data().salary,
              driver: doc.data().driver,
              licensePlate: doc.data().licensePlate,
              extraCost: doc.data().extraCost,
              unitPrice: doc.data().unitPrice,
              name: doc.data().name,
              kilometermfinish: doc.data().kilometermfinish,
              push: doc.data().push,
              carry: doc.data().carry,
              kmnew: doc.data().kmnew, 
              kmold: doc.data().kmold, 
              patch: doc.data().patch, 
              repair: doc.data().repair, 
              wash: doc.data().wash, 
              owe: doc.data().owe, 
              details: doc.data().details, 
              work: doc.data().work, 
              notwork: doc.data().notwork, 
              spendingcar: doc.data().spendingcar, 
              spendingmoneyforcar: doc.data().spendingmoneyforcar, 
              spendingother: doc.data().spendingother, 
              spendingmoneyforother: doc.data().spendingmoneyforother,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });  
      
      db.collection("50H 07677")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.itinerary.push({
              id: doc.id,
              date: this.formatDate(doc.data().date),
              day: doc.data().day,
              from: doc.data().from,
              to: doc.data().to,
              kilometer: doc.data().kilometer,
              trip: doc.data().trip,
              ton: doc.data().ton,
              oil: doc.data().oil,
              police: doc.data().police,
              total: doc.data().total, 
              salary: doc.data().salary,
              driver: doc.data().driver,
              licensePlate: doc.data().licensePlate,
              extraCost: doc.data().extraCost,
              unitPrice: doc.data().unitPrice,
              name: doc.data().name,
              kilometermfinish: doc.data().kilometermfinish,
              push: doc.data().push,
              carry: doc.data().carry,
              kmnew: doc.data().kmnew, 
              kmold: doc.data().kmold, 
              patch: doc.data().patch, 
              repair: doc.data().repair, 
              wash: doc.data().wash, 
              owe: doc.data().owe, 
              details: doc.data().details, 
              work: doc.data().work, 
              notwork: doc.data().notwork, 
              spendingcar: doc.data().spendingcar, 
              spendingmoneyforcar: doc.data().spendingmoneyforcar, 
              spendingother: doc.data().spendingother, 
              spendingmoneyforother: doc.data().spendingmoneyforother,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      

      db.collection("xe ngoai")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.itinerary.push({
              id: doc.id,
              date: this.formatDate(doc.data().date),
              day: doc.data().day,
              from: doc.data().from,
              to: doc.data().to,
              kilometer: doc.data().kilometer,
              trip: doc.data().trip,
              ton: doc.data().ton,
              oil: doc.data().oil,
              police: doc.data().police,
              total: doc.data().total, 
              salary: doc.data().salary,
              driver: doc.data().driver,
              licensePlate: doc.data().licensePlate,
              extraCost: doc.data().extraCost,
              unitPrice: doc.data().unitPrice,
              name: doc.data().name,
              kilometermfinish: doc.data().kilometermfinish,
              push: doc.data().push,
              carry: doc.data().carry,
              kmnew: doc.data().kmnew, 
              kmold: doc.data().kmold, 
              patch: doc.data().patch, 
              repair: doc.data().repair, 
              wash: doc.data().wash, 
              owe: doc.data().owe, 
              details: doc.data().details, 
              work: doc.data().work, 
              notwork: doc.data().notwork, 
              spendingcar: doc.data().spendingcar, 
              spendingmoneyforcar: doc.data().spendingmoneyforcar, 
              spendingother: doc.data().spendingother, 
              spendingmoneyforother: doc.data().spendingmoneyforother,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });    
    },


    deleteEmployee(id) {   
      db.collection("51C 60596")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      
      db.collection("50H 07677")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

      db.collection("51D 46295")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });

      db.collection("xe ngoai")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
      this.readEmployees();
    },
    updateEmployee(id, name, date, day, licensePlate, from, to , kilometer, trip, ton, unitPrice, extraCost, oil, police, total, salary, driver, kilometermfinish,
    push, carry, kmnew, kmold, patch, repair, wash, owe, details, notwork, work, spendingcar, spendingmoneyforcar, spendingother, spendingmoneyforother) {
      let totalPrice = trip * unitPrice
      let km = kmnew - kmold
      switch(licensePlate){
        case "51D 46295":
          db.collection("51D 46295")
          .doc(id)
          .update({
            name: name,
            date: date,
            day: day,
            licensePlate: licensePlate, 
            from: from, 
            to: to, 
            kilometer: km, 
            trip: trip,
            ton: ton, 
            unitPrice: unitPrice, 
            extraCost: extraCost, 
            oil: oil, 
            police: police, 
            total: totalPrice, 
            salary: salary, 
            driver: driver,
            kilometermfinish: kilometermfinish,
            push: push, 
            carry: carry, 
            kmnew: kmnew, 
            kmold: kmold, 
            patch: patch, 
            repair: repair, 
            wash: wash, 
            owe: owe, 
            details: details, 
            notwork: notwork, 
            work: work, 
            spendingcar: spendingcar, 
            spendingmoneyforcar: spendingmoneyforcar, 
            spendingother: spendingother, 
            spendingmoneyforother: spendingmoneyforother
          })
          .then(() => {
            console.log("Document successfully updated!");
            this.readEmployees();
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
        break;
        
        case "51C 60596":
          db.collection("51C 60596")
          .doc(id)
          .update({
            name: name,
            date: date,
            day: day,
            licensePlate: licensePlate, 
            from: from, 
            to: to, 
            kilometer: km, 
            trip: trip,
            ton: ton, 
            unitPrice: unitPrice, 
            extraCost: extraCost, 
            oil: oil, 
            police: police, 
            total: totalPrice, 
            salary: salary, 
            driver: driver,
            kilometermfinish: kilometermfinish,
            push: push, 
            carry: carry, 
            kmnew: kmnew, 
            kmold: kmold, 
            patch: patch, 
            repair: repair, 
            wash: wash, 
            owe: owe, 
            details: details, 
            notwork: notwork, 
            work: work, 
            spendingcar: spendingcar, 
            spendingmoneyforcar: spendingmoneyforcar, 
            spendingother: spendingother, 
            spendingmoneyforother: spendingmoneyforother
          })
          .then(() => {
            console.log("Document successfully updated!");
            this.readEmployees();
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
        break;

        case "50H 07677":
          db.collection("50H 07677")
          .doc(id)
          .update({
            name: name,
            date: date,
            day: day,
            licensePlate: licensePlate, 
            from: from, 
            to: to, 
            kilometer: km, 
            trip: trip,
            ton: ton, 
            unitPrice: unitPrice, 
            extraCost: extraCost, 
            oil: oil, 
            police: police, 
            total: totalPrice, 
            salary: salary, 
            driver: driver,
            kilometermfinish: kilometermfinish,
            push: push, 
            carry: carry, 
            kmnew: kmnew, 
            kmold: kmold, 
            patch: patch, 
            repair: repair, 
            wash: wash, 
            owe: owe, 
            details: details, 
            notwork: notwork, 
            work: work, 
            spendingcar: spendingcar, 
            spendingmoneyforcar: spendingmoneyforcar, 
            spendingother: spendingother, 
            spendingmoneyforother: spendingmoneyforother
          })
          .then(() => {
            console.log("Document successfully updated!");
            this.readEmployees();
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
        break;

        case "xe ngoài":
          db.collection("xe ngoai")
          .doc(id)
          .update({
            name: name,
            date: date,
            day: day,
            licensePlate: licensePlate, 
            from: from, 
            to: to, 
            kilometer: km, 
            trip: trip,
            ton: ton, 
            unitPrice: unitPrice, 
            extraCost: extraCost, 
            oil: oil, 
            police: police, 
            total: totalPrice, 
            salary: salary, 
            driver: driver,
            kilometermfinish: kilometermfinish,
            push: push, 
            carry: carry, 
            kmnew: kmnew, 
            kmold: kmold, 
            patch: patch, 
            repair: repair, 
            wash: wash, 
            owe: owe, 
            details: details, 
            notwork: notwork, 
            work: work, 
            spendingcar: spendingcar, 
            spendingmoneyforcar: spendingmoneyforcar, 
            spendingother: spendingother, 
            spendingmoneyforother: spendingmoneyforother
          })
          .then(() => {
            console.log("Document successfully updated!");
            this.readEmployees();
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
        break;
      } 
    }
  },

  mounted() {
    this.readEmployees();
  },
}
</script>

<style>

</style>