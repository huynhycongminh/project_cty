import React from "react";
import Story from "./Story.component";
import"./storyList.scss"
export default function StoryList({avatar_story,image_story,name_story}) {
  return (
    <div className=" storyList  space-x-2 p-6">
      <Story
        image_story={image_story}
        avatar_story={avatar_story}
        name_story={name_story}
     />
 
  
    </div>
  );
}
