import { defineStore } from "pinia";
import { ref } from "vue";
import initialFarms from "@/data/farms";

export const useFarmStore = defineStore("farm", () => {
  const farms = ref([...initialFarms]);

  const getFarmById = (id) => {
    return farms.value.find(
      (farm) => farm.id === Number(id)
    );
  };

  const addFarm = (farm) => {
    const newFarm = {
      id: Date.now(),
      ...farm,
    };

    farms.value.push(newFarm);

    return newFarm;
  };

  const updateFarm = (id, updatedFarm) => {
    const index = farms.value.findIndex(
      (farm) => farm.id === Number(id)
    );

    if (index === -1) {
      return false;
    }

    farms.value[index] = {
      ...farms.value[index],
      ...updatedFarm,
    };

    return true;
  };

  const deleteFarm = (id) => {
    farms.value = farms.value.filter(
      (farm) => farm.id !== Number(id)
    );
  };

  return {
    farms,
    getFarmById,
    addFarm,
    updateFarm,
    deleteFarm,
  };
});