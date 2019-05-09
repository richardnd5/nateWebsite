import React from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube'

const Styles = styled.div`
.Center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.CompositionVideoContainer{

display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;

-webkit-flex-flow: row wrap;
flex-flow: row wrap;
padding-top: 10vw;

}

.SmallerText {
    color: aliceblue;

    letter-spacing: 0.5em;
    font-size: 0.7em;
    text-align: center;
    padding-top: 10px;
    width: 100%;
}

.VideoAndTitle{
    display: 'flex'; 
    align-items: 'center'; 
    justify-content: 'center'; 
    flex-direction: 'column';
    flex: 1;
    text-align: center;
    margin: 2vw;

    background: linear-gradient(#111 0, #222 30%);
    color: rgb(203, 206, 208);
    border-radius: 10px;
    padding: 20px;
    font-size: 0.8em;
    letter-spacing: 0.4em;
}
`

const Center = styled.div`
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Arrangements = () => (
    <Styles>
        <div className='center'>

          <p className="SmallerText">Just a few of them....</p>

          <div className='CompositionVideoContainer'>

          <div className='VideoAndTitle'>
              <h1>Fix You Human</h1>
              <h6>Performed By Chaparral High School Chamber Choir</h6>
              <YouTube
                videoId="HD3L5uLBJWg"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
              
            </div>

            <div className='VideoAndTitle'>
              <h1>Don't Speak</h1>
              <h6>Performed By Chaparral High School Chamber Choir</h6>
              <YouTube
                videoId="aJw7IyPXCIk"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>

            <div className='VideoAndTitle'>
              <h1>Keep Comin' Back To You </h1>
              <h2>By: Andrew Hirst</h2>
              <h6>Performed By Chaparral High School Chamber Choir</h6>
              <YouTube
                videoId="gTUoydjRF90"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>

            <div className='VideoAndTitle'>
              <h1>Roots </h1>
              <h2>By: <a href='http://www.thearcadianwild.com/'>The Arcadian Wild</a></h2>
              <h6>Performed By Chaparral High School Chamber Choir</h6>
              
              <YouTube
                videoId="qaJEEWKaNfQ"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>

            <div className='VideoAndTitle'>
              <h1>Selections By The Arcadian Wild </h1>
              <h2>By: <a href='http://www.thearcadianwild.com/'>The Arcadian Wild</a></h2>
              <h6>Performed By Chaparral High School Choir</h6>
              
              <YouTube
                videoId="bg7dl2A5ZpE"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>

            <div className='VideoAndTitle'>
              <h1>Fair Phyllis I Saw Sitting All Alone</h1>
              <h6>Performed By Chaparral High School Chamber Choir</h6>
              <YouTube
                videoId="2gFCxjdmWp0"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
              
            </div>

            <div className='VideoAndTitle'>
              <h1>The Secret of Christmas</h1>
              <h6>Performed By: Gilbert Youth Choir</h6>
            <Center>
                  <ReactPlayer url='https://vimeo.com/306218714/3d69f04610' width='300px' height='200px'/>
              </Center>
            </div>       
          </div>

        </div>
    </Styles>
)