import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { MEETUP_LIST } from 'constants/index';
import MeetupList from '../components/MeetupList';

function ListPage() {
  return (
    <Box py={4}>
      <Container maxWidth="sm">
        <Typography component="h1" variant="h5" mb={2}>
          All Meetups
        </Typography>

        <MeetupList data={MEETUP_LIST} />
      </Container>
    </Box>
  );
}

export default ListPage;
