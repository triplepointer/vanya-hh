import React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Container from '@mui/material/Container';

export default function Info({Keyword, Rate}) {
  return (
    <Container maxWidth="sm">
        <h5 style={{margin: '5px auto'}}>{Keyword} | {Rate} % </h5>
    <MobileStepper
      variant="progress"
      steps={100}
      position="static"
      activeStep={Rate}
      sx={{ maxWidth: 400, flexGrow: 1 }}
    />
</Container>
  );
}
