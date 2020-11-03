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
                'rgba(163, 99, 247,  0.8)',
                'rgba(133, 47, 245,  0.8)',
                'rgba(117, 16, 247,  0.8)',
            ],
            borderColor:[
                'rgba(163, 99, 247,  1)',
                'rgba(133, 47, 245,  1)',
                'rgba(117, 16, 247,  1)',
            ]

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