---
title: Readme
route: /
---

# React OKR UI

A React user interface toolkit for building OKR centric applications.

- [React OKR UI](#react-okr-ui)
  - [Features](#features)
    - [Components](#components)
    - [Services](#services)
    - [Configuration](#configuration)
  - [First principles](#first-principles)

## Features

React OKR UI provides everything you'll need to quickly build OKR experiences Including:

### Components

A collection of highly compositional components for a wide range of possible OKR UI requirements:

- **OKR**: contain your OKR and configure
- **Objective**: contain and layout your objective
- **Goal**: display your objective, and calculate result text from props
- **Due date**: process and display a due date with label
- **Progress bar:** display a provided percentage value, or calculate percentage progress from results
- **Result:** contain and layout your key result
- **Current value:** display a current value, with label in a specific metric (e.g., percentage, money, etc.)

### Services

- Calculate progress: score results and

### Configuration

As much as possible OKR UI has been designed to apply to a range of requirements. Configure:

- **Metrics:** what metrics do you measure? Keep results consistent with pre-defined metrics.
- **Grades:** how do you measure success? Customize how progress and score is graded.

## First principles

- **Strongly compositional:** quickly scaffold UI and maintain data visibility.
- **Minimal dependencies:** low bloat. Just components and a few helpful utilities.
- **Un-opinionated:** limited assumptions. Manage state, data, style, your way.
