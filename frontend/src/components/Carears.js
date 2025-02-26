import React, {useEffect} from 'react'

import Careers from './Careers';

function Carears() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Careers/>
    </div>
  )
}

export default Carears
