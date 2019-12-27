import { connect } from 'react-redux';
import User from '../components/User';

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(User);
