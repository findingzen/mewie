function getParameter( parameterName ) {
    let parameters = new URLSearchParams( window.location.search );
    return parameters.get( parameterName );
}

let vidURL = '';

switch (getParameter( 'video') ) {
    
    case 'jamais' : 
        vidURL = '<iframe title="vimeo-player" src="https://player.vimeo.com/video/429082429?h=8cd03ca29a" width="640" height="400" frameborder="0" allowfullscreen></iframe>';  
        break;
    case 'coup' : 
        vidURL = '<iframe title="vimeo-player" src="https://player.vimeo.com/video/429099654?h=3bb422faf7" width="640" height="400" frameborder="0" allowfullscreen></iframe>';  
        break;  
    case 'droid' : 
        vidURL = '<iframe title="vimeo-player" src="https://player.vimeo.com/video/429105097?h=d1219247df" width="640" height="400" frameborder="0" allowfullscreen></iframe>';
        break; 
    case 'vegetale' : 
        vidURL = '<iframe title="vimeo-player" src="https://player.vimeo.com/video/429086249?h=e56d562c75" width="640" height="400" frameborder="0" allowfullscreen></iframe>';
        break;     
    case 'goals' : 
        vidURL = '<iframe title="vimeo-player" src="https://player.vimeo.com/video/429105097?h=d1219247df" width="640" height="400" frameborder="0" allowfullscreen></iframe>';
        break; 
    case 'rosenkranz' : 
        vidURL = '<iframe title="vimeo-player" src="https://player.vimeo.com/video/429105097?h=d1219247df" width="640" height="400" frameborder="0" allowfullscreen></iframe>';
        break; 
/*       case 'tgsgtwsd' : 
        vidURL = '<iframe title="vimeo-player" src="" width="640" height="400" frameborder="0" allowfullscreen></iframe>';
        break;      */
    default : 
        vidURL = 'not found';     

} 

document.write(vidURL);
