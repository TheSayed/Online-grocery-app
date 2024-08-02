import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  cityName: string | null;
}

const initialState: LocationState = {
  cityName: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCityName: (state, action: PayloadAction<string | null>) => {
      state.cityName = action.payload;
    },
  },
});

export const { setCityName } = locationSlice.actions;
export default locationSlice.reducer;
