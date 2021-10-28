import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  addToFavorite,
  removeToFavorite,
  selectFavoriteList,
} from 'features/Favorite/favoriteSlice';
import { Meetup } from 'models';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export interface MeetupCardProps {
  meetup: Meetup;
}

function MeetupCard({ meetup }: MeetupCardProps) {
  const dispatch = useAppDispatch();
  const favoriteList = useAppSelector(selectFavoriteList);

  const isFavorite = useMemo(() => {
    return favoriteList.some((x) => x.id === meetup.id);
  }, [favoriteList, meetup.id]);

  const handleToggleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeToFavorite(meetup.id || ''));
    } else {
      dispatch(addToFavorite(meetup));
    }
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height={300} image={meetup.image} alt={meetup.title} />

        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h6" component="div">
            {meetup.title}
          </Typography>

          <Typography variant="body2" mb={2} fontStyle="italic">
            {meetup.address}
          </Typography>

          <Typography variant="body2">{meetup.description}</Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ justifyContent: 'center', py: 2 }}>
        {isFavorite && (
          <Button
            size="small"
            variant="outlined"
            color="warning"
            onClick={handleToggleFavoriteClick}
          >
            Remove from favorites
          </Button>
        )}

        {!isFavorite && (
          <Button size="small" variant="outlined" onClick={handleToggleFavoriteClick}>
            Add to favorites
          </Button>
        )}

        <Link to={`/meetups/${meetup.id}`}>
          <Button size="small" variant="outlined" sx={{ ml: 2 }}>
            Edit
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MeetupCard;
