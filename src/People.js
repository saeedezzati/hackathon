import React from 'react';
import './People.css';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleList: []
    }
  }

  componentDidMount() {
    fetch('https://api.sheety.co/de9ad1a5-47a2-422c-8423-c8ed4bbb4c82')
      .then(response => response.json())
      .then(data => this.setState({ peopleList: data }));
  }

  render() {
    const { handleClickSection, search, group } = this.props;
    const { peopleList } = this.state;
    debugger;
    
    const filteredPeopleList = peopleList.length > 0
      ? peopleList.filter(person =>
        [person.name, person.title, person.department, person.workLocation, person.mostUsedEmoji].join(",").toLocaleLowerCase().includes(search)
      ).filter(person =>
        person.talkToMeAbout.length>0 && person.talkToMeAbout.includes(group)
      )
      : []
    return (
      <div className="People">
        <div className="People-count">
          {`${filteredPeopleList.length} People`}{group!=="" ? `in ${group}` : ""}
        </div>
        <strong className="Table-header">
          <div className="Image-header"></div>
          <div className="Name">Name</div>
          <div className="Person-title">Title</div>
          <div className="Department">Department</div>
          <div className="Location">Location</div>
          <div className="Favorite-emoji">Favorite Emoji</div>
          <div className="Take-quiz">Quiz</div>
        </strong>
        {filteredPeopleList.map((person,index) => {
          return (
            <div className="Table-row" key={index} onClick={handleClickSection("detail", person)}>
              <img className="Image" src={person.image ? person.image : "https://image.flaticon.com/icons/svg/163/163801.svg"} alt={person.name} />
              <div className="Name">{person.name}</div>
              <div className="Person-title">{person.title}</div>
              <div className="Department">{person.department}</div>
              <div className="Location">{person.workLocation}</div>
              <div className="Favorite-emoji">{person.mostUsedEmoji}</div>
              {/*<div className="Tags">
                {person.talkToMeAbout 
                  ?person.talkToMeAbout.split(",").map(tag => 
                  <div className="Tag">{tag}</div>
                  )
                  : <></>
                }
              </div>*/}
              <div className="Take-quiz"></div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default People;
