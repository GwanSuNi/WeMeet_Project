import DateDiaryItem from "../components/DateDiaryItem";
import DateList from "../components/DateList";

export default function DateDiaryListPage() {
    const listData = Array.from(Array(6)).map((_, index) => ({}));

    return (
        <DateList ListItem={DateDiaryItem} listData={listData}/>
    );
}