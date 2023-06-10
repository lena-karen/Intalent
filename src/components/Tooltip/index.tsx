import React, {memo} from 'react'

import { styled } from '@mui/material/styles';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

type CustomTooltipProps = {
  title: string
  children: React.ReactElement
}
export default function CustomTooltip({title, children}: CustomTooltipProps) {
  
  const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        boxShadow: theme.shadows[1],
        fontSize: 11,
      },
    }));

  return (
    <LightTooltip title={title}>
      {children}
    </LightTooltip>
  )
}
