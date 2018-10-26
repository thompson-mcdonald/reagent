import React from "react";
import styled from "styled-components";

const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
}`

const Reaction = styled.div`
  display: inline-block;
  background-color: #eee;
  padding: 20px;
  & div {
    margin-top: 10px;
  }
}`

const DrugHeader = styled.h2`
  text-transform: uppercase;
  padding: 0 0 20px;
  font-weight: normal;
}`

const DrugGroup = styled.div`
  padding: 10px 0;
}`

const ReagentLabel = styled.div`
  display: inline-block;
  width: 50%;
  overflow: hidden;
  user-select: all;
  text-align: right;
  font-weight: normal;
  text-transform: uppercase;
  &:before {
    content: 'reagent';
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.5;
  }
}`

const DrugLabel = styled.div`
  display: inline-block;
  width: 50%;
  overflow: hidden;
  user-select: all;
  font-weight: normal;
  text-transform: uppercase;
  &:before {
    content: 'drug';
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.5;
  }
}`

const ReactionColor = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  padding: 10px 5px;
  text-transform: uppercase;
  border-radius: 4px;
}`

const reactionFor = ({ drug, reagent, reaction }) => (
  <Reaction className="result g-h-left p-r">
    <div>
      <DrugLabel>{drug}</DrugLabel>
      <ReagentLabel>{reagent}</ReagentLabel>
    </div>
    <ReactionColor className={`reaction-bg ${reagent}-${drug}`}>{reaction}</ReactionColor>
  </Reaction>
);

export default ({ drug, reagents, reactions }) => (
  <DrugGroup>
    <DrugHeader>{drug}</DrugHeader>
    <Results>
      {reagents.map(reagent =>
        reactionFor({ drug, reagent, reaction: reactions[reagent] })
      )}
    </Results>
  </DrugGroup>
);
