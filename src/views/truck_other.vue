<template>
  <div>
    <CreateItinerary></CreateItinerary>
    <ItineraryOtherList />
  </div>
</template>

<script>
import CreateItinerary from "../components/CreateItinerary.vue";
import ItineraryOtherList from "../components/ItineraryOtherList.vue";
export default {
  components: {
    CreateItinerary,
    ItineraryOtherList,
  },
};
</script>

<style></style>
