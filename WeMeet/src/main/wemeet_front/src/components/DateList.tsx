import React from 'react';
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

interface ListItemProps {
    ListItem: React.ElementType;
    listData: any[];
}

export default function DateList({ ListItem, listData }: ListItemProps) {
    return (
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
                {listData.map((itemData, i) => (
                    <ListItem {...itemData} key={i}/>
                ))}
            </Stack>
        </Container>
    );
}
