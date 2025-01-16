import { create } from "zustand";
export const useActivityCollection = create((set) => ({
    activitys: [],
    setActivitys: (activitys) => set({ activitys }),
    getActivitys: async () => {
        console.log("Entered Get Activitys")
        const res = await fetch("/api/activity", {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        });
        console.log("response in activityjs", res)
        try {
            if (res.status == 200) {
                const response = await res.json();
                console.log("data in activityjs", response.data)
                set({ activitys: response.data });
                console.log("Activities in Activityjs", activitys)
            }
        }
        catch (error) {
            console.log("Cannot Fetch Data at the moment try after sometime");
        }

    }
}))