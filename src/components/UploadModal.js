import React from 'react';

export default function UploadModal() {
        return(
            <div className="modal fade" id="exampleModalCenterUpload" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterUploadTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterUplodTitle">Upload your media</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                {/* <form id="form1" action="runner.html" method="post">
                    <input type='file' id="imgInp" />
                    <br>
                    <div className="mx-auto" style="width: 150px;">            
                    <img id="blah" src="#" alt="your image" style="height: 200; width: auto;" />
                    </div>
                </form> */}
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Upload</button>
                </div>
            </div>
            </div>
        </div>
        );
}