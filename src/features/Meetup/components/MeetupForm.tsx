import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { InputField, TextareaField } from 'components/FormFields';
import { Meetup } from 'models';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface MeetupFormProps {
  onSubmit?: (formValues: Meetup) => void;
  initialValues?: Meetup;
}

const schema = yup.object().shape({
  title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  image: yup.string().required('Please enter image').min(5, 'Image is too short'),
  address: yup.string().required('Please enter address').min(5, 'Address is too short'),
  description: yup.string().required('Please enter description').min(5, 'Description is too short'),
});

function MeetupForm({ onSubmit, initialValues }: MeetupFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Meetup>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (formValues: Meetup) => {
    try {
      await onSubmit?.(formValues);
    } catch (error) {
      console.log('Failed to submit meetup form', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField name="title" control={control} label="Meetup Title" />
      <InputField name="image" control={control} label="Meetup Image URL" />
      <InputField name="address" control={control} label="Meetup Address" />
      <TextareaField name="description" control={control} label="Meetup Description" rows={5} />

      <Box mt={2}>
        <Button type="submit" color="primary" variant="contained" disabled={isSubmitting}>
          Save
        </Button>
      </Box>
    </form>
  );
}

export default MeetupForm;
