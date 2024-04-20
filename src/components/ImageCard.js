import React from 'react';

const ImageCard = ( {image}) => {
    const tags = image.tags.split(',');
  return (
    <div className = "max-w-sm rounded-lg overflow-hidden shadow-2xl transform transition duration-500 hover:scale-110">
      <img src = {image.webformatURL} alt = "" className="w-full " />
      <div className="px-6 py-4 text-center text-gray-700 font-mono">
        <div className="font-bold text-gray-700 text-2xl mb-2 text-center">
          Photo By {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>  
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <br/>
          <li>
            <strong>URL: </strong>
            <a className="font-extrabold text-teal-700 text-xl mb-2 " href={image.pageURL} rel="noreferrer" target="_blank">Click Here...</a>
            
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 text-center">
        {tags.map((tag, index) => (
            <span key = {index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 font-mono">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;