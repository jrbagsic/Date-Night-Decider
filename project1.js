const dateFate = {
    summer: [
        {
            title: 'A Picnic In The Park',
            vibe: 'casual',
            activity: 'eat'
        },
        {
            title: 'A Long Walk On The Beach',
            vibe: 'casual',
            activity: 'do'
        },
        {
            title: 'Attend A Food Truck Street Festival',
            vibe: 'adventurous',
            activity: 'eat'
        },
        {
            title: 'Go Moutain Rock Climing',
            vibe: 'adventurous',
            activity: 'do'
        },
        {
            title: 'Eat At A 5-Star Restaurant',
            vibe: 'formal',
            activity: 'eat'
        },
        {
            title: 'Go Ballroom Dancing',
            vibe: 'formal',
            activity: 'do'
        }
    ],
    winter: [
        {
            title: 'Have Coffee And Pastries At A Cafe',
            vibe: 'casual',
            activity: 'eat'
        },
        {
            title: 'Build A Snowman In The Park',
            vibe: 'casual',
            activity: 'do'
        },
        {
            title: 'Have A BBQ After Ice Fishing',
            vibe: 'adventurous',
            activity: 'eat'
        },
        {
            title: 'Go Sledding Down Slopes',
            vibe: 'adventurous',
            activity: 'do'
        },
        {
            title: 'Do A Fine Dining Menu Tasting',
            vibe: 'formal',
            activity: 'eat'
        },
        {
            title: 'Attend An Orchestra Concert',
            vibe: 'formal',
            activity: 'do'
        }
    ]
};

$(document).ready(function(){

	$('form').on('submit', function(event){
		event.preventDefault();
		const userSeasonChoice = $('input[name=season]:checked').val();
		const userVibeChoice = $('input[name=vibe]:checked').val();
        const userActivityChoice = $('input[name=activity]:checked').val();

		const dateOptions = dateFate[userSeasonChoice];

		const filteredOptions = dateOptions.filter( (fate) => {
				if (fate.vibe === userVibeChoice && fate.activity === userActivityChoice ) {
					return fate;
				}
			})

		function randomResult(array){
			const randomNumber = Math.floor( Math.random() * array.length )
			return array[randomNumber];
		}

		const chosenDate = randomResult(filteredOptions);

		const finalHTML = `<h2>${chosenDate.title}</h2>`

		$('.results').html(finalHTML);

	})
});