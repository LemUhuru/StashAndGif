
const appBarStyles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      fontSize: '1.45rem',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  });

  export default appBarStyles;