import { connect } from 'react-redux';
import Card from '../components/Card';
import { removeCard } from '../actions/card-actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.cardReducer.entities[ownProps.cardId]);
  return {
    card: state.cardReducer.entities[ownProps.cardId],
  };
};

export default connect(mapStateToProps, { removeCard })(Card);
