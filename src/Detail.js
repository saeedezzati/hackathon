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
        <header className="Detail-header">
          Detail
        </header>
        <img
          src={detailObj.image}
          alt="Person"
          width="250"
          height="250"
        />
        <div>{`Name: ${detailObj.name}`}</div>
        <div>{`Department: ${detailObj.department}`}</div>
        <div>{`Title: ${detailObj.title}`}</div>
        <div>{`Tenure: ${detailObj.tenure}`}</div>
        <div>{`Work Location: ${detailObj.workLocation}`}</div>
        <div>{`Birthday: ${detailObj.birthday}`}</div>
        <div>{`Hometown: ${detailObj.hometown}`}</div>
        <div>{`Talking Points: ${detailObj.talkToMeAbout}`}</div>
        <div>{`Most Used Emoji: ${detailObj.mostUsedEmoji}`}</div>
        <div>{`Favorite TV Show: ${detailObj.favouriteTVShow}`}</div>
        <div>{`Who Would Play You In A Movie: ${detailObj.whoWouldPlayYouInAMovie}`}</div>
        <br></br>
        <div>Pets</div>
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
       
        
      </div>
    );
  }
}

export default Detail;
