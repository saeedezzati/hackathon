import React from 'react';
import './Detail.css';

class Detail extends React.Component {
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

  getPetPictures = () => {
    const photoArray = this.props.detailObj.petPhotos.split(", ");
    console.log("photos", photoArray);
    const images = photoArray.map((url) => {
      return (
        <img
          src={url}
          alt="Pet"
          width="250"
          height="250"
        />
      )
    });
    return images;
  }

  render() {
    const { detailObj } = this.props;
    console.log("details props", this.props);
    return (
      <div className="Detail">
        <div className="Detail-sidebar">
          <div className="Detail-name">
            {`${detailObj.name} ${detailObj.mostUsedEmoji}`}
          </div>
          <img
            className="Detail-person-img"
            src={detailObj.image}
            alt="Person"
            width="290"
            height="290"
          />
          <div className="Detail-label">Title</div>
          <div className="Detail-text">{detailObj.title}</div>
          <div className="Detail-label">Department</div>
          <div className="Detail-text">{detailObj.department}</div>
          <div className="Detail-label">Tenure</div>
          <div className="Detail-text">{detailObj.tenure}</div>
          <div className="Detail-label">Office Location</div>
          <div className="Detail-text">{detailObj.workLocation}</div>
        </div>
        <div className="Detail-info">
          <div className="Detail-section">
            <div className="Detail-header padding-left-20">About</div>
            <div className="Detail-line"/>
            <div className="Detail-column padding-left-20">
              <div className="Detail-label">I'm Traveling To</div>
              <div className="Detail-text">{"Sample Text"}</div>
              <div className="Detail-label">Hometown</div>
              <div className="Detail-text">{detailObj.hometown}</div>
            </div>
            <div className="Detail-column padding-left-20">
              <div className="Detail-label">Favorite TV Show</div>
              <div className="Detail-text">{detailObj.favouriteTVShow}</div>
              <div className="Detail-label">Who Would Play You In A Movie</div>
              <div className="Detail-text">{"Sample Text"}</div>
            </div>
          </div>
          <div className="Detail-section">
            <div className="Detail-header padding-left-20">Talk To Me About</div>
            <div className="Detail-line"></div>
            <div>{`Talking Points: ${detailObj.talkToMeAbout}`}</div>
          </div>
          <div className="Detail-section">
            <div className="Detail-header padding-left-20">Office Info</div>
            <div className="Detail-line"></div>
            <div className="Detail-column padding-left-20">
              <div className="Detail-label">Favorite Food</div>
              <div className="Detail-text">Sample Text</div>
              <div className="Detail-label">Allergiers</div>
              <div className="Detail-text">Sample Text</div>
            </div>
            <div className="Detail-column padding-left-20">
              <div className="Detail-label">Birthday</div>
              <div className="Detail-text">{detailObj.birthday}</div>
              <div className="Detail-label">Favorite Snack</div>
              <div className="Detail-text">Sample Text</div>
            </div>
          </div>
          <div className="Detail-section">
            <div className="Detail-header padding-left-20">Contact Info</div>
            <div className="Detail-line"></div>
            <div className="Detail-column padding-left-20">
              <div className="Detail-label">Email</div>
              <div className="Detail-text">{"Sample Text"}</div>
              <div className="Detail-label">Alergies</div>
              <div className="Detail-text">{"Sample Text"}</div>
            </div>
            <div className="Detail-column padding-left-20">
              <div className="Detail-label">Phone Number</div>
              <div className="Detail-text">Sample Text</div>
            </div>
          </div>
        </div>
        
        {/* <div>Pets</div>
        <div>
          {this.getPetPictures()}
        </div>
        <div>{`Name: ${detailObj.petNames}`}</div>
        <br></br>
        <div>Shoutouts</div>
        <div>
          <img
            src={detailObj.shoutouts}
            alt="shoutouts"
            height="200"
            width="800"
          />
        </div>
        */}
        
      </div>
    );
  }
}

export default Detail;
