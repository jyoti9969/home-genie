import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../css/room.css";

function Room() {
  return (
    <MDBContainer fluid>
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="18" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                    style={{width:"47em",height:"20em"}}
                  >
                    <MDBCardImage
                      src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/b9ab85019b2114ff768626045801cf985372ecee.jpg"
                      fluid
                      style={{width:"47em",height:"20em"}}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
             
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                  style={{marginLeft:"32em"}}
                >
                  <div className="d-flex flex-col align-items-center mb-1">
                  
                  </div>
                  <h3>Libreville House</h3>
                  <p>Sarajpur Road</p>
                  <pre><img alt="/img" style={{height:"2rem"}} src="https://cdn-icons-png.flaticon.com/128/952/952740.png" />  unisex</pre>
                  <pre><img alt="/img" style={{height:"2rem"}} src="https://cdn-icons-png.flaticon.com/128/3159/3159474.png" />  Single, Double, Triple</pre>
                  {/* <pre> <h4 className="mb-1 me-1">$13.99</h4>  <s className="text-danger" >$21.99</s> </pre>  */}
                   
                    
                  <div className="d-flex flex-row align-items-center mb-1">
                  <span className="text-danger mx-2">
                      <s> &#8377; 25000</s>
                    </span>
                    <h6 className="mb-1 me-1 "> &#8377; 18000/mon*</h6>
                    
                  </div>
                  
               
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="danger" size="sm">
                      View Phone No.
                    </MDBBtn>
                    <MDBBtn outline color="danger" size="sm" className="mt-2">
                     Contact Owner
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* -------------------------------------- */}
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="18" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                    style={{width:"47em",height:"20em"}}
                  >
                    <MDBCardImage
                      src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/b9ab85019b2114ff768626045801cf985372ecee.jpg"
                      fluid
                      style={{width:"47em",height:"20em"}}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
             
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                  style={{marginLeft:"32em"}}
                >
                  <div className="d-flex flex-col align-items-center mb-1">
                  
                  </div>
                  <h3>Libreville House</h3>
                  <p>Sarajpur Road</p>
                  <pre><img alt="/img" style={{height:"2rem"}} src="https://cdn-icons-png.flaticon.com/128/952/952740.png" />  unisex</pre>
                  <pre><img alt="/img" style={{height:"2rem"}} src="https://cdn-icons-png.flaticon.com/128/3159/3159474.png" />  Single, Double, Triple</pre>
                  {/* <pre> <h4 className="mb-1 me-1">$13.99</h4>  <s className="text-danger" >$21.99</s> </pre>  */}
                   
                    
                  <div className="d-flex flex-row align-items-center mb-1">
                  <span className="text-danger mx-2">
                      <s> &#8377; 25000</s>
                    </span>
                    <h6 className="mb-1 me-1 "> &#8377; 18000/mon*</h6>
                    
                  </div>
                  
               
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="danger" size="sm">
                      View Phone No.
                    </MDBBtn>
                    <MDBBtn outline color="danger" size="sm" className="mt-2">
                     Contact Owner
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* - ----------------------------------------------------------*/}
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
          <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="18" lg="3" className="mb-4 mb-lg-0">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-zoom hover-overlay"
                    style={{width:"47em",height:"20em"}}
                  >
                    <MDBCardImage
                      src="https://cofynd-staging.s3.ap-south-1.amazonaws.com/images/original/b9ab85019b2114ff768626045801cf985372ecee.jpg"
                      fluid
                      style={{width:"47em",height:"20em"}}
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
             
                <MDBCol
                  md="6"
                  lg="3"
                  className="border-sm-start-none border-start"
                  style={{marginLeft:"32em"}}
                >
                  <div className="d-flex flex-col align-items-center mb-1">
                  
                  </div>
                  <h3>Libreville House</h3>
                  <p>Sarajpur Road</p>
                  <pre><img alt="/img" style={{height:"2rem"}} src="https://cdn-icons-png.flaticon.com/128/952/952740.png"  />  unisex</pre>
                  <pre><img alt="/img" style={{height:"2rem"}} src="https://cdn-icons-png.flaticon.com/128/3159/3159474.png" />  Single, Double, Triple</pre>
                  {/* <pre> <h4 className="mb-1 me-1">$13.99</h4>  <s className="text-danger" >$21.99</s> </pre>  */}
                   
                    
                  <div className="d-flex flex-row align-items-center mb-1">
                  <span className="text-danger mx-2">
                      <s> &#8377; 25000</s>
                    </span>
                    <h6 className="mb-1 me-1 "> &#8377; 18000/mon*</h6>
                    
                  </div>
                  
               
                  <div className="d-flex flex-column mt-4">
                    <MDBBtn color="danger" size="sm">
                      View Phone No.
                    </MDBBtn>
                    <MDBBtn outline color="danger" size="sm" className="mt-2">
                     Contact Owner
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
     
    </MDBContainer>
  );
}

export default Room;
