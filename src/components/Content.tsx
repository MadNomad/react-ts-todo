import { FC } from "react";
import contentLogo from "./../images/Blue-notes.png";
import { styled } from "@mui/system";
import TodoListItems from "./TodoListItems";

interface Props {
  selectedCategory: string;
}

const Content: FC<Props> = ({ selectedCategory }) => {
  return (
    <>
      {selectedCategory === "" ? (
        <StyledStartDiv>
          <StyledContentLogo src={contentLogo}></StyledContentLogo>
          <StyledQuote>“Someday is not a day of the week”</StyledQuote>
          <div>Dennis Brennan-Nelson</div>
        </StyledStartDiv>
      ) : (
        <StyledTodoDiv>
          <TodoListItems selectedCategory={selectedCategory} />
        </StyledTodoDiv>
      )}
    </>
  );
};

const StyledStartDiv = styled("div")({
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
const StyledQuote = styled("div")({ fontStyle: "italic", paddingTop: "25px" });
const StyledTodoDiv = styled("div")({
  height: "85vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "15px",
});
const StyledContentLogo = styled("img")({ height: "180px", width: "180px" });

export default Content;
