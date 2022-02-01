import React from 'react'
import { Container, AppBar, Typography, Grow, Grid} from  '@material-ui/core'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import useStyles from './styles'

import memories from './images/memories.png'
// function App() {
//   const [name, setName] = useState("")

//   async function postName(e) {
//     e.preventDefault();
  
//     try {
  
//       await axios.post('http://localhost:5000/post_name', {
//         name
//       })
  
//     } catch (error) {
  
//       console.log(error)
//     }
//   }


//   return (
//     <div className="App">
//       <form onSubmit={ postName }>
//         <input type="text" value={ name } onChange={(e) => setName(e.target.value)} />
//         <button type="submit">Send Name</button>
//       </form>
//     </div>
//   )
// }




const App = () => {
	const classes = useStyles()
    return (
        <Container maxwidth='lg'>
          <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">Memories</Typography>
            <img src={memories} alt="memories" height="350" />
          </AppBar>
          <Grow in>
            <Container >
              <Grid container justify="space-between" alignItems="stretch" spacing={ 3 }>
                <Grid item xs={12} sm={7}>
					<Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
					<Form />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
    )
}

export default App;