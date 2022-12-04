import { createSlice, PayloadAction, } from '@reduxjs/toolkit';
import type { RootState } from '../store';

const initialState: any = {
  articles: []
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    persistArticles: (state, action: PayloadAction<any>) => {
      if (state.articles.length > 0) {
        return
      }
      state.articles.push(action.payload)
    },
    updateArticles: (state, action: PayloadAction<any>) => {
      if (state.articles.length === 0) {
        state.articles.push(action.payload)
      }

      state.articles = [];
      state.articles.push(action.payload)
    },
    deleteArticles: (state, action: PayloadAction<any>) => {
      state.articles = [];
      state.articles.push(action.payload)
    }

  }
})

export const {
  persistArticles,
  updateArticles,
  deleteArticles
} = articlesSlice.actions;

export const selectArticle = (state: RootState) => state.aticles;
export default articlesSlice.reducer;