import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import {fetchCoupleInfo} from "../redux/coupleInfoSlice";

export function useCoupleInfo() {
    const dispatch = useDispatch<AppDispatch>();
    const { coupleInfo, isFetched, error } = useSelector((state: RootState) => state.coupleInfo);

    const fetchInfo = () => {
        dispatch(fetchCoupleInfo());
    };

    useEffect(() => {
        if (!isFetched) {
            fetchInfo();
        }
    }, [isFetched]);

    return { coupleInfo, isFetched, error, fetchCoupleInfo: fetchInfo };
}