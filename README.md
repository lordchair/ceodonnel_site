# The Goal
Build a website for my oldest friend, Clinton O'donnell

## The Spec
Clinton approached me with a concept: he wanted a site that would display a 3D model that included 3 TV screens, these would each show a clip / title and link to a different endpoint. 
At the start, I received three video files and this fully rendered 3D scene
![initial asset](https://raw.githubusercontent.com/lordchair/ceodonnell_site/master/assets/archive/background_wide.png)

## The Process

### First Pass
The first pass used only the given assets. I transparentized the inside of the three TV screens in photoshop, then positioned the video files behind the gaps. This kind of worked, but only displayed properly at the exact aspect ratio of the image

### Second Pass
This time around I requested 3 rendered versions of the site: one wide, one square, and one narrow aspect ratio. I used media queries to switch between the three versions. This strategy worked better than the first pass, but was clunky and usually cut off portions of the scene. At this point I found and modified a tool to help me get bounding boxes within an image, you can check it out in annotate.html

### Third Pass
I realized that this would only work well if I could break out of the pre-rendered scene. I requested individual renders of each object and their shadows which I combined with imagemagick into 3 pngs with transparent shadows. I then picked 4 key points for the scene (pageWidth/pageHeight/image1X/image1Y/image2X/image2Y/image3X/image3Y) and solved the system of equations to find how I would need to position the three objects so that they would work for any reasonable aspect ratio. With that done, I just needed to polish things up. I used imagemagick to create animated gifs out of the video files to reduce bandwidth and CPU use, and I modified how I was handling user interaction so that the hover effects would work by double tapping on mobile. 
