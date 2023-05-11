![image](https://user-images.githubusercontent.com/111889289/222542161-8ee6e2e0-e5e4-4554-997b-078c9fb9e5d1.png)

# CLIMBUNITY

### Created by: Mark Rattle
ACS-2330 Final Project

- Climbunity is a React app that currently showcases the climbing areas and routes in the Red River Gorge region of Kentucky, USA.
- Data is fully available for the Muir Valley area in "The Red" and will be expanded to eventually include all areas of The Red, or potentially even more regions and states.  All other areas on the front page are hard-coded to go to the Muir Valley.
- Random images are programmatically assigned to areas / walls / climbing routes based on a chosen key
- Built in React, uses react-router for navigation
- Updated design to be responsive to desktop / tablet / mobile viewing modes
- Includes ARIA acessibility tags

## User Stories:
1) Shawn is planning a trip to Muir Valley and wants to quickly find some GPS coordinates for routes on his favourite walls
2) Mark wants to get information about what kind gear is required to be able to climb in the Red River Gorge
3) Mitchell loves to go to The Red, and wants to get updates on new climbing walls and current access issues, and maybe find someone to go climb with as well.

## Wireframes:

Available on Figma: https://www.figma.com/file/O7My9tkn9279W7GH7KarIV/Climbunity?type=design&node-id=0-1&t=Ot1bfPpsfamosVTf-0

### Desktop views:

Landing / Area page:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/97982025-05b1-4a68-b6f7-dfe1f09ccc19)

Wall page:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/c719e17b-341c-4712-856e-5b86e85b6714)

Wall / Route page w/ subsciption modal open:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/57c1d6f3-91f0-48a1-b5bd-1de75392ef42)

Route details:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/645e2790-c053-41bc-8edf-de61c24ba7df)

About page:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/f90a2f5a-c257-4443-a8e8-04095c483f64)

### Mobile views:

Landing / Area page:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/ddb03ff9-507d-45a4-b256-583a0c6632d4)

Wall page:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/07de6a08-5015-44bb-941d-f87c16ad58d7)

Wall / Route page w/ subsciption modal open:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/18048ae5-950b-4eb4-b995-4d297d1c8c30)

Route details:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/56168bc3-3451-4889-9344-8ed718a9c219)

About page:

![image](https://github.com/energeist/acs-2330-climbunity-responsive-design/assets/111889289/eb497fe4-d59e-47f8-9e2a-905a1ba3c44e)

## Project structure
```
|- /public
  |- /images
    |- images.jpg
  |- favicon.ico
  |- index.html
|- /src
  |- /compononets
    |- About.css
    |- About.js
    |- App.css
    |- App.js
    |- ClimbingArea.css
    |- ClimbingArea.js
    |- ClimbingAreasList.css
    |- ClimbingAreasList.js
    |- ClimbingRoute.css
    |- ClimbingRoute.js
    |- ClimbingRouteDetails.css
    |- ClimbingRouteDetails.js
    |- ClimbingWall.css
    |- ClimbingWall.js
    |- Footer.css
    |- Footer.js
    |- Header.css
    |- Header.js
  |- /data
    |- 33 json files
  |- index.css
  |- index.js
|- README.md
|- package.json
|- pagkage-lock.json
```
