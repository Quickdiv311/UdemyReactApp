import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.scss';
import {connect} from 'react-redux';
import {selectSections} from '../../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) => 
  (
    <div className='directory-menu'>
      {
          sections.map(({id, ...props}) => (
          <MenuItem key={id} {...props}/>
        ))
      }
    </div>
  )

  const mapStateToProps = createStructuredSelector({
    sections: selectSections
  })

export default connect(mapStateToProps)(Directory);




































