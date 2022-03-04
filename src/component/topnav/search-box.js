import * as Icons from '../icons';
import styles from './search-box.module.css';
import { Redirect } from 'react-router-dom'

function SearchBox() {
  return (
    <div className={styles.SeachBox}>
      <Icons.Search />
      <input placeholder="Artists, songs, or podcasts" maxLength="80" 
        onSubmit={function(e) {
          console.log(e.target.value);
          <Redirect to="blah" />
        }} />
    </div>
  );
}
  
export default SearchBox;