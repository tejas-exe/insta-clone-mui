import { Box } from '@mui/material';
import RecipeReviewCard from './Card.jsx';

function Feed() {
  return (
    <Box flex={'4'} p={'2'} position={'sticky'}>
      <RecipeReviewCard
        imageUrl={
          'https://assets.hongkiat.com/uploads/nature-photography/The-best-nature-photography-collection.jpg'
        }
      />
      <RecipeReviewCard
        imageUrl={
          'https://assets.hongkiat.com/uploads/nature-photography/autumn-poolside.jpg'
        }
      />
      <RecipeReviewCard
        imageUrl={
          'https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-green-field-scenery-free-photo.jpg?w=600&quality=80'
        }
      />
      <RecipeReviewCard
        imageUrl={
          'https://expertphotography.b-cdn.net/wp-content/uploads/2018/07/nature-photography.jpg'
        }
      />
      <RecipeReviewCard
        imageUrl={
          'https://c.pxhere.com/images/d1/6d/20d6e315f9b0d6567b582f7c5423-1668138.jpg!d'
        }
      />
      <RecipeReviewCard
        imageUrl={
          'https://img.freepik.com/free-photo/sunset-tranquil-pond-reflects-beauty-nature-generated-by-artificial-intelligence_188544-150649.jpg'
        }
      />

      <RecipeReviewCard
        imageUrl={
          'https://rukminim2.flixcart.com/image/850/1000/jshtk7k0/poster/y/q/v/large-nature25-nature-pic-lovely-original-imafeffeg5kr2hdx.jpeg?q=90&crop=false'
        }
      />
    </Box>
  );
}

export default Feed;
