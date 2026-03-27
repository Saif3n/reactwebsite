import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, link, languages }) => {
  return (
    <div className="project-card">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div
          className="proj-txtx"
          onClick={() => {
            if (link) window.open(link, '_blank');
          }}
        >
          <h4>{title}</h4>
          <span>{description}</span>
          <h6>{languages}</h6>
        </div>
      </div>
    </div>
  );
};
