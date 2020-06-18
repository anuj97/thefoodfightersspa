import React from 'react';
import Carousel from './Carousel';
import UploadModal from './UploadModal';
import TermsModal from './TermsModal';
import { Switch } from 'react-router-dom';

export default function HomePage() {
        return (
            <>
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
                <UploadModal/>
                <TermsModal/>
            </>
        )
}