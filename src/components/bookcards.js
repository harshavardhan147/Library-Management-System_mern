import React, { useRef, useEffect } from "react";

import {
  PreviousButton,
  NextButton,
  BorrowListButton,
  BooksList,
  Title,
  Card,
  CardBody,
  CardContainer,
  CardImage,
  CardName,
  CardDescription,
} from "./Styles";

import leftArrowImage from "../images/left-arrow.png";
import rightArrowImage from "../images/right-arrow.png";
import book1 from "../images/Twilight.jpg";
import book2 from "../images/New Moon.jpg";
import book3 from "../images/Eclips.jpg";
import book4 from "../images/Breakdown.jpg";
import book5 from "../images/Breakdown2.jpg";
import book6 from "../images/Mid-night Sun.jpg";
import book7 from "../images/a-death-at-the-party-book.png";
import book8 from "../images/the-god-of-endings-book.png";
import book9 from "../images/now-you-see-us-book.png";
import book10 from "../images/dust-child-book.png";
import book11 from "../images/the-mostly-true-story-of-tanner-and-louise-book.png";
import book12 from "../images/homecoming-book.png";
import book13 from "../images/symphony-of-secrets-book.png";
import book14 from "../images/silver-alert-book.png";
import book15 from "../images/only-love-can-hurt-like-this-book.png";
import book16 from "../images/Harrypotter-1.jpg";
import book17 from "../images/Harrypotter2.jpg";
import book18 from "../images/Harrp3.jpg";
import book19 from "../images/Harryp4.jpeg";
import book20 from "../images/Harry5.jpeg";
import book21 from "../images/Harry6.jpeg";
import book22 from "../images/hp7.jpeg";

