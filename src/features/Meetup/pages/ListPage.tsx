import { Button, Container, LinearProgress, Stack, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import meetupApi from 'api/meetupApi';
import { Meetup } from 'models';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MeetupList from '../components/MeetupList';

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

function ListPage() {
  const [meetupList, setMeetupList] = useState<Array<Meetup>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMeetupList = async () => {
      try {
        const response = await meetupApi.getAll();
        setMeetupList(response);
      } catch (error) {
        console.log('Failed to fetch meetup list: ', error);
      }

      setLoading(false);
    };

    fetchMeetupList();
  }, []);
  return (
    <Wrapper>
      {loading && <Loading />}

      <Container maxWidth="sm">
        <Stack direction="row" justifyContent="space-between" mb={4}>
          <Typography component="h1" variant="h5">
            All Meetups
          </Typography>

          <Link to="/meetups/add">
            <Button variant="contained">Add new meetup</Button>
          </Link>
        </Stack>

        <MeetupList data={meetupList} />
      </Container>
    </Wrapper>
  );
}

export default ListPage;
