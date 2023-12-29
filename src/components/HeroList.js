import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeCharacterById } from "../actions";
import "../App.css";

function HeroList(props) {
  return (
    <div>
      <h4>Heroes</h4>
      <ul className="list-group">
        {props.heroes.map((hero) => {
          return (
            <li key={hero.id} className="list-group-item">
              <div className="list-item">{hero.name}</div>
              <div
                className="list-item right-button"
                onClick={() => props.removeCharacterById(hero.id)}
              >
                x
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  };
}

export default connect(mapStateToProps, { removeCharacterById })(HeroList);
