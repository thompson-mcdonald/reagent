# Gabi's Reagent Companion

This is an app designed for people using reagent drug testing kits at home, and for those wondering what testing kit(s) they should be using. This will hopefully allow users to interact with the results of their tests in a less obtuse and more ubiquitous, 2018 way.

The app will take in data from ![reagent test chart](https://www.reagent-tests.uk/wp/wp-content/uploads/2015/12/Raw-reagent-table.jpg) and compile the relevant results in the `/results`. I'm guessing what will happen there is an array of the relevant compound reactions from selected testing kits that will iterate thru, rendering the `result` component with the right info.


## Getting Started

Clone the repo; have npm/yarn installed; download necessary packages

THEN; because I'm very silly you'll need to run

` yarn start `

and

` yarn sass `


concurrently

## The Data

All the data from the above chart is in data.json which you'll find in the src folder. It is currently stored like this:

```
"ibuprofen": {
  "reactions": {
    "marquis": "no reaction",
    "liebermann": "red",
    "froehde": "no reaction",
    "mandelin": "dark brown",
    "mecke": "light brown"
    }
}
```

I'm not dead set on this so if you have any ideas on how better to store this, feel free to open an issue.

## Stuff to be done still

- [x] Front-end components
- [ ] Routing of app
- [x] Mass Data Entry
- [ ] Logic for results
- [ ] Testing
- [ ] Tighten up copy
- [ ] Shipdat ting
