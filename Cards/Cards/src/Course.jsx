import React from 'react'

const   Course = ({img,title, description}) => {
    // const title = props.title;
    // const description = props.description;
    // const {title, description} = props;
    return (
    <div>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={img} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">{title}</p>
      </div>
    </div>

    <div class="content">
        {description}
    </div>
  </div>
</div>
    </div>
  )
}

export default Course
