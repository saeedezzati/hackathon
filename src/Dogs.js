
import React from 'react';
import './Dogs.css';
import Lottie from 'lottie-react-web'
import animation from './dog_wagging.json'

class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: []
    }
  }

  componentDidMount() {
    fetch('https://api.sheety.co/1dd8774f-b626-4446-8c7d-86f5cd5624ee')
      .then(response => response.json())
      .then(data => setTimeout(()=>this.setState({ dogList: data }), 2000) );
  }


  render() {
    const { handleClickSection } = this.props;
    const { dogList } = this.state;

    return (
      <div className="Dog">
        <header className="Dog-header">
          <h1>{dogList.length} Dogs</h1>
          <div className="Dog-buttons">
            <div className="button">Sign up to walk</div>
          </div>
        </header>
        <div className="Dog-details">
          {dogList.length === 0
            ? <div className="Dog-animation">
              <Lottie
              ariaRole=''
              options={{
                animationData: animation,
                autoplay: true,
                loop: true,
              }}
              />
              </div>
            : dogList.map(dog => {
              return (
                <div className="Dog-box" onClick={handleClickSection("dog-detail", dog)}>
                  <img className="Dog-img" alt="doggies!" src={dog.profilePhoto}></img>
                  <div className="Dog-info">
                    <div className="Dog-info-header">
                      <span>{dog.dogName}</span>
                      <span>{dog.officeLocation}</span>
                    </div>
                    <div className="Dog-owner">{dog.owner}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Dogs;