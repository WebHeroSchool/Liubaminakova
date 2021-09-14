import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () =>  {
    const initialState = {

    items: [
      {
        value:'write my own styles',
        isDone: true,
        id: 1
      },
      {
        value: 'finish 26 lesson',
        isDone: true,
        id: 2
      },
      {
        value: 'start a new lesson',
        isDone: false,
        id: 3
      }
  ],
  count: 3
};

const [items, setItems] = useState(initialState.items);
const [count, setCount] = useState(initialState.count);

useEffect( () =>{
    console.log('componentDidUpdate');
});

useEffect(()=> {
    console.log('componentDidUpdate');
})


  const onClickDone = id => {
    const newItemList = items.map(item=>{
      const newItem = { ...item };

      if (item.id === id){
        newItem.isDone = !item.isDone;
      }

      return newItem;
    });

    setItems( newItemList );
  };

  const onClickDelete = id => {
    const newItemList = items.filter ( item => item.id !==id);
    setItems(newItemList);
    setCount(count -1);
  };

  const onClickAdd = value => {
    const newItemList = [
      ...items,
      {
        value,
        isDone: false,
        id: count +1
      }
    ];
    setItems(newItemList);
    setCount(count + 1)

};

    return(
      <div className={styles.wrap}>
          <h1 className={styles.title}>TO-DO LIST </h1>
          <InputItem
          onClickAdd={onClickAdd}
          />
          <ItemList items = {items}
          onClickDone= {onClickDone}
          onClickDelete= {onClickDelete}
          />
          <Footer count={count} />
      </div>);

};


export default App;
