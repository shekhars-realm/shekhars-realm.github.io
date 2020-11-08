var themeColors = {
    "Dark Blood": ["#e50914", "#141414", "white", "myAvatar_red.svg"],
    "OJ": ["#f7941d", "white", "black", "myAvatar_org.svg"],
    "Fresh Purp": ["rgb(117,16,247)",  "white",  "black", "myAvatar_purp.svg"],
    "Green Hit": ["#3AAFA9","#17252A", "white", "myAvatar_grn.svg"],
    "Monochrome": ["#141414", "lightgrey", "black", "myAvatar_blk.svg"]
}

const rootEl = document.querySelector(':root');
var mySvg = document.getElementById("my__svg")



var techStack = ["ReactJS", "NodeJS", "Redux", "MongoDB", "JavaScript"];
var counter = 0;
var elem = document.getElementById("fliptext");
var inst = setInterval(change, 2000);


function change() {
    $('.item').toggleClass('flipped');
    $('#fliptext').toggleClass('back');
    elem.innerHTML = techStack[counter];
    counter++;
    if (counter >= techStack.length) {
        counter = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}



jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});



$("#myChart").fadeIn(function() {
    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['JavaScript', 'HTML 5', 'CSS 3', 'ReactJS', 'Redux', 'NodeJS', 'MongoDB', 'Firebase', 'Docker', 'Kubernetes'],
            datasets: [{
                label: '# of Votes',
                data: [10, 9, 9, 10, 9, 9, 8, 9, 7, 7, 0],
                backgroundColor: [
                    'rgb(117,16,247, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgb(117,16,247, 0.2)',
                    'rgba(123, 12, 25, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgb(117,16,247, 0.2)',
                    'rgba(255, 89, 64, 0.2)',
                    'rgba(55, 159, 64, 0.2)',
                    'rgb(117,16,247, 0.2)'
                ],
                borderColor: [
                    'rgb(117,16,247, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgb(117,16,247, 1)',
                    'rgba(123, 12, 25, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgb(117,16,247, 1)',
                    'rgba(255, 89, 64, 1)',
                    'rgba(55, 159, 64, 1)',
                    'rgb(117,16,247, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
        }
    });

})

var pie = document.getElementById('myPieChart')
var myPieChart = new Chart(pie, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [10, 25, 65],

            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],

        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Deployment',
            'Backend',
            'Frontend'
        ]
    },
    options: {}
});

// jQuery('img.svg').each(function () {
//     var $img = jQuery(this);
//     var imgID = $img.attr('id');
//     var imgClass = $img.attr('class');
//     var imgURL = $img.attr('src');

//     jQuery.get(imgURL, function (data) {
//         // Get the SVG tag, ignore the rest
//         var $svg = jQuery(data).find('svg');

//         // Add replaced image's ID to the new SVG
//         if (typeof imgID !== 'undefined') {
//             $svg = $svg.attr('id', imgID);
//         }
//         // Add replaced image's classes to the new SVG
//         if (typeof imgClass !== 'undefined') {
//             $svg = $svg.attr('class', imgClass + ' replaced-svg');
//         }

//         // Remove any invalid XML tags as per http://validator.w3.org
//         $svg = $svg.removeAttr('xmlns:a');

//         // Replace image with new SVG
//         $img.replaceWith($svg);

//     }, 'xml');

// });

function copyCode() {
    var copyText = document.createElement("INPUT")
    copyText.setAttribute("value", `class Shekhar{
                contructor(){
                this.name = "Shekhar Bhattacharya",
                this.age = 26,
                this.bio = "I am a javascript developer with a zest for technological innovation"
                }
                
                get experience() {
                return [
                "Research Assistant at T.U.Kaiserslautern (09/2019 - Present)",
                "Fullstack Developer at InnoCow GmbH (06/2018 - 07/2019)",
                "Fullstack Developer at Algoworks Technologies (01/2017 - 09/2017)",
                "Software Developer at Magic EdTech (05/2016 - 01/2017)"
                ]}
                
                get education() {
                return [
                "MS in Applied Computer Science at T.U.Kaiserslautern, Germany - 11/2020",
                "BE in Computer Science at Dr. A.P.J. Abdul Kalam Technical University, India"
                ]
                }
                
                get skills() {
                return {
                "Frontend": "Javascript, ReactJS, React Native, Redux, HTML3, CSS5",
                "Backend": "NodeJS, Express, MongoDB, Firebase, ArangoDB",
                "Deployment": "Docker, Kubernetes, CI/CD, Google Cloud"
                }
                }
                }`)
    console.log(copyText)
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    //alert("Copied);
    let btn = document.getElementById("copy_code_btn")
    btn.innerHTML = "Copied!"
}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].style.transition = "all 1s";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    x[myIndex - 1].style.transition = "all 1s";
    setTimeout(carousel, 7000); // Change image every 2 seconds
}


const squares = document.querySelector('.squares');
for (var i = 1; i < 365; i++) {
    const level = i >= 310 ? 0 : Math.floor(Math.random() * 3);
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}

var  sender = document.getElementById("sender")
var sendername = document.getElementById("sender_name")

var  form = document.getElementById("contact_form")
form.onsubmit = function()  {
    event.preventDefault()
    sendername.innerHTML = `Dear  ${sender.value},`
    modal.style.display = "block";
    setInterval(() => {
        modal.style.display = "none";
    }, 3000);
}

// Get the modal
var modal = document.getElementById("myModal");
var themeModal = document.getElementById("themeModal")

var themeType  = document.getElementsByClassName("theme__type")

var themeModal__content = document.getElementById("themeModal__content")


// Get the button that opens the modal

// Get the <span> element that closes the modal
var close_btn = document.getElementById("close_btn");

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
close_btn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == themeModal) {
        modal.style.display = "none";
        themeModal.style.display = "none";
    }
}

function getThemeType(event) {
    if (Object.keys(themeColors).includes(event.id)){
        rootEl.style.setProperty('--accent', themeColors[event.id][0]);
        rootEl.style.setProperty('--bodycolor', themeColors[event.id][1]);
        rootEl.style.setProperty('--textcolor', themeColors[event.id][2]);
        mySvg.src = "public/images/" + themeColors[event.id][3]
    }
    themeModal.style.display="none"
}

//theme modal



var themeBtn = document.getElementById("themeBtn")
themeBtn.onclick = function() {
    themeModal.style.display = "block"
    console.log(themeModal__content)
}



// themeColors.forEach((item) => {
//     root.style.setProperty('--red', 'blue');
// })
