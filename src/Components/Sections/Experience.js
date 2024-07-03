// import React from 'react'
// import styled from 'styled-components'
// import { useTheme } from '../../context/themeContext';
// import { SectionLayout } from '../../styles/Layouts';
// import Timeline from '../Timeline/Timeline';
// import Title from '../Title/Title';

// function Experience() {
//     const theme= useTheme()
//     return (
//         <ExperienceStyled id='experience' theme={theme}>
//             <Title name={'Experience'} desc={'Explore my Experince with my Web Development Journey.'} />
//             <div className="timeline-con">
//                 <Timeline />
//             </div>
//         </ExperienceStyled>
//     )
// }

// const ExperienceStyled = styled(SectionLayout)`
//     .timeline-con{
//         margin-top: 3.5rem;
//     }
// `;

// export default Experience

import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import Timeline from '../Timeline/Timeline'
import Title from '../Title/Title'

function Experience() {
  const theme = useTheme()
  return (
    <ExperienceStyled id='experience' theme={theme}>
      <Title
        name={'Experience'}
        desc={'Explore my experience with my Web Development Journey.'}
       
      />
      <div className='timeline-con'>
        <Timeline />
      </div>
    </ExperienceStyled>
  )
}

const ExperienceStyled = styled(SectionLayout)`
  .timeline-con {
    margin-top: 3.5rem;
    padding: 0 1rem; /* Add padding to prevent overflow on small screens */
  }
`

export default Experience
