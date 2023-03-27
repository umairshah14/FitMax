import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-white text-lg-left border-none border-1" >
      <MDBContainer className="p-4 pb-0">
        <form action="">
          <MDBRow className="d-flex justify-content-center">
            <div className="text-center p-3">
            © 2023 Copyright: Made by Umair,  Zeynep,  Antonio and  Adil
            </div>
          </MDBRow>
        </form>
      </MDBContainer>
    </MDBFooter>
  );
}
