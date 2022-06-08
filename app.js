let paragraphs = [
    `The bridge spanning a 100-foot gully stood in front of him as the last obstacle blocking 
    him from reaching his destination. While people may have called it a "bridge", 
    the reality was it was nothing more than splintered wooden planks held together 
    by rotting ropes. It was questionable whether it would hold the weight of a child,
    let alone the weight of a grown man. The problem was there was no other way across 
    the gully, and this played into his calculations of whether or not it was worth the 
    risk of trying to cross it.`,
    `It was easy to spot her. All you needed to do was look at her socks. 
    They were never a matching pair. One would be green while the other would be blue.
    One would reach her knee while the other barely touched her ankle. 
    Every other part of her was perfect, but never the socks. 
    They were her micro act of rebellion.`,
    `The irony of the situation hadn't escaped her. She had taken years to 
    sculpt the perfect persona with the perfect look that she shared on Instagram. 
    She knew her hundreds of thousands of followers envied that life she showed and
    stayed engaged with her because they wanted that life too.
    The truth was that she wanted the perfect life she portrayed more than any of her fans.
    The fact was that despite all the perfection she shared on social media, her life was 
    actually more of a mess than most.`,
    `Benny was tired. Not the normal every day tired from a hard day o work. The exhausted type of tired where you're surprised your body can even move. All he wanted to do was sit in front of the TV, put his feet up on the coffee table, and drink a beer. The only issue was that he had forgotten where he lived.
    `,
    `The house was located at the top of the hill at the end of a winding road. It wasn't obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person.`,
    `Eating raw fish didn't sound like a good idea. "It's a delicacy in Japan," didn't seem to make it any more appetizing. Raw fish is raw fish, delicacy or not.`,
    `Wandering down the path to the pond had become a daily routine. Even when the weather wasn't cooperating like today with the wind and rain, Jerry still took the morning stroll down the path until he reached the pond. Although there didn't seem to be a particular reason Jerry did this to anyone looking in from the outside, those who knew him well knew exactly what was going on. It could all be traced back to a specific incident that happened exactly 5 years previously.`,
    `Benny was tired. Not the normal every day tired from a hard day o work. The exhausted type of tired where you're surprised your body can even move. All he wanted to do was sit in front of the TV, put his feet up on the coffee table, and drink a beer. The only issue was that he had forgotten where he lived.`,
    `The house was located at the top of the hill at the end of a winding road. It wasn't obvious that the house was there, but everyone in town knew that it existed. They were just all too afraid to ever go and see it in person.`
];
let form = document.querySelector('.lorem-form');
let input = document.getElementById('amount');
let result_section = document.querySelector('.para-result');

form.addEventListener(`submit`,(e) => {
    //prevent submission by default
    e.preventDefault();
    let value = parseInt(input.value)
    let random = Math.floor(Math.random()*paragraphs.length)
    if(isNaN(value) || value<0 || value >9) {
        result_section.innerHTML =`<p>${paragraphs[random]}</p>`
    }
    else {
        let generated_p = paragraphs.slice(0,value);
        generated_p = generated_p.map((e) => {
            return `<p>${e}</p>`
        }).join('');
        result_section.innerHTML = generated_p;
    }
});