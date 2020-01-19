import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { ListImage, ButtonDiv, PrettyButton } from './styled'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import shoes from './image_assets/nike .jpeg'
import shirt from './image_assets/google shirt.png'
import pants from './image_assets/male jeans.jpg'
import jacket from './image_assets/male jacket fall.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '50vw',
    backgroundColor: 'lightgrey'
  },
}));

export const WardrobeContainer = (weather) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [add, setAdd] = React.useState(false);


  const [input, setInput] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setOpen(false)
    setAdd(true)
  }

  const handleAddCancel = () => {
    setAdd(false)
  }

  let currClothing = ['Jacket', 'Shirt', 'Jeans', 'Shoes']
  let currDescription = ['Nice to wear when it\'s cold', 'Always great to represent Google', 'Jeans. Just jeans.', 'Basic ass Nike AF1\'s']

  let icons = [jacket, shirt, pants, shoes]

  console.log(input);
  return (
    <>
    <Divider/>
    <ButtonDiv>
      <PrettyButton onClick={handleClickOpen}>
        ADD
      </PrettyButton>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Clothing</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter an article of clothing you would like to add to your wardrobe!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Clothing Name"
            type="article"
            fullWidth
            onChange={(e) => setInput(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <PrettyButton onClick={handleCancel} color="primary">
            Cancel
          </PrettyButton>
          <PrettyButton onClick={handleAdd} color="primary">
            Add
          </PrettyButton>
        </DialogActions>
      </Dialog>
      <Dialog open={add} onClose={handleAddCancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Pick Clothing</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Choose the type of article of clothing you would like to add to your wardrobe!
          </DialogContentText>
          <List>
            {
              currClothing.map((currClothes, key) => (
                <>
                <ListItem button>
                  <ListImage src={icons[key]}/>
                  <ListItemText primary={currClothes}/>
                </ListItem>
                <Divider/>
                </>
              )) 
            }        
          </List>
          </DialogContent>
        <DialogActions>
          <PrettyButton onClick={handleAddCancel} color="primary">
            Cancel
          </PrettyButton>
          <PrettyButton onClick={handleAddCancel} color="primary">
            Select
          </PrettyButton>
        </DialogActions>
      </Dialog>
      <PrettyButton>
        WOAH!
      </PrettyButton>
    </ButtonDiv>
    <div className={classes.root}>
      <List>
        {
          currClothing.map((currClothes, key) => (
            <>
            <ListItem button>
              <ListImage src={icons[key]}/>
              <ListItemText primary={currClothes}/>
            </ListItem>
            <Divider/>
            </>
          )) 
        }        
      </List>
    </div>
    </>
  );
}

export default WardrobeContainer