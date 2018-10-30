import React from "react";
import styled from "styled-components";

const Results = styled.div`
  display: grid;
  grid-gap: 10px 20px;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
}`

const Reaction = styled.div`
  display: inline-block;
}`

const DrugHeader = styled.h2`
  text-transform: uppercase;
  padding: 0 0 0.5rem;
  margin: 0;
  font-weight: normal;
  font-size: 16px;
}`

const DrugGroup = styled.div`
  padding: 10px 0;
}`

const ReagentLabel = styled.div`
  display: inline-block;
  width: 50%;
  font-weight: lighter;
  text-transform: uppercase;
  font-size: 12px;
  padding-bottom: 2px;
}`

const DrugLabel = styled.div`
  display: inline-block;
  width: 50%;
  overflow: hidden;
  user-select: all;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 0;
  &:before {
    content: 'drug';
    display: block;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0.5;
  }
}`

const ReactionColor = styled.div`
  width: 101%;
  display: block;
  text-align: left;
  padding: 10px;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px solid black;
}`

const reactionFor = ({ drug, reagent, reaction }) => (
  <Reaction className="result g-h-left p-r">
    <div>
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
