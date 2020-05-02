import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';


class App extends React.Component {
   constructor (props) {
      super(props)
   }

   render(){
      return(
         <div>
            <Navbar/>
            <Carousel/>
            <Footer/>
         </div>
      );
   }
}


export default App;