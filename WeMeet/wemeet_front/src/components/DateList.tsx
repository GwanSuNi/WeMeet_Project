import React from 'react';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {PostSummaryDto} from "./DateDiaryItem";

interface ListItemProps {
    ListItem: React.ElementType;
    listData: PostSummaryDto[];
}

export default function DateList({ListItem, listData}: ListItemProps) {
    return (
        <Box sx={{height: '100vh', overflow: 'auto'}}>
            <Container>
                <Stack
                    direction='column'
                    justifyContent='center'
                    alignItems='flex-start'
                    spacing={2}
                    useFlexGap
                    width='100%'
                    pt={2}
                >
                    // TODO: key 값을 고유하게 식별될 수 있는 컬럼값으로 변경
                    {listData.map((itemData, i) => (
                        <ListItem post={itemData} key={i}/>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
