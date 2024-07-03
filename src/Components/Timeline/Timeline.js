// import React from 'react'
// import styled from 'styled-components'
// import { useTheme } from '../../context/themeContext';
// import { brief, education } from '../../utils/Icons';
// import TimelineItem from '../TimelineItem/TimelineItem';

// function Timeline() {
//     const theme= useTheme()
//     return (
//         <TimelineStyled theme={theme}>
//             <div className="education-timeline timeline">
//                 <TimelineItem
//                     duration={'2018 - 2021'}
//                     title={'Computer Science Degree in Mount Kenya University'}
//                     desc={'I started experiencing the journey of web development while at University , collaborating with fellow students in meeting project deadline.'}
//                     icon={education}
//                 />
//                 <TimelineItem
//                     duration={'2021 - 2022'}
//                     title={'Internship Level'}
//                     desc={'I found an internship to one of the biggest networking companies in Kenya, at safaricom.'}
//                     icon={education}
//                 />
//                 <TimelineItem
//                     duration={'2022 - current'}
//                     title={'Mount Kenya University'}
//                     desc={'I completed a Computer Science degree and graduated. After that  I landed my first Web Development job at Hashnode.'}
//                     icon={education}
//                 />
//             </div>
//             <div className="jobs-timeline timeline">
//                 <TimelineItem
//                     duration={'2022 - 2023'}
//                     title={'Junior Developer'}
//                     desc={'I started in making Design Templates for frontend part. I moved my Design Experience to UI/UX after learning Reactjs.'}
//                     icon={brief}
//                 />
//                 <TimelineItem
//                     duration={'2022 - 2023'}
//                     title={'Frontend Developer'}
//                     desc={'I did my first Project to land me a frontend job, the prject was OPENai mern stack image generator application.'}
//                     icon={brief}
//                 />
//                 <TimelineItem
//                     duration={'2019 - Present'}
//                     title={'Software Engineer'}
//                     desc={'Currently am aspiring to work as  a junior software Engineer. What i believe is , God will Help me in this jouney of meeting other engineers and collaborating with them in a larger/complex projects.'}
//                     icon={brief}
//                 />
//             </div>
//         </TimelineStyled>
//     )
// }

// const TimelineStyled = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
//     gap: 2rem;
//     .timeline{
//         background-color: ${(props) => props.theme.colorBg5};
//         padding: 2rem;
//         border-radius: 10px;
//     }

//     .jobs-timeline{
//         .icon{
//             left: -10px;
//         }
//     }
// `;

// export default Timeline

import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { brief, education } from '../../utils/Icons'
import TimelineItem from '../TimelineItem/TimelineItem'

function Timeline() {
  const theme = useTheme()
  return (
    <TimelineStyled theme={theme}>
      <div className='education-timeline timeline'>
        <TimelineItem
          duration={'2018 - 2021'}
          title={'Computer Science Degree in Mount Kenya University'}
          desc={
            'I started experiencing the journey of web development while at University, collaborating with fellow students in meeting project deadlines.'
          }
          icon={education}
        />
        <TimelineItem
          duration={'2021 - 2022'}
          title={'Internship Level'}
          desc={
            'I found an internship at one of the biggest networking companies in Kenya, Safaricom.'
          }
          icon={education}
        />
        <TimelineItem
          duration={'2022 - current'}
          title={'Mount Kenya University'}
          desc={
            'I completed a Computer Science degree and graduated. After that, I landed my first Web Development job at Hashnode.'
          }
          icon={education}
        />
      </div>
      <div className='jobs-timeline timeline'>
        <TimelineItem
          duration={'2022 - 2023'}
          title={'Junior Developer'}
          desc={
            'I started by making design templates for the frontend. I moved my design experience to UI/UX after learning React.js.'
          }
          icon={brief}
        />
        <TimelineItem
          duration={'2022 - 2023'}
          title={'Frontend Developer'}
          desc={
            'I did my first project to land me a frontend job. The project was an OpenAI MERN stack image generator application.'
          }
          icon={brief}
        />
        <TimelineItem
          duration={'2019 - Present'}
          title={'Software Engineer'}
          desc={
            'Currently, I am aspiring to work as a junior software engineer. I believe God will help me in this journey of meeting other engineers and collaborating with them on larger and more complex projects.'
          }
          icon={brief}
        />
      </div>
    </TimelineStyled>
  )
}

const TimelineStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 8rem;
  padding: 0 1rem; /* Add padding to prevent overflow on small screens */

  .timeline {
    background-color: ${(props) => props.theme.colorBg5};
    padding: 2rem;

    border-radius: 10px;
  }

  .jobs-timeline {
    .icon {
      left: -10px;
    }
  }
`

export default Timeline
