import { create } from "zustand";

export const useRestaurant = create((set) => ({
  restaurants: [],
  setRestaurants: (restaurants) => set({ restaurants }),
  createRestaurant: async (newRestaurant) => {
    if (!newRestaurant.name || !newRestaurant.image || !newRestaurant.price) {
      return { success: false, message: "Please fill in all fields." };
    }
    const res = await fetch("/api/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
    const data = await res.json();
    set((state) => ({ restaurants: [...state.restaurants, data.data] }));
    return { success: true, message: "Restaurant created successfully" };
  },
  fetchRestaurants: async () => {
    const res = await fetch("/api/restaurants");
    const data = await res.json();
    set({ restaurants: data.data });
  },
  deleteRestaurant: async (pid) => {
    const res = await fetch(`/api/restaurants/${pid}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      restaurants: state.restaurants.filter(
        (restaurant) => restaurant._id !== pid
      ),
    }));
    return { success: true, message: data.message };
  },
  updateRestaurant: async (pid, updatedRestaurant) => {
    const res = await fetch(`/api/restaurants/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRestaurant),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      restaurants: state.restaurants.map((restaurant) =>
        restaurant._id === pid ? data.data : restaurant
      ),
    }));

    return { success: true, message: data.message };
  },
}));
