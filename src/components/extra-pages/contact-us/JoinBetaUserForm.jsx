import React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// third-party
import { useFormik } from 'formik';
import * as yup from 'yup';

// project imports
import countries from 'data/countries';

// assets
import MainCard from 'components/MainCard';
import trimFc from 'utils/trimFc';

// validation schema
const validationSchema = yup.object({
  firstname: yup.string().required('Firstname required'),
  lastname: yup.string().required('Lastname required'),
  email: yup.string().required('Email is required'),
  confirmEmail: yup.string().required('Confirm Email is required'),
  country: yup.string().required('Country is required').nullable()
});

// ==============================|| FORMS VALIDATION - ADDRESS ||============================== //

function JoinBetaUserForm() {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      confirmEmail: '',
      country: '',
    },
    validationSchema,
    onSubmit: async () => {
      // submit location
    }
  });

  return (
    <MainCard sx={{ pl: 2, pr: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3.5}>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>First Name *</InputLabel>
              <TextField
                id="firstname"
                name="firstname"
                placeholder="Enter Firstname"
                value={formik.values.firstname}
                onChange={trimFc(formik)}
                onBlur={formik.handleBlur}
                error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                helperText={formik.touched.firstname && formik.errors.firstname}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <InputLabel>Last Name *</InputLabel>
              <TextField
                id="lastname"
                name="lastname"
                placeholder="Enter Lastname"
                value={formik.values.lastname}
                onChange={trimFc(formik)}
                onBlur={formik.handleBlur}
                error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                helperText={formik.touched.lastname && formik.errors.lastname}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel>Email Address *</InputLabel>
              <TextField
                id="email"
                name="email"
                placeholder="example@xyz.com"
                value={formik.values.email}
                onChange={trimFc(formik)}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel>Confirm Email Address *</InputLabel>
              <TextField
                id="confirmEmail"
                name="confirmEmail"
                placeholder="example@xyz.com"
                value={formik.values.confirmEmail}
                onChange={trimFc(formik)}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmEmail && Boolean(formik.errors.confirmEmail)}
                helperText={formik.touched.confirmEmail && formik.errors.confirmEmail}
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel>Country</InputLabel>
              <Autocomplete
                id="country"
                value={formik.values.country}
                onChange={(event, newValue) => {
                  formik.setFieldValue('country', newValue);
                }}
                options={countries.map((item) => item.label)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Select Country"
                    sx={{ '& .MuiAutocomplete-input.Mui-disabled': { WebkitTextFillColor: theme.palette.text.primary } }}
                  />
                )}
              />
              {formik.touched.country && formik.errors.country && (
                <FormHelperText error id="helper-text-country">
                  {formik.errors.country}
                </FormHelperText>
              )}
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel value="end" control={<Checkbox defaultChecked />} label="Yes, I do want tradatomy send me email about product, service and events that it thinks may  interest me." labelPlacement="end" sx={{ mb: 1 }} />
            <FormControlLabel value="end" control={<Checkbox defaultChecked />} label="* By registering for the Tradatomy Beta Program, I confirm that I have read, understood, and agree to be bound by the Terms and Conditions of the Beta Program" labelPlacement="end" sx={{ mb: 2 }} />
            <Typography>By clicking the button below you understand that tradatomy will process your personal information in accordance with its Privacy Notice</Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
              <Button className="btn-primary" type="submit" disabled={formik.isSubmitting} sx={{ pl: 3, pr: 3 }}>
                Join Wait List
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </MainCard>
  );
}

export default JoinBetaUserForm;
