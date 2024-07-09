import { Box, Container, Stack, useTheme } from '@mui/material'
import React from 'react'
import Info from './Info';
import Login from './Login';
import Language from './language';

const TopBar = () => {
    const theme = useTheme();
  return (
    <Stack direction={"row"} alignItems="center" sx={{width: "100%", background: {xs: theme.palette.primary.main, md: "#fff"}, color: "#fff", height: 35}}>
      <Container sx={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: {lg: 0}, paddingRight: {lg: 0}}}>
      <Info />
      <Login />
      <Language />
      </Container>
    </Stack>
  )
}

export default TopBar
