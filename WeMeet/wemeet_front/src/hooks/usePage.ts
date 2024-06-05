import { useSelector } from "react-redux";

// redux에서 page값을 조회하는 커스텀 hook
export function usePage() {
    return useSelector((state: any) => state.bottomNav.value);
}