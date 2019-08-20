import React from 'react';
import './Dogs.css';
var dogPic = {
  backgroundImage: 'url("https://res.cloudinary.com/apartmentlist/image/upload/v1566267398/Hackathon/home/berkay-gumustekin-ngqyo2AYYnE-unsplash.jpg")',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
};
class Dogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }
  handleClickList = () => {
    this.setState({ listPage: true })
  }



  render() {
    return (
      <div className="Dog">
        <header className="Dog-header">
          <h1>Dogs</h1>
          <div className = "Dog-buttons">
            <div className = "button">Sign up to walk</div>
            <div className = "button">Add a new Doggo</div>
        </div>
        </header>
        <div className="Dog-details">
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
          <div className="Dog-box" style={dogPic}>
          </div>
        </div>
      </div>
    );
  }
}

export default Dogs;