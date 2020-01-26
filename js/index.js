$("#imgInp").change(function() {
if (this.files && this.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
        $('#blah').attr('src', e.target.result);
    } 
    
    reader.readAsDataURL(this.files[0]);
    }
});