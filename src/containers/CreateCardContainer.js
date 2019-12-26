import { connect } from 'react-redux';
import CreatCard from '../components/CreateCard';
import { createCard } from '../actions/card-actions';

export default connect(null, { createCard })(CreatCard);
