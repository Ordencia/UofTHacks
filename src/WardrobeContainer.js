import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const WarddrobeContainer = (props) => {
    const numOutfits = props.numOutfits

    const useStyles = makeStyles(theme => ({
        root: {
          width: '100%',
          height: 400,
          maxWidth: 300,
          backgroundColor: theme.palette.background.paper,
        },
      }));
      
      function renderRow(props) {
        const { index, style } = props;
      
        return (
          <ListItem button style={style} key={index}>
            <ListItemText primary={`Item ${index + 1}`} />
          </ListItem>
        );
      }
      
        renderRow.propTypes = {
        index: PropTypes.number.isRequired,
        style: PropTypes.object.isRequired,
      };
      
        const classes = useStyles();

        return (
          <div className={classes.root}>
            <FixedSizeList height={400} width={300} itemSize={64} itemCount={5}>
              {renderRow}
            </FixedSizeList>
          </div>
        );
      }

export default WarddrobeContainer