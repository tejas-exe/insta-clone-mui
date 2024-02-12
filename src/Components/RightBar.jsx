import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import AlignItemsList from './NewConversation';

function RightBar() {
  return (
    <Box
      flex={'2'}
      p={'2'}
      sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }}
    >
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          overflowY: 'scroll',
          '&::-webkit-scrollbar': { display: 'none' },
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
        width={350}
      >
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          online friends
        </Typography>
        <AvatarGroup max={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            alt='Remy Sharp'
            src='https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg'
          />
          <Avatar
            alt='Travis Howard'
            src='https://media.istockphoto.com/id/1360585349/photo/hey-you-gesture-modern-friendly-young-african-american-girl-pointing-fingers-at-camera.jpg?s=612x612&w=0&k=20&c=ik-v4dgQJb7LeAyYEfEn4UQQRD_K3UDhymxJSophyFs='
          />
          <Avatar
            alt='Cindy Baker'
            src='https://media.istockphoto.com/id/1297273434/photo/good-vibes-are-calling.jpg?s=612x612&w=0&k=20&c=SkL_WsqU90XFM57NrG6P9RzSP1zwQB7N9OR-osuRniw='
          />
          <Avatar
            alt='Agnes Walker'
            src='https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg='
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1707436800&semt=sph'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://media.gettyimages.com/id/601823049/photo/portrait-of-young-man-with-curly-blond-hair-wearing-white-t-shirt.jpg?s=612x612&w=gi&k=20&c=Hp7tiG9r5ON4KWyRd2PJ3qyuamxtqXr7uXuwH9DPuF0='
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1707436800&semt=sph'
          />
          <Avatar
            alt='Trevor Henderson'
            src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1707436800&semt=sph'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Latest photos
        </Typography>
        <ImageList
          cols={3}
          rowHeight={100}
          gap={'10px'}
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <ImageListItem>
            <img
              src={`https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg`}
              alt='Hello world'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg`}
              alt='Hello world'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg`}
              alt='Hello world'
            />
          </ImageListItem>
        </ImageList>
        <Typography
          variant='h6'
          fontWeight={100}
          mt={2}
          mb={2}
          // sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Latest conversation
        </Typography>
        <AlignItemsList></AlignItemsList>
      </Box>
    </Box>
  );
}

export default RightBar;
