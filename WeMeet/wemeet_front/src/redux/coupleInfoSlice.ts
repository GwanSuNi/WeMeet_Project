import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "./store";
import secInstance from "../utils/secInstance";

export interface CoupleInfo {
    user1Email?: string;
    user2Email?: string;
    user1Name?: string;
    user2Name?: string;
    user1Birth?: string;
    user2Birth?: string;
    user1BloodType?: string;
    user2BloodType?: string;
    coupleDate?: Date;
}

interface CoupleInfoState {
    coupleInfo: CoupleInfo;
    isFetched: boolean;
    error: string | null;
}

const initialState: CoupleInfoState = {
    coupleInfo: {
        user1Email: '',
        user1Name: '',
        user1Birth: '',
        user1BloodType: '',
        user2Email: '',
        user2Name: '',
        user2Birth: '',
        user2BloodType: '',
        coupleDate: undefined,
    },
    isFetched: false,
    error: null,
};

// Thunk에서 Redux 상태를 활용해 로그인한 사용자의 email 가져오기
export const fetchCoupleInfo = createAsyncThunk(
    'coupleInfo/fetchCoupleInfo',
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as RootState; // 전체 상태 접근
        const userEmail = state.username.username; // Redux 상태에서 이메일 가져오기

        try {
            const response = await secInstance.get('/api/couple', {
                headers: { 'Content-Type': 'application/json' },
                params: { userEmail },
            });
            return response.data;
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                return rejectWithValue('No couple information found');
            }
            return rejectWithValue('Failed to fetch couple information');
        }
    }
);

const coupleInfoSlice = createSlice({
    name: 'coupleInfo',
    initialState,
    reducers: {
        resetCoupleInfo: (state) => {
            state.coupleInfo = initialState.coupleInfo;
            state.isFetched = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoupleInfo.pending, (state) => {
                state.isFetched = false;
                state.error = null;
            })
            .addCase(fetchCoupleInfo.fulfilled, (state, action: PayloadAction<CoupleInfo>) => {
                state.coupleInfo = action.payload;
                state.isFetched = true;
            })
            .addCase(fetchCoupleInfo.rejected, (state, action) => {
                state.isFetched = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetCoupleInfo } = coupleInfoSlice.actions;
export default coupleInfoSlice.reducer;