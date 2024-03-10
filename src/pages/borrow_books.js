import React from "react";
import { GlobalStyle, HeadTitle } from "../components/Styles";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  Card,
  CardBody,
  CardImage,
  CardName,
  CardDescription,
} from "../components/Styles";
import book17 from "../images/Harry6.jpeg";
import book5 from "../images/only-love-can-hurt-like-this-book.png";


const Borrow = () => {
  return (
    <div>
      <GlobalStyle />
      <NavbarHead />
      <HeadTitle style={{ marginTop: "130px" }}>Borrowed Books</HeadTitle>
      <Card>
        <CardImage src={book17} alt="Harry Potter and The Half Blood Prince by JK Rowlings" />
        <CardBody>
          <CardName>Harry Potter and The Half Blood Prince</CardName>
          <CardDescription>Harry Potter and The Half Blood Prince.</CardDescription>
        </CardBody>
      </Card>
      <Card>
            <CardImage src={book5} alt="Only Love Can Hurt Like This" />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>Only Love Can Hurt Like This.</CardDescription>
            </CardBody>
          </Card>
      <FooterBottom />
    </div>
  );
};

export default Borrow;
