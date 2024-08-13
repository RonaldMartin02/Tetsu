import { useParams, useNavigate } from 'react-router-dom';

export default function Video() {

    const { videoId } = useParams();
    const srcString = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <iframe 
            width="560" 
            height="315" 
            src={srcString}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
            </iframe>
        </div>
    );
}