import { connect } from 'react-redux';
import User from '../components/User';

const mapStateToProps = (state, ownProps) => ({
  user: state.userReducer.entities[ownProps.userId],
});

export default connect(mapStateToProps)(User);
