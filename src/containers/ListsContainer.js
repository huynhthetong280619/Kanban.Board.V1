import { connect } from 'react-redux';
import Lists from '../components/Lists';

const mapStateToProps = state => {
  return {
    lists: state.listReducer.ids,
  };
};

export default connect(mapStateToProps)(Lists);
