import React, { useState } from 'react';
import * as styles from './styles';

const SearchInput = () => {

  const [value, setValue] = useState('');
  
  return (
    <div css={styles.wrapper}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export { SearchInput };