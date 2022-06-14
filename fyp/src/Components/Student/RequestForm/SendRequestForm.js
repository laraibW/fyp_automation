
import "./requestForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function SendRequestForm() {
  function myFunction() {
    alert("Your request has been sent!")
}
return(
<div>
<div className="topBar">
          <p className="dashboard"><b>
            Request Form
            </b>
          </p>
          </div>
<div className="divStyle">
<form action='/StudentLogin' onSubmit={myFunction}>
<div className="row pt-5 mx-auto">
<div className="col-8 form-group mx-auto">
<input type="text" class="form-control" placeholder="Name" name="name" required />
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email"  placeholder="Email Address" name="email" required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="text"  placeholder="Subject" name="subject" required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<textarea class="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
</div>
<div className="col-8 pt-3 mx-auto">
<button type='submit' class="btn btn-success">Send Request</button>
</div>



</div>
</form>
</div>
</div>
);

}
export default SendRequestForm;