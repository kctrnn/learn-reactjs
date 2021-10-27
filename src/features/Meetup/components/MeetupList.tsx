import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Meetup } from 'models';
import MeetupCard from './MeetupCard';

export interface MeetupListProps {
  data: Meetup[];
}

function MeetupList({ data }: MeetupListProps) {
  return (
    <Box>
      <Grid container spacing={4}>
        {data.map((meetup) => (
          <Grid item key={meetup.id} xs={12}>
            <MeetupCard meetup={meetup} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MeetupList;
