import React from 'react';
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import styles from './Item.module.css';

class Item extends React.Component{

  render () {
    const { value, isDone, onClickDone, id, onClickDelete } = this.props;
        return (<div>
            <ListItem>
                <Checkbox color="primary"
                className={styles.Checkbox}
                checked={isDone}
                inputProps={{'aria-label': 'uncontrolled-checkbox'}}
                onClick = {() => onClickDone(id)}/>
              <ListItemText>
                   <span className={
                   classnames({
                     [styles.item]: true,
                     [styles.done]: isDone
                   })
                 }>
                     {value}
                 </span>
             </ListItemText>
             <DeleteOutlineIcon
             onClick = {() => onClickDelete (id)}
             className={styles.DeleteOutlineIcon}
              />
            </ListItem>
      </div>);
  }
}

export default Item;
