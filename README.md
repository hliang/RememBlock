# RememBlock - a memory game

Play it here: https://hliang.github.io/RememBlock/

<img alt="demo-gif" src="./public/assets/img/rememblock.gif">

### Game Rules
- Click a block to earn points, don't click the same block more than once.
- Every time a block is clicked, the blocks shuffle in a random order.
- You get one point every time you click.
- Game over if there is an incorrect guess. A new game will start.
- You can turn on **hints** at the bottom if you lose your memory :)

So try to remember what have been clicked, and have fun!

### Under the hood
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Written in JSX with React components
- Use states, props and callbacks to pass data between components

### Side notes
To generate those small and similar images, I searched internet for large images (logos, dogs, etc) in NxM table format, then used ImageMagick to cut the image in to smaller tiles. For example, crop it in to 4x5 (columns x rows) tiles.
```
convert lips.jpg -crop 4x5@  +repage  +adjoin -scene 1 lips_%d.jpg
```
By setting `-scene 1 lips_%d.jpg`, the output image file names will start from number 1 (instead of default 0). You will get files lips_1.jpg, lips_2.jpg... lips_20.jpg.

See more ImageMagick usage at http://www.imagemagick.org/Usage/crop/
