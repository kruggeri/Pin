import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId)
    .then( () => this.props.requestSingleUser(this.props.board.user_id));

  }


  render() {
    if (!this.props.board) {
      return <div></div>
    }

    const { pins, board, currentUser, user } = this.props;
    console.log("A LOT OF TEXT WHERE IS IT!!!!");
    console.log(this.props);
    return (

      <section className="board-show-container">

        <div className="board-header">
          <div className="boarder-header-wrapper">


            <div className="board-show-title">
              {board.title}
            </div>

            <div className="board-show-description">
              {board.description}
            </div>


            <div className="board-show-info">
              <div className="board-show-pin-count">
                <div className="pin-number">
                  {pins.length}
                </div>
                <div className="pin-number-const">
                  PINS
                </div>

              </div>

              <div className="profile-pic">
                <div className="profile-circle">
                    <img src={this.props.user.avatar_url}/>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="pins">
          <ul className="board-pin-container">
          { pins.map( (pin) => {
              return (


                  <li className="board-show-pins">
                    <img src={pin.image_source}/>

                    <div className="pin-description">
                      <div className="pin-description-text">
                        {pin.title}
                      </div>


                        <div className="pin-credits">
                          <div className="pin-credit-wrapper">
                            <div className="cred-item">
                              <img src={this.props.user.avatar_url}/>
                              <div className="pin-credit-user-wrapper">
                                <div className="author">
                                  {this.props.user.username}
                                </div>
                                <div className="board-name">
                                  {this.props.board.title}
                                </div>
                              </div>

                          </div>
                      </div>
                    </div>
                  </div>
                </li>


              );}
            )
          }
        </ul>

        </div>



      </section>
    );
  }
};

export default withRouter(BoardShow);
