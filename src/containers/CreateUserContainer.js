import { connect } from 'react-redux';
import CreateUser from '../components/CreateUser';
import { createUser } from '../actions/user-actions';

export default connect(null, { createUser })(CreateUser);
