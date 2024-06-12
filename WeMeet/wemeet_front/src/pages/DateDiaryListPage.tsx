import DateDiaryItem, {PostSummaryDto} from "../components/DateDiaryItem";
import DateList from "../components/DateList";

export default function DateDiaryListPage() {
    const listData: PostSummaryDto[] = [
        {
            imgPath: 'https://example.com/image1.jpg',
            title: '윤우야',
            stateTime: '1시간전',
            positionInfo: '경기도 의정부시 서부로 454'
        },
        {
            imgPath: 'https://example.com/image2.jpg',
            title: '해냈어',
            stateTime: '2시간전',
            positionInfo: '서울특별시 강남구 테헤란로'
        },
        {
            imgPath: 'https://example.com/image3.jpg',
            title: '하이루',
            stateTime: '3시간전',
            positionInfo: '인천광역시 연수구 송도동'
        },
    ];


    // 신경쓰지않고 일단 데이터먼저 넣기
    return (
        <DateList ListItem={DateDiaryItem} listData={listData}/>
    );
}