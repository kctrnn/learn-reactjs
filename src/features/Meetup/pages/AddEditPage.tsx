import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import MeetupForm from '../components/MeetupForm';

function AddEditPage() {
  const { meetupId } = useParams<{ meetupId: string }>();
  const isEditMode = Boolean(meetupId);

  return (
    <Box py={4}>
      <Container maxWidth="sm">
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography component="h1" variant="h5">
            {isEditMode ? 'Update Meetup Info' : 'Add New Meetup'}
          </Typography>

          <Link to="/meetups">
            <Button variant="contained">All meetups</Button>
          </Link>
        </Stack>

        <MeetupForm />
      </Container>
    </Box>
  );
}

export default AddEditPage;
