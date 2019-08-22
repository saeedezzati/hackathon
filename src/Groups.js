import React from 'react';
import './Groups.css';

class Groups extends React.Component {
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
    const { peopleList } = this.state;
    const groups = Array.from(new Set(peopleList.map(person => person.talkToMeAbout && person.talkToMeAbout.split(",")).flat()));

    return (
      <div className="Groups">
        {
          groups.map(group =>
            group &&
            <div className="Group-button"
            onClick={() => {
              this.props.handleClickGroup("people", group);
              }}
            >
              {group}
            </div>
          )
        }
      </div >
    );
  }
}

export default Groups;
