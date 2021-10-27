import { Meetup } from 'models';
import axiosClient from './axiosClient';

const meetupApi = {
  getAll(): Promise<Array<Meetup>> {
    const url = '/meetups';
    return axiosClient.get(url);
  },

  getById(meetupId: string): Promise<Meetup> {
    const url = `/meetups/${meetupId}`;
    return axiosClient.get(url);
  },

  add(data: Meetup): Promise<Meetup> {
    const url = '/meetups';
    return axiosClient.post(url, data);
  },

  update(meetupId: string, data: Meetup): Promise<Meetup> {
    const url = `/meetups/${meetupId}`;
    return axiosClient.patch(url, data);
  },
};

export default meetupApi;
