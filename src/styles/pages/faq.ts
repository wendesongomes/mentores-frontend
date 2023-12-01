import styled from 'styled-components'
import { Accordion as MuiAccordion } from '@mui/material'

export const FaqContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 74px;
  margin-bottom: 3rem;
`

export const ImageContainer = styled.div`
  margin-top: 80px;
`
export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 43.75rem;
`

export const Accordion = styled(MuiAccordion)`
  & + & {
    border-top: 1px solid #cbcbcb;
  }

  svg {
    width: 1.2rem;
    height: 1.2rem;
    rotate: 270deg;
    color: #323232;
  }
`

export const AccordionContent = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`

export const AccordionTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #002c66;
`

export const TitleSpan = styled.h2`
  color: #002c66;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 1.5rem;
`
