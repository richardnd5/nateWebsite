import React from 'react'
import styled from 'styled-components'
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

export const Compositions = () => (
    <Styles>
        <div className='center'>

          <p className="SmallerText">Just a few of them....</p>

          <div className='CompositionVideoContainer'>

            <div className='VideoAndTitle'>
              <h1>Nunc dimittis</h1>
              <h5>Performed by Solis Camerata</h5>

              <YouTube
                videoId="5AXm94rlhko"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>

            <div className='VideoAndTitle'>
              <h1>The Earth and the Sea</h1>
              <h5>Performed by Euphony</h5>

              <YouTube
                videoId="RFDhFZ0y_tg"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>

            <div className='VideoAndTitle'>
              <h2>A Father and His Child</h2>
              <h4>Performed by Euphony</h4>
              <YouTube
                videoId="JMQlNYs5ORM"
                opts={{
                  height: '200',
                  width: '300'
                }}
              />
            </div>
          </div>

        </div>
    </Styles>
)