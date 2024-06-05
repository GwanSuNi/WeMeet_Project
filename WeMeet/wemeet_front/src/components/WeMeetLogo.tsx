import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function WeMeetLogo(props: any) {
    const {text} = props;
    return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'absolute',
                top: 0
            }}>
                <img className="logoImg" src={"image/wemeetlogo.png"} alt={"WeMeet Logo"}/>

                {text &&
                    (<Typography variant="h4" gutterBottom>
                        {text}
                    </Typography>)}

            </Box>
    );
}