## Branch Goal

- Whenever I click anywhere inside the picture container, generate a div on the right side our mouse pointer / the area that we clicked on the picture.
  - Start by clicking on the image, and having the console log the exact coordinates of click location (X & Y);

If we get the size of the element - and then the coordinates within that element where the pokemon we are searching for is located - then we can come up with a formula that takes in the size, and calculates if the input corrrdinates represent the area where the pokemon is.

Aslong as we make the calculations based on a set size, we can always asume the pokemon will be in the same location. For example, in a graph, (1,1) on a 10px/10px square, will always relatively represent the same spot, if we were to warp the square to whatever size we want. BEcause its RELATIVE to the size of its container.
