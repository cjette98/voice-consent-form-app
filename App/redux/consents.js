import { createSlice } from '@reduxjs/toolkit'

export const consentsSlice = createSlice({
  name: 'consents',
  initialState: {
    consents: {
      data: [],
    },
  },
  reducers: {
    addConsent: (state, action) => {
      state.consents.data.push(action.payload)
    },
  },
})

export const { addConsent } = consentsSlice.actions
export default consentsSlice.reducer
