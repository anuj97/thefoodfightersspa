import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';
import TermsModal from './TermsModal';
import UploadModal from './UploadModal';

class App extends React.Component {
   constructor (props) {
      super(props)
   }

   render(){
      return(
         <div>
            <Navbar/>
            <Carousel/>
            <div className="row mx-md-n5">
               <div className="col px-md-12">
                  <div className="p-3 border bg-light"></div>
               </div>
            </div>
            <br></br>
            <div className="mx-auto" style={{'width': '400px'}}>
               <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style={{'width': 'inherit'}}>Enter the Dojo!</button>
            </div>
            <Footer/>
            <UploadModal/>
            <TermsModal/>
         </div>
      );
   }
}


export default App;