const BookCards = () => {
  useEffect(() => {
    const handleResize = () => {
      cardContainerRef1.scrollLeft = 0; // Reset scroll position on resize
      cardContainerRef2.scrollLeft = 0; // Reset scroll position on resize
      cardContainerRef3.scrollLeft = 0; // Reset scroll position on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardContainerRef1 = useRef(null);
  const cardContainerRef2 = useRef(null);
  const cardContainerRef3 = useRef(null);

  const handleNextClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft += containerWidth + 20;
  };

  const handlePreviousClick = (ref) => {
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollLeft -= containerWidth + 20;
  };

  return (
    <div>
      <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
        Top Trending Books
      </Title>
      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef1)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef1)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef1}>
          <Card>
            <CardImage src={book1} alt="Age of Vice by Deepti Kapoor" />
            <CardBody>
              <CardName>Twilight</CardName>
              <CardDescription>Twilight by Stephen meyers.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book2}
              alt="City Under One Roof by Iris Yamashita"
            />
            <CardBody>
              <CardName>Twilight New Moon</CardName>
              <CardDescription>
              Twilight New Moon by Stephen meyers.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book3}
              alt="The World and All That It Holds by Aleksandar Hemon"
            />
            <CardBody>
              <CardName>Twilight eclips</CardName>
              <CardDescription>
                Twilight eclips by Stephen meyers.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book4} alt="Maame by Jessica George" />
            <CardBody>
              <CardName>Twilight Breaking down part-1</CardName>
              <CardDescription>Twilight Breaking down part-1 by Stephen meyers.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Twilight Breaking down part-2</CardName>
              <CardDescription>Twilight Breaking down part-2 by Stephen meyers.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book6}
              alt="What Happened to Ruthy Ramirez by Claire Jiménez"
            />
            <CardBody>
              <CardName>Twilight Midnight Sun</CardName>
              <CardDescription>
              Twilight Midnight Sun by Stephen meyers.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="A Death at the Party by Amy Stuart" />
            <CardBody>
              <CardName>A Death at the Party</CardName>
              <CardDescription>
                A Death at the Party by Amy Stuart.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book8}
              alt="The God of Endings by Jacqueline Holland"
            />
            <CardBody>
              <CardName>The God of Endings</CardName>
              <CardDescription>
                The God of Endings by Jacqueline Holland.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book9} alt="Now You See Us by Balli Kaur Jaswal" />
            <CardBody>
              <CardName>Now You See Us</CardName>
              <CardDescription>
                Now You See Us by Balli Kaur Jaswal.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book10} alt="Dust Child by Nguyễn Phan Quế Mai" />
            <CardBody>
              <CardName>Dust Child</CardName>
              <CardDescription>
                Dust Child by Nguyễn Phan Quế Mai.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book11}
              alt="The Mostly True Story of Tanner & Louise by Colleen Oakley"
            />
            <CardBody>
              <CardName>The Mostly True Story of Tanner & Louise</CardName>
              <CardDescription>
                The Mostly True Story of Tanner & Louise by Colleen Oakley.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book12} alt="Homecoming by Kate Morton" />
            <CardBody>
              <CardName>Homecoming</CardName>
              <CardDescription>Homecoming by Kate Morton.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book13}
              alt="Symphony of Secrets by Brendan Slocumb"
            />
            <CardBody>
              <CardName>Symphony of Secrets</CardName>
              <CardDescription>
                Symphony of Secrets by Brendan Slocumb.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book14} alt="Silver Alert by Lee Smith" />
            <CardBody>
              <CardName>Silver Alert</CardName>
              <CardDescription>Silver Alert by Lee Smith.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book15}
              alt="Only Love Can Hurt Like This by Paige Toon"
            />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>
                Only Love Can Hurt Like This by Paige Toon.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book16} alt="Paper Names by Susie Luo" />
            <CardBody>
              <CardName>Paper Names</CardName>
              <CardDescription>Paper Names by Susie Luo.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book17}
              alt="The Collected Regrets of Clover by Mikki Brammer"
            />
            <CardBody>
              <CardName>The Collected Regrets of Clover</CardName>
              <CardDescription>
                The Collected Regrets of Clover by Mikki Brammer.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
            <CardBody>
              <CardName>Yellowface</CardName>
              <CardDescription>Yellowface by R.F. Kuang.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book19}
              alt="The Second Ending by Michelle Hoffman"
            />
            <CardBody>
              <CardName>The Second Ending</CardName>
              <CardDescription>
                The Second Ending by Michelle Hoffman.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book20} alt="The Wishing Game by Meg Shaffer" />
            <CardBody>
              <CardName>The Wishing Game</CardName>
              <CardDescription>
                The Wishing Game by Meg Shaffer.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book21}
              alt="Same Time Next Summer by Annabel Monaghan"
            />
            <CardBody>
              <CardName>Same Time Next Summer</CardName>
              <CardDescription>
                Same Time Next Summer by Annabel Monaghan.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book22} alt="Banyan Moon by Thao Thai" />
            <CardBody>
              <CardName>Banyan Moon</CardName>
              <CardDescription>Banyan Moon by Thao Thai.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
        </CardContainer>
      </BooksList>

      <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
        Best Selling Books 
      </Title>

      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef2)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef2)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef2}>
          <Card>
            <CardImage src={book16} alt="HarryPotter by J.K Rowlings" />
            <CardBody>
              <CardName>HARRY POTTER SORCERERS STONE</CardName>
              <CardDescription>Harry potter SORCERERS STONE by J.K Rowlings.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book17}
              alt="Harry Potter and the Chamber of Secrets by J.K Rowlings"
            />
            <CardBody>
              <CardName>Harry Potter and the Chamber of Secrets</CardName>
              <CardDescription>
              Harry Potter and the Chamber of Secrets by J.K Rowlings.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book18} alt="Harry Potter and the Prisoner of Azkaban by J.K Rowlings" />
            <CardBody>
              <CardName>Harry Potter and the Prisoner of Azkaban</CardName>
              <CardDescription>Harry Potter and the Prisoner of Azkaban by J.K Rowlings</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book19}
              alt="Harry Potter and the Goblet of Fire by J.K.Rowlings"
            />
            <CardBody>
              <CardName>Harry Potter and the Goblet of Fire</CardName>
              <CardDescription>
              Harry Potter and the Goblet of Fire by J.K.Rowlings.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book20} alt="Harry Potter and the Order of the Phoenix by J.K.Rowlings" />
            <CardBody>
              <CardName>Harry Potter and the Order of the Phoenix</CardName>
              <CardDescription>
              Harry Potter and the Order of the Phoenix by J.K.Rowlings.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book21}
              alt="Harry Potter and the Half-Blood Prince by J.K.Rowlings"
            />
            <CardBody>
              <CardName>Harry Potter and the Half-Blood Prince</CardName>
              <CardDescription>
              Harry Potter and the Half-Blood Prince.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book22} alt="Harry Potter and the Deathly Hallows by J.K Rowlings" />
            <CardBody>
              <CardName>Harry Potter and the Deathly Hallows</CardName>
              <CardDescription>Harry Potter and the Deathly Hallows</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>{" "}
          <Card>
            <CardImage
              src={book2}
              alt="City Under One Roof by Iris Yamashita"
            />
            <CardBody>
              <CardName>City Under One Roof</CardName>
              <CardDescription>
                City Under One Roof by Iris Yamashita.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book3}
              alt="The World and All That It Holds by Aleksandar Hemon"
            />
            <CardBody>
              <CardName>The World and All That It Holds</CardName>
              <CardDescription>
                The World and All That It Holds by Aleksandar Hemon.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book4} alt="Maame by Jessica George" />
            <CardBody>
              <CardName>Maame</CardName>
              <CardDescription>Maame by Jessica George.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book6}
              alt="What Happened to Ruthy Ramirez by Claire Jiménez"
            />
            <CardBody>
              <CardName>What Happened to Ruthy Ramirez</CardName>
              <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jiménez.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="A Death at the Party by Amy Stuart" />
            <CardBody>
              <CardName>A Death at the Party</CardName>
              <CardDescription>
                A Death at the Party by Amy Stuart.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book8}
              alt="The God of Endings by Jacqueline Holland"
            />
            <CardBody>
              <CardName>The God of Endings</CardName>
              <CardDescription>
                The God of Endings by Jacqueline Holland.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book1} alt="Age of Vice by Deepti Kapoor" />
            <CardBody>
              <CardName>Age of Vice</CardName>
              <CardDescription>Age of Vice by Deepti Kapoor.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book9} alt="Now You See Us by Balli Kaur Jaswal" />
            <CardBody>
              <CardName>Now You See Us</CardName>
              <CardDescription>
                Now You See Us by Balli Kaur Jaswal.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book10} alt="Dust Child by Nguyễn Phan Quế Mai" />
            <CardBody>
              <CardName>Dust Child</CardName>
              <CardDescription>
                Dust Child by Nguyễn Phan Quế Mai.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book11}
              alt="The Mostly True Story of Tanner & Louise by Colleen Oakley"
            />
            <CardBody>
              <CardName>The Mostly True Story of Tanner & Louise</CardName>
              <CardDescription>
                The Mostly True Story of Tanner & Louise by Colleen Oakley.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book12} alt="Homecoming by Kate Morton" />
            <CardBody>
              <CardName>Homecoming</CardName>
              <CardDescription>Homecoming by Kate Morton.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book13}
              alt="Symphony of Secrets by Brendan Slocumb"
            />
            <CardBody>
              <CardName>Symphony of Secrets</CardName>
              <CardDescription>
                Symphony of Secrets by Brendan Slocumb.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book14} alt="Silver Alert by Lee Smith" />
            <CardBody>
              <CardName>Silver Alert</CardName>
              <CardDescription>Silver Alert by Lee Smith.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book15}
              alt="Only Love Can Hurt Like This by Paige Toon"
            />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>
                Only Love Can Hurt Like This by Paige Toon.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
        </CardContainer>
      </BooksList>

      <Title style={{ marginLeft: "80px", marginTop: "40px" }}>
        All Time Favourites
      </Title>
      <BooksList>
        <PreviousButton onClick={() => handlePreviousClick(cardContainerRef3)}>
          <img src={leftArrowImage} alt="Left arrow" />
        </PreviousButton>
        <NextButton onClick={() => handleNextClick(cardContainerRef3)}>
          <img src={rightArrowImage} alt="Right arrow" />
        </NextButton>

        <CardContainer ref={cardContainerRef3}>
          <Card>
            <CardImage src={book12} alt="Homecoming by Kate Morton" />
            <CardBody>
              <CardName>Homecoming</CardName>
              <CardDescription>Homecoming by Kate Morton.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book13}
              alt="Symphony of Secrets by Brendan Slocumb"
            />
            <CardBody>
              <CardName>Symphony of Secrets</CardName>
              <CardDescription>
                Symphony of Secrets by Brendan Slocumb.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book14} alt="Silver Alert by Lee Smith" />
            <CardBody>
              <CardName>Silver Alert</CardName>
              <CardDescription>Silver Alert by Lee Smith.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book15}
              alt="Only Love Can Hurt Like This by Paige Toon"
            />
            <CardBody>
              <CardName>Only Love Can Hurt Like This</CardName>
              <CardDescription>
                Only Love Can Hurt Like This by Paige Toon.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book1} alt="Age of Vice by Deepti Kapoor" />
            <CardBody>
              <CardName>Age of Vice</CardName>
              <CardDescription>Age of Vice by Deepti Kapoor.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book2}
              alt="City Under One Roof by Iris Yamashita"
            />
            <CardBody>
              <CardName>City Under One Roof</CardName>
              <CardDescription>
                City Under One Roof by Iris Yamashita.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book3}
              alt="The World and All That It Holds by Aleksandar Hemon"
            />
            <CardBody>
              <CardName>The World and All That It Holds</CardName>
              <CardDescription>
                The World and All That It Holds by Aleksandar Hemon.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book4} alt="Maame by Jessica George" />
            <CardBody>
              <CardName>Maame</CardName>
              <CardDescription>Maame by Jessica George.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book5} alt="Essex Dogs by Dan Jones" />
            <CardBody>
              <CardName>Essex Dogs</CardName>
              <CardDescription>Essex Dogs by Dan Jones.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book6}
              alt="What Happened to Ruthy Ramirez by Claire Jiménez"
            />
            <CardBody>
              <CardName>What Happened to Ruthy Ramirez</CardName>
              <CardDescription>
                What Happened to Ruthy Ramirez by Claire Jiménez.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book7} alt="A Death at the Party by Amy Stuart" />
            <CardBody>
              <CardName>A Death at the Party</CardName>
              <CardDescription>
                A Death at the Party by Amy Stuart.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book8}
              alt="The God of Endings by Jacqueline Holland"
            />
            <CardBody>
              <CardName>The God of Endings</CardName>
              <CardDescription>
                The God of Endings by Jacqueline Holland.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book9} alt="Now You See Us by Balli Kaur Jaswal" />
            <CardBody>
              <CardName>Now You See Us</CardName>
              <CardDescription>
                Now You See Us by Balli Kaur Jaswal.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book10} alt="Dust Child by Nguyễn Phan Quế Mai" />
            <CardBody>
              <CardName>Dust Child</CardName>
              <CardDescription>
                Dust Child by Nguyễn Phan Quế Mai.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book11}
              alt="The Mostly True Story of Tanner & Louise by Colleen Oakley"
            />
            <CardBody>
              <CardName>The Mostly True Story of Tanner & Louise</CardName>
              <CardDescription>
                The Mostly True Story of Tanner & Louise by Colleen Oakley.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book16} alt="Paper Names by Susie Luo" />
            <CardBody>
              <CardName>Paper Names</CardName>
              <CardDescription>Paper Names by Susie Luo.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book17}
              alt="The Collected Regrets of Clover by Mikki Brammer"
            />
            <CardBody>
              <CardName>The Collected Regrets of Clover</CardName>
              <CardDescription>
                The Collected Regrets of Clover by Mikki Brammer.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book18} alt="Yellowface by R.F. Kuang" />
            <CardBody>
              <CardName>Yellowface</CardName>
              <CardDescription>Yellowface by R.F. Kuang.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book19}
              alt="The Second Ending by Michelle Hoffman"
            />
            <CardBody>
              <CardName>The Second Ending</CardName>
              <CardDescription>
                The Second Ending by Michelle Hoffman.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book20} alt="The Wishing Game by Meg Shaffer" />
            <CardBody>
              <CardName>The Wishing Game</CardName>
              <CardDescription>
                The Wishing Game by Meg Shaffer.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage
              src={book21}
              alt="Same Time Next Summer by Annabel Monaghan"
            />
            <CardBody>
              <CardName>Same Time Next Summer</CardName>
              <CardDescription>
                Same Time Next Summer by Annabel Monaghan.
              </CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
          <Card>
            <CardImage src={book22} alt="Banyan Moon by Thao Thai" />
            <CardBody>
              <CardName>Banyan Moon</CardName>
              <CardDescription>Banyan Moon by Thao Thai.</CardDescription>
              <BorrowListButton>Borrow Book</BorrowListButton>
            </CardBody>
          </Card>
        </CardContainer>
      </BooksList>
    </div>
  );
};

export default BookCards;
