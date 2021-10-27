import { Button, Container, LinearProgress, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import meetupApi from 'api/meetupApi';
import { Meetup } from 'models';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import MeetupForm from '../components/MeetupForm';

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Loading = styled(LinearProgress)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  top: 0,
}));

function AddEditPage() {
  const history = useHistory();
  const { meetupId } = useParams<{ meetupId: string }>();
  const isEditMode = Boolean(meetupId);

  const [meetup, setMeetup] = useState<Meetup>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!meetupId) return;

    (async () => {
      setLoading(true);

      try {
        const response = await meetupApi.getById(meetupId);
        setMeetup(response);
      } catch (error) {
        console.log('Failed to fetch meetup details', error);
      }

      setLoading(false);
    })();
  }, [meetupId]);

  const initialValues: Meetup = {
    title: '',
    address: '',
    description: '',
    image: '',
    ...meetup,
  };

  const handleMeetupFormSubmit = async (formValues: Meetup) => {
    if (isEditMode) {
      await meetupApi.update(meetup?.id || '', formValues);
    } else {
      await meetupApi.add(formValues);
    }

    // Show toast success
    toast.success('Save meetup successfully', { icon: '🚀' });

    // Redirect to meetup list page
    history.push('/meetups');
  };

  return (
    <Wrapper>
      {loading && <Loading />}

      <Container maxWidth="sm">
        <Stack direction="row" justifyContent="space-between" mb={2}>
          <Typography component="h1" variant="h5">
            {isEditMode ? 'Update Meetup Info' : 'Add New Meetup'}
          </Typography>

          <Link to="/meetups">
            <Button variant="contained">All meetups</Button>
          </Link>
        </Stack>

        {(meetup || !isEditMode) && (
          <MeetupForm initialValues={initialValues} onSubmit={handleMeetupFormSubmit} />
        )}
      </Container>
    </Wrapper>
  );
}

export default AddEditPage;
