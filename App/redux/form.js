import { createSlice } from '@reduxjs/toolkit'

const formKeys = {
  name: 'name',
  language: 'language',
}

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    form: {
      name: '',
      language: null,
    },
  },
  reducers: {
    updateForm: (state, action) => {
      const { key, value } = action.payload
      state.form[key] = value
    },
  },
})

export { formKeys }
export const { updateForm } = formSlice.actions
export default formSlice.reducer
