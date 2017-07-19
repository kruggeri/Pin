import React from 'react';
import { Link, withRouter } from 'react-router-dom';


const Discovery = (props) => {


  return (
      <section className="board-show-container">
      <div className="board-header">
      </div>

        <div className="pins">

      <ul className="board-pin-container">

        {
          props.followings.map( follow => {
            return (
              Object.values(follow.pins).map( pin => {
                return (
                    <Link to={`/pins/${pin.id}`} key={pin.id}>
                    <li className="board-show-pins">
                    <img src={pin.image_source}/>

                    <div className="pin-description">
                      <div className="pin-description-text">
                        {pin.title}
                      </div>


                        <div className="pin-credits">
                          <div className="pin-credit-wrapper">
                            <div className="cred-item">
                              <img src={follow.avatar_url}/>
                              <div className="pin-credit-user-wrapper">
                                <div className="author">
                                  {follow.username}
                                </div>
                              </div>

                          </div>
                      </div>
                    </div>
                  </div>

                </li>
                </Link>
                )
              })

            )


          })

        }



      </ul>
    </div>


    </section>
  )






 }

export default Discovery;
