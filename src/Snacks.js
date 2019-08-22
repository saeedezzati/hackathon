import React from 'react';
import './Snacks.css';

class Snacks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snacks: { "Kombucha": 1, "Ice Cream": 1, "Protein Bars": 1 },
      searchValue: ""
    }
  }

  componentDidMount() {
  }

  handleClickSnack = snack => () => {
    this.setState((state, props) => ({ snacks: { ...state.snacks, [snack]: state.snacks[snack] + 1 } }))
  }

  handleClickSubmit =  () => {
    this.setState((state, props) => ({ snacks: { ...state.snacks, [state.searchValue]: 1 } }))
  }
  render() {
    const { snacks } = this.state;
    return (
      <div className="Snacks">
        <div className="Search-label">
          What's missing from the kitchen?
        </div>
        <input
          autoFocus={true}
          placeholder="Kombucha, Protein Bars, Ice Cream,..."
          className="Search-box"
          onChange={e => this.setState({ searchValue: e.target.value })}
        />
        <div className="Submit-snack" onClick={this.handleClickSubmit}>
          Submit
        </div>
        <div className="Search-label">
          Or pick one
        </div>
        <div className="Snack-boxes">
          {Object.keys(snacks).map((snack, index) =>
            <div key={index} className="Snack-box" onClick={this.handleClickSnack(snack)}>
              {snack}
              <div>
                {snacks[snack]}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Snacks;
