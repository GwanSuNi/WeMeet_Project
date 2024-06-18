import React, {ChangeEvent, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import {
    Box,
    Button,
    Container,
    Divider,
    FormControlLabel,
    IconButton,
    ImageList,
    ImageListItem,
    Stack,
    Switch,
    TextField,
    Typography
} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import RemoveIcon from '@mui/icons-material/Remove';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function WriteDiaryPage() {
    const [files, setFiles] = useState<File[]>([]);
    const [isPrivate, setIsPrivate] = useState(true);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles(prev => {
            const newFiles = acceptedFiles.filter(file => !prev.find(f => f.name === file.name));
            return [...prev, ...newFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }))];
        });
    }, []);

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {'image/jpeg': ['.jpeg'], 'image/png': ['.png']},
        multiple: true
    });

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            onDrop(Array.from(event.target.files));
        }
    };

    const handleTogglePrivacy = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsPrivate(event.target.checked);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });

        // TODO: Replace with your actual upload URL
        // const response = await axios.post('/your-upload-url', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // });

        console.log(formData.getAll('files'));
    };

    const removeFile = (file: File) => {
        const newFiles = [...files];
        newFiles.splice(newFiles.indexOf(file), 1);
        setFiles(newFiles);
    };

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant='h5' fontFamily='NanumGothicBold' my={4}>
                    게시물 작성
                </Typography>
                <FormControlLabel
                    control={<Switch checked={isPrivate} onChange={handleTogglePrivacy}/>}
                    label={isPrivate ? <LockIcon color='disabled'/> : <LockOpenIcon color='disabled'/>}
                    labelPlacement='start'
                    sx={{mt: 'auto'}}
                />
            </Box>
            <Stack gap={2.5}>
                <Box
                    {...getRootProps()}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    border='2px dashed #ccc'
                    borderRadius={2}
                    height={300}
                    sx={{
                        cursor: 'pointer',
                        transition: 'border-color 0.3s',
                        '&:hover': {
                            borderColor: 'primary.main'
                        }
                    }}
                >
                    <input {...getInputProps()} hidden onChange={handleImageChange}/>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <AddPhotoAlternateIcon fontSize="large"/>
                    </IconButton>
                    {files.length === 0 && <Typography variant="body1" color="textSecondary" mt={1}>
                        이미지를 업로드 하세요.
                    </Typography>}
                    <ImageList variant="masonry" cols={3} gap={8} sx={{
                        overflow: 'auto',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        '&::-webkit-scrollbar': {display: 'none'}
                    }}>
                        {files.map((file: any) => (
                            <ImageListItem key={file.name} style={{height: 'auto'}}>
                                <img src={file.preview} alt={file.name}
                                     style={{objectFit: 'cover', height: '100%', width: '100%'}}/>
                                <IconButton color='error' onClick={(e) => {
                                    e.stopPropagation();
                                    removeFile(file);
                                }} sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                }}>
                                    <RemoveIcon/>
                                </IconButton>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Divider/>
                <TextField label='위치' defaultValue='' variant='filled' inputProps={{readOnly: true}}/>
                <Divider/>
                <TextField label='제목을 입력하세요.' variant='outlined'/>
                <TextField label='내용을 입력하세요.' multiline rows={4} variant='outlined'/>
                <Divider/>
                <Button variant='contained' sx={{mb: '30px'}} onClick={handleUpload}>
                    게시하기
                </Button>
            </Stack>
        </Container>
    );
}