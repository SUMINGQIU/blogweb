---
title:
date: 2023-06-22 15:36:35
comments: false
css: /source/css/home.css
---

<!-- <img class="modeling" src="https://cdn-icons-png.flaticon.com/512/2103/2103652.png" alt=""> -->
<!-- <h3 style= "color: #11999E; margin-top: 100px; font-family: 'Montserrat', sans-serif;"><strong>AI-Enabled Tactical Route Planning</strong> <em>--- Student Researcher</em></h3> -->
<h3><strong>AI-Enabled Tactical Route Planning</strong> <em>--- Student Researcher</em></h3>
<div class="image-slider">
  <img src="https://sumingqiu.files.wordpress.com/2022/11/human_collab8.jpg" alt="Image 1">
  <img src="https://sumingqiu.files.wordpress.com/2022/11/human_collab8.jpg" alt="Image 1">
</div>
<p>
    <ul style="font-size: 17px;">
        To simulate the real-world drone tracking and path planning process, I use air-sim together with Unreal Engine to simulate the car tracking process. Firstly, we built a true-to-real-world environment in Unreal Engine (UE4), as shown in the first picture, which reduced the cost to do the real physical experiments. Then I implement a deep-learning-based depth-map algorithm (Monodepth2) and segmentation algorithm(Detectron2) in the virtual environment. These two methods will generate the 3D occlusion identification and map it into the Unreal Engine virtual environment. Furthermore, we used RRT algorithms for the 2d path planning (Fig 2). We set the starting point (X) and a target point (O). The red line is the optimal path and the green line is all possible paths (Fig 3). After getting the optimal path from above, we change the path into spline in UE4. The planned path in Fig 3 is executed by the virtual agent in Fig 4. In the last step, we designed a spline-based autonomous moving method for agents using a blueprint that also could record real-time position data in TXT format. The recorded position data will be used for the drone to track. This technology can be used for future autonomous driving as drones can assist the car in driving and path planning.
    </ul>
</p>