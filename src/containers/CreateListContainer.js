import { connect } from 'react-redux';
import CreateList from '../components/CreateList';
import { createList } from '../actions/list-actions';

export default connect(null, { createList })(CreateList);
