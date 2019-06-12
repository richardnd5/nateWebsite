import React from 'react'
import styled from 'styled-components'
import {EducationBox} from './EducationBox'

import {ResumeAppWithInfo} from './ResumeAppWithInfo'

import MaineCrest from '../../assets/UMaine_fullcrest_logo4c.png'
import ASULogo from '../../assets/asuSVG.svg'
import CSAImage from '../../assets/CSA.jpg'
import sStoriesImage from '../../assets/sStoriesReduced.jpg'
import moozartLogo from '../../assets/moozartLogo.jpg'


import {TechnicalSkillsSection} from './TechnicalSkillsSection'
import {InternshipPage} from './InternshipPage'
import {ResumeSlot} from './ResumeSlot'


const Wrapper = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    background-color: #eeeeed;
    font-family: 'Avenir';  
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Heading = styled.h1`
    padding-top: 20px;
    font-size: 1.5em;
    color: #0e289b;
    text-align: center;
`
const Subheading = styled.p`
    font-size: 0.9em;
    text-align: center;

`

const EducationContainer = styled.div`
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;

    > * {
    margin: 10px;
    }

    @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    }

`

export const ResumePage = () => (
    <Wrapper>
        <Section>
            <Heading>Objective</Heading>
            <Subheading>Budding mobile and web engineer seeking employment as a software developer</Subheading>
        </Section>

        <Section>
        <Heading>Education</Heading>
            <EducationContainer>
                <EducationBox 
                    school='Arizona State University' 
                    degree='Master of Music Composition' 
                    year='2012' 
                    gpa='3.96'
                    schoolColor1='#8c1d3f'
                    schoolColor2='#ffc627'
                    icon={ASULogo}
                />

                <EducationBox 
                    school='University of Maine' 
                    degree='Bachelor of Music Education' 
                    year='2009' 
                    gpa='3.78'
                    schoolColor1='#002b5c'
                    schoolColor2='#7abbe7'
                    icon={MaineCrest}
                />
            </EducationContainer>
        </Section>

        <Section>
            <Heading>Published Apps</Heading>

            <ResumeAppWithInfo 
                name='sStories' 
                image={sStoriesImage} 
                link='https://itunes.apple.com/us/app/sstories/id1455299421?mt=8&ign-mpt=uo%3D2'
                bulletPoints= {[
                    'Built using UIKit. Auto Layout and Framed-Based Layout. Animations',
                    'In-App Purchases Functionality',
                    'Sound sequencing and effects',
                    'Multi-Touch Gesture Recognizers and Haptics',
                    'Higher order array functions',
                    'Created a set of reusable UIView extensions for animations and downsampling images for memory management.'
                    ]} 
            />
            <ResumeAppWithInfo 
                name="Carl's Sporting Adventure" 
                image={CSAImage} 
                link='https://itunes.apple.com/au/app/carls-sporting-adventure/id1265668085?mt=8'
                bulletPoints= {[
                    'Built using Spritekit',
                    'SKPhysics',
                    'Basic persistent storage using UserDefaults'
                    ]} 
            />
        </Section>

        <Section>
            <Heading>Technical Skills</Heading>

                <TechnicalSkillsSection heading='iOS' years={5} bulletPoints={[
                    'Build and deploy iOS applications (Swift)',
                    'UIKit, Autolayout, programmatic and storyboard)', 
                    'In-App Purchases', 'Testflight', 'CocoaPods', 'SpriteKit', 'AudioKit', 'subclassing', 'delegate protocols', 'written reusable extensions'
                ]}/>
                <TechnicalSkillsSection heading='Web' years={4} bulletPoints={[
                    'Built personal website in Javascript (Some Typescript) and React (React Router, React Context, styled components)',
                    'Firebase, basic user login, sending and receiving data.',
                    'Web hosting experience, Firebase, AWS Static Hosting, Digital Ocean droplet running hosting server',
                    'Bootstrap, CSS Flexbox',
                    'Node, Yarn and NPM',
                    'GitHub, committing, multiple branches'
                ]}/>
                <TechnicalSkillsSection heading='Script/Automation' years={4} bulletPoints={[
                    'Music harmonizer - automatically harmonizes melody lines based on functional tertian harmony (Typescript, Max MSP)',
                    'sfz file generator - (sfz - plain text file format that stores instrument data for software synthesizers)   (JS)'     
            ]}/>
         </Section>

            <Section>
                <Heading>iOS Internship</Heading>
                <InternshipPage 
                name= "Meltmedia - Tempe, AZ"
                about= 'Updated ‘Moozart’, a music creation app similar to Mario Paint Composer (Objective-C)'
                image={moozartLogo} 
                link='https://itunes.apple.com/us/app/moozart/id405194870?mt=8'
                bulletPoints= {[
                    'Updated assets to higher resolution images',
                    'Updated and improved stock songs',
                    'Added stereo audio in headphones',
                    'Fixed minor user interface issues',
                    'Fixed several issues that could cause the application to crash',
                    'Updated for iOS 7 and iOS 8 compatibility'
                    ]} 
                />
            </Section>
            <Section>
                <Heading>Recent Work Experience</Heading>
                <ResumeSlot heading='Chaparral High School Choir and Orchestra Director' dates='2015-2018' bulletPoints={[
                    'Ran a program of 60-100 students', 
                    'Taught multiple courses. Designed curriculums', 
                    'Held public performances around the country', 
                    'Managed financial accounts', 
                    'Organized multiple events', 
                    'Received top ratings at competitions', 
                    'Arranged and composed music the majority of the repertoire', 
                    'coordinated trips to NYC, California, and around Arizona',
                    'Organized and ran parent booster organization',
                    'Organized and ran student council',
                    'Collaborated and performed with Nashville band with half a million monthly listeners on Spotify'
                    ]}/>
                                
                <ResumeSlot heading='Audio Engineering Experience' dates='15 years' bulletPoints={[

                    'Software - Ableton, Logic Pro, Pro Tools, Garageband, Absynth, Melodyne, Finale, Sibelius',
                    'Created audio assets for published apps',
                    'Recorded/edited professional singers, pianist on numerous recordings',
                    'Created practice tracks for all level ensembles, community through Grammy award winning choirs',
                    'Ran sound system for a cappella ensembles, live digital audio processing with ensemble members controlling effects from a hardware hacked Wii remote.'
                ]}/>
            </Section>

            <Section>
                <Heading>Recent Compensated Keyboard Work</Heading>

                <ResumeSlot heading='Mission Bell United Methodist Church Pianist' dates='2018 - present' bulletPoints={[
                    'Provide piano music for services, events, and rehearsals',
                    'Arrange music to suit the needs of the ensemble',
                    'Write piano accompaniments for service music',
                    'AV tech consultant for updating sanctuary equipment'
                    
                ]}/>
                <ResumeSlot heading='Gilbert Youth Choir Accompanist' dates='2013 - present' bulletPoints={[
                    'Accompany ensembles in rehearsal and concerts',
                    'Create practice tracks for all ensembles',
                    'Arrange music to suit the needs for the ensemble'

                    
                ]}/>
                <ResumeSlot heading='ASU Newman Center Service Pianist and Vocalist' dates='2010 - present' bulletPoints={[
                    'Accompany singers every Saturday in a blended service (contemporary and traditional music)',
                    'Creating improvised accompaniments from chord charts',
                    'Creating and singing vocal harmonies on repertoire',
                    'Writing and arranging antiphons for every service. Music utilized in the diocese of Boise, ID'               
                ]}/>
             </Section>
             <Section>
                <Heading>Additional Skills</Heading>
                    <ResumeSlot dates='' bulletPoints={[
                        'Creative, obsessed with learning', 
                        'Always striving for efficiency', 
                        'Able to work effectively with a team as well as independently.', 
                        'Persistent problem-solver.',
                        'Published composer and arranger of music',
                    ]}/>
             </Section>

    </Wrapper>
)