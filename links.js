var fullWidth = window.innerWidth - 200;
var fullHeight = window.innerHeight - 250;

dropLinks();

/* 
<a class="fade-in-link" href="vimeo.html?video=jamais">jamais *</a><br>
<a class="fade-in-link" href="vimeo.html?video=droid">this is droid. :: representation</a><br>
<a class="fade-in-link" href="vimeo.html?video=coup">* Un Coup de Dés</a><br>
<a class="fade-in-link" href="vimeo.html?video=vegetale">maison végétale</a><br>
<a class="fade-in-link" href="vimeo.html?video=rosenkranz">Rosenkranz</a><br>
<a class="fade-in-link" href="vimeo.html?video=tgsgtwsd">thank god she got there when she did</a><br>
<a class="fade-in-link" href="vimeo.html?video=goals">Goals for Tue 5/5 day after I was tr…</a><br>
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function dropLinks() {
    await sleep(22000);

    var links =    ['jamais|jamais *',
                    'droid|this is droid. :: representation',
                    'coup|* Un Coup de Dés',
                    'vegetale|maison végétale',
                    'rosenkranz|Rosenkranz',
                    'goals|Goals for Tue 5/5 day after I was tr…'
                    ];


    for (var i = 0; i < links.length; i++) {
        const linkPart = links[i].split('|');
        let linkParam = linkPart[0];
        let linkTitle = linkPart[1]; 
        
        var a = document.createElement('a');
        a.className = 'fade-in-link' // or else it will use the base style for anchor tags
        a.href = 'vimeo.html?video=' + linkParam;
        a.title = linkTitle;
        var linkText = document.createTextNode(linkTitle);
        a.appendChild(linkText);
        
        //var text = links[i];
       
        a.style.position = "absolute";
        a.style.left = Math.round(Math.random() * fullWidth) + "px";
        a.style.top = Math.round(Math.random() * fullHeight) + "px";
        document.body.appendChild(a);
     

    }            

  
  }