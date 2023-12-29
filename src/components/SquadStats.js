import { connect } from "react-redux";

function SquadStats(props) {
  function strength() {
    let strength = 0;
    props.heroes.forEach((hero) => (strength += hero.strength));

    return strength;
  }

  function speed() {
    let speed = 0;
    props.heroes.forEach((hero) => (speed += hero.speed));

    return speed;
  }

  function intelligence() {
    let intelligence = 0;
    props.heroes.forEach((hero) => (intelligence += hero.intelligence));

    return intelligence;
  }

  return (
    <div>
      <h4>SquadStats</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Overall Strength:</b> {strength()}
        </li>
        <li className="list-group-item">
          <b>Overall speed:</b> {speed()}
        </li>
        <li className="list-group-item">
          <b>Overall Intelligence:</b> {intelligence()}
        </li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, null)(SquadStats);
