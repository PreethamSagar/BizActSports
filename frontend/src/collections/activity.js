import { create } from "zustand";
export const useActivityCollection = create((set) => ({
    activitys: [],
    setActivitys: (activitys) => set({ activitys }),
    getActivitys: async () => {
        const res = await fetch("/api/activity", {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        });
        try {
            if (res.status == 200) {
                const response = await res.json();
                set({ activitys: response.data });
            }
        }
        catch (error) {
            console.log("Cannot Fetch Data at the moment try after sometime");
        }

    }
}))