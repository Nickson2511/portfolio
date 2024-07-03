

import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'

function Services() {
  const theme = useTheme()
  return (
    <ServicesStyled id='services' theme={theme}>
      <Title
        name={'Services'}
        desc={
          'I am a competent developer who have collaborated in different projects, I can bring your ideas into a solution.'
        }
      />
      <div className='services-con'>
        <ServiceItem
          icon={design}
          title={'Web Developer'}
          bg={theme.colorPurple}
          shadow={theme.shadowPurple}
          desc={
            'I love building websites with Reactjs, vuejs as frontend tools that gives a better Approach to my Potential Clients.'
          }
        />
        <ServiceItem
          icon={desktop}
          title={'Mobile Applications'}
          bg={theme.colorGreenDark}
          shadow={theme.shadowGreen}
          desc={
            'I just dived into flutter and discovered that I can completely build mobile applications with it, and DRF as a backend service.'
          }
        />
        <ServiceItem
          icon={code}
          title={'Project Collaborations'}
          shadow={theme.shadowPrimary}
          bg={theme.colorPrimary}
          desc={
            'I am competent in working as a team since I have collaborated in various projects, bringing ideas to a solution.'
          }
        />
      </div>
    </ServicesStyled>
  )
}

const ServicesStyled = styled(SectionLayout)`
  background: ${(props) => props.theme.colorBgGrad};
  .services-con {
    margin-top: 5.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 5rem;
    padding: 0 1rem; /* Add padding to prevent overflow on small screens */

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`

export default Services
