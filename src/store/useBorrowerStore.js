import { create } from "zustand";

export const useBorrowerStore = create((set, get) => ({
  borrowers: {
    new: [],
    in_review: [],
    approved: []
  },
  activeBorrower: null,
  setBorrowers: (data) => set({ borrowers: data }),
  setActiveBorrower: (borrower) => set({ activeBorrower: borrower }),
}));
