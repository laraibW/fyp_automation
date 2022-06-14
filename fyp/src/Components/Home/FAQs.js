
import 'bootstrap/dist/css/bootstrap.min.css';
function FAQs(){

    return(
        <div>
            <div className="topBar">
          <p className="dashboard"><b>
            FAQs
            </b>
          </p>
          </div>
       
            <div className="faq" >
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <h3>
                        Sorry! There are no questions at the time!
                    </h3>
                    <hr></hr>
                    <form>
                    <h4>Search the FAQ Area: </h4> <input type="text" class="form-control"></input>
                    <br></br>
                    <input type="button" value="Search!" class="btn btn-secondary"></input>
                    </form>
            </div>
            </div>
    );

}
export default FAQs;