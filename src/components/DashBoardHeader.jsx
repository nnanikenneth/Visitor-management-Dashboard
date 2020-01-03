import React, { Component } from 'react';
import {Image, Header} from 'semantic-ui-react';

export default class App extends Component {
    render() {
      return (
      <Header style={{backgroundColor: "black", padding: '0.3em 0.8em'}} as="h3">  
         <div style={{backgroundColor: "black", padding: '0.3em 0.8em'}}>
            <div > {/*    */}
                <div>
                    <div  style={{display: 'inline-block'}}>
                      <a href="?" style={{color: "red"}}>
                          Proxy accessmanager
                      </a>
                    </div>
                    <div style={{display: 'inline-block'}}>
                      <Image
                        src="https://www.superprof.ng/images/teachers/teacher-home-turkish-language-lessons-online-face-face-from-experienced-teacher-from-begginers-advanced-turkish-gcse-turkish-level.jpg"
                        alt="/Users/nnanikenneth/Desktop/proxy-workspace/dashboard-prototype/src/static/avatar-grinning-man-face.jpg"
                        size="tiny"
                        circular
                      />
                    </div>
                </div>
                {/* <div> */}
                    {/* <Image
                        src="https://manage.proxy.com/static/logo.png"
                        as='a'
                        size='tiny'
                        href='https://www.proxy.com/'
                        target='_blank'
                        alt="./static/logo.png"
                    /> */}

                    
                {/* </div> */}
            </div>
{/*       
            <div style={{float: "right"}}>
                  <div style={{display: 'inline-block'}} >
                    <Image
                      src="https://www.superprof.ng/images/teachers/teacher-home-turkish-language-lessons-online-face-face-from-experienced-teacher-from-begginers-advanced-turkish-gcse-turkish-level.jpg"
                      alt="/Users/nnanikenneth/Desktop/proxy-workspace/dashboard-prototype/src/static/avatar-grinning-man-face.jpg"
                      size="tiny"
                      circular
                    />
                  </div>

                  <div style={{display: 'inline-block'}}> 
                    <p style={{color: "red"}}>Company Name</p>
                  </div>
            </div> */}
        </div>
      </Header>
      );
    }
  }
  