import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import meetupApi from 'api/meetupApi';
import { MEETUP_LIST } from 'constants/index';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MeetupList from '../components/MeetupList';

function ListPage() {
  useEffect(() => {
    const fetchMeetupList = async () => {
      const response = await meetupApi.getAll();
      console.log(response);
    };

    fetchMeetupList();
  }, []);
  return (
    <Box py={4}>
      <Container maxWidth="sm">
        <Stack direction="row" justifyContent="space-between" mb={4}>
          <Typography component="h1" variant="h5">
            All Meetups
          </Typography>

          <Link to="/meetups/add">
            <Button variant="contained">Add new meetup</Button>
          </Link>
        </Stack>

        <MeetupList data={MEETUP_LIST} />
      </Container>
    </Box>
  );
}

export default ListPage;
