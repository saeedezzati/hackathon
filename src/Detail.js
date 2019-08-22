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

  getCSV = (selector) => {
    let selectorArray = [];
    if (this.props.detailObj[selector]) {
      selectorArray = this.props.detailObj[selector].split(", ");
      console.log("photos", selector);
    }
    return selectorArray;
  }

  getPetPictures = () => {
    let images = [];
    if (this.props.detailObj.petPhotos) {
      console.log("getting pet photos");
    let photoArray = this.props.detailObj.petPhotos.split(", ");
    console.log("photos", photoArray);
    images = photoArray.map((url) => {
      return (
        <div className="margin-top-10" onClick={handleClickSection("dog-detail", person)}> 
          <img
            className="Detail-img margin-left-right-10"
            src={url}
            alt="Pet"
            width="150"
            height="150"
          />
        </div>
      )
    });
    }
    return images;
  }

  render() {
    const { detailObj, section } = this.props;
    console.log("details props", this.props.detailObj.petPhotos);
    const ttma = this.getCSV("talkToMeAbout");
    const ttmaElements = ttma.map((group) => {
      return (
        <div 
          className="Detail-ttma"
          onClick={() => {
            this.props.handleClickGroup("people", group);
          }}
        >
          {group}
        </div>
      )
    });
    return (
      <div className="Detail">
        <div className="Detail-sidebar">
          <div className="Detail-name">
            {`
              ${
                section === "detail" ? 
                detailObj.name : 
                detailObj.dogName
              } ${
                section === "detail" ? 
                (detailObj.mostUsedEmoji || "😀") : 
                "🐶"}
            `}
          </div>
          <img
            className="Detail-img margin-top-10"
            src={section === "dog-detail" ? detailObj.profilePhoto : (detailObj.image || "https://image.flaticon.com/icons/svg/163/163801.svg")}
            alt="Person"
            width="290"
            height="290"
          />
          {section === "detail" && 
          <React.Fragment>
            <div className="Detail-label">Title</div>
            <div className="Detail-text">{detailObj.title}</div>
            <div className="Detail-label">Department</div>
            <div className="Detail-text">{detailObj.department}</div>
            <div className="Detail-label">Tenure</div>
            <div className="Detail-text">{detailObj.tenure}</div>
            <div className="Detail-label">Office Location</div>
            <div className="Detail-text">{detailObj.workLocation}</div>
          </React.Fragment> 
          }
          {section === "dog-detail" && 
            <React.Fragment>
              <div className="Detail-label">Owner</div>
              <div className="Detail-text">{detailObj.owner}</div>
              <div className="Detail-label">Location</div>
              <div className="Detail-text">{detailObj.officeLocation}</div>
            </React.Fragment> 
          }
        </div>
        <div className="Detail-info Min-max-width">
        {section === "detail" && 
          <React.Fragment>
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
              <div className="flex-parent">{ttmaElements}</div>
            </div>
            <div className="Detail-section">
              <div className="Detail-header padding-left-20">Office Info</div>
              <div className="Detail-line"></div>
              <div className="Detail-column padding-left-20">
                <div className="Detail-label">Favorite Food</div>
                <div className="Detail-text">Sample Text</div>
                <div className="Detail-label">Allergies</div>
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
                <div className="Detail-label">Allergies</div>
                <div className="Detail-text">{"Sample Text"}</div>
              </div>
              <div className="Detail-column padding-left-20">
                <div className="Detail-label">Phone Number</div>
                <div className="Detail-text">Sample Text</div>
              </div>
            </div>
          </React.Fragment>
        }
        {section === "dog-detail" && 
          <React.Fragment>
            <div className="Detail-section">
              <div className="Detail-header padding-left-20">About</div>
              <div className="Detail-line"/>
              <div className="Detail-column padding-left-20">
                <div className="Detail-label">Breed</div>
                <div className="Detail-text">{detailObj.breed}</div>
                <div className="Detail-label">Favorite Snack</div>
                <div className="Detail-text">{detailObj.favoriteSnack}</div>
                <div className="Detail-label">Tricks</div>
                <div className="Detail-text">{detailObj.tricks}</div>
              </div>
              <div className="Detail-column padding-left-20">
                <div className="Detail-label">Age</div>
                <div className="Detail-text">{detailObj.age}</div>
                <div className="Detail-label">Scratch Sweet Spots</div>
                <div className="Detail-text">{detailObj.scratchSweetSpot}</div>
                <div className="Detail-label">Hometown</div>
                <div className="Detail-text">{detailObj.hometown}</div>
              </div>
            </div>
            <div className="Detail-section">
              <div className="Detail-header padding-left-20">Fav Friendos</div>
              <div className="Detail-line"></div>
              <div className="flex-parent">{"Dog1, Dog2, Dog3, Dog4"}</div>
            </div>
          </React.Fragment>
        }
        </div>
        { section === "detail" && this.props.detailObj.petPhotos !== null &&
            <div className="Detail-info width-172">
              <div className="Detail-section">
                <div className="Detail-header padding-left-20">Pets</div>
                <div className="Detail-line"></div>
                <div>
                  {this.getPetPictures()}
                </div>
              </div> 
            </div>
        }
      </div>
      
    );
  }
}

export default Detail;
