<template>
  <div class="itinerary">
    <CreateItinerary/>
    <ItineraryList/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CreateItinerary from '@/components/CreateItinerary.vue';
import ItineraryList from '@/components/ItineraryList.vue';
// import firebase from "../firebaseInit";
// const db = firebase.firestore();
export default {
  name: "Itinerary",
  components: {
    CreateItinerary,
    ItineraryList
  // data() {
  //   return {
      

  //     options: [
  //       {
  //         value: '51C 60596',
  //         label: 'Xe 51C 60596',
  //       },
  //       {
  //         value: '51D 46295',
  //         label: 'Xe 51D 46295',
  //       },
  //       {
  //         value: '50H 07677',
  //         label: 'Xe 50H 07677',
  //       },
  //       {
  //         value: 'xe ngoài',
  //         label: 'Xe ngoài',
  //       },

  //     ]
  //   };
  // },
  
  // methods: {
  //   readEmployees() {
  //     this.itinerary = [];
  //     db.collection("51C 60596")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           this.itinerary.push({
  //             id: doc.id,
  //             date: doc.data().date,
  //             day: doc.data().day,
  //             from: doc.data().from,
  //             to: doc.data().to,
  //             kilometer: doc.data().kilometer,
  //             trip: doc.data().trip,
  //             ton: doc.data().ton,
  //             oil: doc.data().oil,
  //             police: doc.data().police,
  //             total: doc.data().total, 
  //             salary: doc.data().salary,
  //             driver: doc.data().driver,
  //             licensePlate: doc.data().licensePlate,
  //             extraCost: doc.data().extraCost,
  //             unitPrice: doc.data().unitPrice,
  //             name: doc.data().name
  //           });
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("Error getting documents: ", error);
  //       });

  //     db.collection("51D 46295")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           this.itinerary.push({
  //             id: doc.id,
  //             date: doc.data().date,
  //             day: doc.data().day,
  //             from: doc.data().from,
  //             to: doc.data().to,
  //             kilometer: doc.data().kilometer,
  //             trip: doc.data().trip,
  //             ton: doc.data().ton,
  //             oil: doc.data().oil,
  //             police: doc.data().police,
  //             total: doc.data().total, 
  //             salary: doc.data().salary,
  //             driver: doc.data().driver,
  //             licensePlate: doc.data().licensePlate,
  //             extraCost: doc.data().extraCost,
  //             unitPrice: doc.data().unitPrice,
  //             name: doc.data().name
  //           });
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("Error getting documents: ", error);
  //       });  
      
  //     db.collection("50H 07677")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           this.itinerary.push({
  //             id: doc.id,
  //             date: doc.data().date,
  //             day: doc.data().day,
  //             from: doc.data().from,
  //             to: doc.data().to,
  //             kilometer: doc.data().kilometer,
  //             trip: doc.data().trip,
  //             ton: doc.data().ton,
  //             oil: doc.data().oil,
  //             police: doc.data().police,
  //             total: doc.data().total, 
  //             salary: doc.data().salary,
  //             driver: doc.data().driver,
  //             licensePlate: doc.data().licensePlate,
  //             extraCost: doc.data().extraCost,
  //             unitPrice: doc.data().unitPrice,
  //             name: doc.data().name
  //           });
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("Error getting documents: ", error);
  //       });

  //     db.collection("xe ngoai")
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           this.itinerary.push({
  //             id: doc.id,
  //             date: doc.data().date,
  //             day: doc.data().day,
  //             from: doc.data().from,
  //             to: doc.data().to,
  //             kilometer: doc.data().kilometer,
  //             trip: doc.data().trip,
  //             ton: doc.data().ton,
  //             oil: doc.data().oil,
  //             police: doc.data().police,
  //             total: doc.data().total, 
  //             salary: doc.data().salary,
  //             driver: doc.data().driver,
  //             licensePlate: doc.data().licensePlate,
  //             extraCost: doc.data().extraCost,
  //             unitPrice: doc.data().unitPrice,
  //             name: doc.data().name
  //           });
  //           console.log(doc.id, " => ", doc.data());
  //         });
  //       })
  //       .catch((error) => {
  //         console.log("Error getting documents: ", error);
  //       });    
        
  //   }
  // },


  // mounted() {
  //   this.readEmployees();
  //   // this.links = this.loadAll();
  // },
  }
};
</script>
